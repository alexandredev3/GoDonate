import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

import homeIllustration from '../../../assets/images/home_illustation.png';

import { Button } from '../../Button';

import { Container, Main, EmailInputWrapper } from './styles';

export function Home() {
  return (
    <Container id="home_page">
      <Main>
        <section>
          <h1>Concorra à bolsas de estudo para cursos.</h1>
          <p>Muitas pessoas estão desempregadas e passando por um momento muito difícil em suas vidas, e talvez essas pessoas não tenham condições de investir em um curso, GoDonate tem o objetivo de ajudar essas pessoas.</p>

          <EmailInputWrapper>
            <div>
              <div className='input__wrapper'>
                <FiMail size={30} color='#FFFFF' />
                <input type="email" placeholder="Digite seu E-mail" />
              </div>

              <Button type='button' label='Quero participar' />
            </div>
          </EmailInputWrapper>
        </section>
        <Image src={homeIllustration} alt="Ilustração" width={724} height={521} />
      </Main>
    </Container>
  );
}