import { useRouter } from 'next/router';

import { styled } from '../../styles/styled';

import { Logo } from '../Logo';
import { Button } from '../Button';
import { NavSection } from './NavSection';

const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',
});

export function Header() {
  const router = useRouter();

  return (
    <Container>
      <Logo />

      <NavSection />

      <div>
        <Button
          className="donate__button"
          label="Quero doar"
          outlined
          onClick={() => router.push('#donate_page')}
        />
        <Button
          className="participate__button"
          label="Participar"
          onClick={() => router.push('/cadastrar')}
        />
      </div>
    </Container>
  );
}
