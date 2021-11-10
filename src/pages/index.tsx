import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from "../components/Form/input";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4" > 
          <Input 
            type="email" 
            name="email"
            label="E-mail"
            {...register('email')}
            error={errors.email}
          />

          <Input 
            type="password" 
            name="password"
            label="Senha"
            {...register('password')}
            error={errors.password}
          />
        </Stack>
          

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg" 
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
