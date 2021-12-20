import { useRouter } from 'next/router';

import { styled } from "../styles/styled"

import { Button } from '../components/Button';

const Container = styled('div', {
  width: '542px',
  height: '100vh',

  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  button: {
    width: '100%',
    marginTop: '24px',
  }
});

export default function Maintenance() {
  const router = useRouter();

  return (
    <Container>
      <h1>Em Manutenção...</h1>
      <Button label="Voltar" onClick={() => router.push('/')} />
    </Container>
  )
}