import Link from 'next/link';

import { styled } from "../../../../styles/styled";

interface NavItemProps {
  path: string;
  label: string;
}

const Container = styled('li', {
  margin: '0 2.5rem',
  fontWeight: 600,
  listStyle: 'none',
});

export function NavItem({ label, path }: NavItemProps) {
  return (
    <Container>
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </Container>
  );
}
