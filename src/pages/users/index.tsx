import React, { useState } from 'react';
import Link from 'next/link';
import { Flex, 
  Box, 
  Heading, 
  Button, 
  Checkbox,
  Icon, 
  Text,
  Table, 
  Thead, 
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  Spinner,
  Link as ChakraLink
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { useUsers } from '../../hooks/useUsers';
import { queryClient } from '../../services/reactQuery/queryClient';
import { api } from '../../services/api';

export default function Users() {

  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching ,error } = useUsers(page);

  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handlePrefetchUser = async (userId: number) => {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutos
    });
  };

  return (
    <Flex direction="column" h="100vh" >
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >Usuários
            {
              !isLoading && isFetching && (<Spinner size="sm" color="gray.500" ml="4" />)
            }
            </Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="small" 
                colorScheme="pink" 
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar usuário
              </Button>
            </Link>
          </Flex>

          {
            isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                Falha ao obter dados do usuário
              </Flex>
            ) :(
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" w="8" >
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWiderVersion && <Th>Data de cadastro</Th>}
                      <Th width="8" ></Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {
                      data.users.map(user => (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}  >
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <ChakraLink color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id) }> 
                                <Text fontWeight="bold" >{user.name}</Text>
                              </ChakraLink>
                              <Text fontSize="small" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          {isWiderVersion && <Td>{user.createdAt}</Td>}
                          {
                            isWiderVersion &&
                            <Td>
                              <Button 
                                as="a" 
                                size="sm" 
                                fontSize="small" 
                                colorScheme="purple" 
                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                              >
                                Editar
                              </Button>
                            </Td>
                          }
                        </Tr>
                      ))
                    }
                  </Tbody>
                </Table>
                <Pagination 
                  totalCountOfRegisters={data.totalCount}
                  registerPerPage={10}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )
          }
        </Box>
      </Flex> 
    </Flex>   
  )
}