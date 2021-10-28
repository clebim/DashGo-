import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext } from 'react';
import { useEffect } from 'toasted-notes/node_modules/@types/react';

type SidebarDrawerProviderProps = {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext<SidebarDrawerContextData>({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {

  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)