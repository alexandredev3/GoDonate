import Image from 'next/image';

import aboutIllustrationImg from '../../../assets/images/about_illustration.png';

import { Container, Main } from './styles';

export function About() {
  return (
    <Container id="about_page">
      <Main>
        <Image src={aboutIllustrationImg} alt="Ilustração" width={868} height={770} />
        <section>
          <h1>Qual é o objetivo da <span>GoDonate?</span></h1>
          <p>O objetivo da <span>GoDonate</span> é construir uma plataforma em que empresas de educação podem doar bolsas de estudos para que pessoas que estão passando por um momento difícil, poderam concorrer a essas bolsas.</p>
        </section>
      </Main>
    </Container>
  );
}