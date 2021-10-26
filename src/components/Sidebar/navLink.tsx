import { ElementType } from 'react';
import { Text, Link, Icon, LinkProps } from "@chakra-ui/react";

type NavLinkProps = LinkProps & {
  icon: ElementType;
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium" >{children}</Text>
  </Link>
  )
}