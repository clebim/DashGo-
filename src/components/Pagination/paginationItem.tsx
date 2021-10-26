import { Button } from '@chakra-ui/react';

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
}

export const PaginationItem = ({ isCurrent = false, number }: PaginationItemProps) => {

  if(isCurrent) {
    return (
        <Button
        siz="m"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {number}
    </Button>
    )
  }

  return (
    <Button
      siz="m"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {number}
    </Button>
  )
}