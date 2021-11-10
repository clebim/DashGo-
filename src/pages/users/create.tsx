import Link from 'next/link';
import { Flex, Box, Heading, Divider, Stack, SimpleGrid, Button } from '@chakra-ui/react';
import { Input } from '../../components/Form/input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
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
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} >
          <Heading size="lg" fontWeight="normal" >Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700" /> 
          <Stack spacing="8" direction="column">

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="Email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </Stack>  

          <Flex mt="8" justify="flex-end">
            <Stack direction="row" spacing="4" >
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex> 
    </Flex>   
  )
}