import { useRouter } from 'next/router';

import { Button } from '../../../components/Button';

import { Container, Main } from './styles';

export function Donate() {
  const router = useRouter();

  return (
    <Container id="donate_page">
      <Main>
        <section>
          <h1>Quero doar bolsas!</h1>
          <p>Você é uma empresa de educação e quer doar bolsas de estudos? Clique no botão abaixo</p>
          <Button label='Quero doar bolsas de estudos!' onClick={() => router.push('/maintenance')} />
        </section>
      </Main>
    </Container>
  );
}