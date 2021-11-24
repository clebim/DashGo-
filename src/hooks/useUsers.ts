import { useQuery } from "react-query";
import { api } from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number,
  users: User[],
}

const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users: User[] =  data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  });

  return { users, totalCount };
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
  });
}