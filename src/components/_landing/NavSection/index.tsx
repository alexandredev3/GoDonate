import { styled } from "../../../styles/styled";

import { NavItem } from './NavItem';

const Container = styled('ul', {
  display: 'flex',
});

const paths = [
  {
    label: 'Início',
    path: '#home_page'
  },
  {
    label: 'Sobre',
    path: '#about_page'
  },
  {
    label: 'Como participar',
    path: '#participate_page'
  },
  {
    label: 'Quero doar bolsas',
    path: '#donate_page'
  },
]

export function NavSection() {
  return (
    <Container>
      {paths.map(({ path, label }, index) => {
        const key = `${path}-${index}`;

        return (
          <NavItem
            key={key}
            path={path}
            label={label}
          />
        )
      })}
    </Container>
  );
}
