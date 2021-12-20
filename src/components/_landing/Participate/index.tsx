import { useRouter } from 'next/router';
import { useState } from 'react';

import { Button } from '../../Button';
import { WidgetSection } from './Widget';

import { Container, Main } from './styles';

type ActiveWidget = {
  title: string;
  text: string;
};

const widgetData = [
  {
    title: 'Como criar uma conta na plataforma?',
    description:
      'Como criar uma conta na plataforma?',
    text: 'Clique no botão abaixo para ir para a página de cadastro, você tem a opção de criar uma conta com Google ou Facebook.',
  },
  {
    title: 'Como escolher uma bolsa?',
    description:
      'Como escolher uma bolsa?',
    text: 'Quando você criar uma conta você terá acesso as bolsas disponíveis no momento.\nLembrando, apenas escolha aquela que faz mais sentido para você.',
  },
  {
    title: 'Como concorrer a uma bolsa?',
    description:
      'Como concorrer a uma bolsa?',
    text: 'Para concorrer a uma bolsa você precisa preencher um formúlario com suas informações de contado e contar pra gente um pouco sobre você e sua história.',
  },
];

export function Participate() {
  const router = useRouter();
  const [activeWidget, setActiveWidget] = useState<ActiveWidget | null>(null);

  return (
    <Container id="participate_page">
      <Main>
        <section className="right__content">
          <WidgetSection
            widget={widgetData}
            onSelect={(title, text) =>
              setActiveWidget({
                title,
                text,
              })
            }
          />
        </section>
        <section className="left__content">
          <h1>
            {activeWidget
              ? activeWidget.title
              : 'Como posso concorrer a uma bolsa?'}
          </h1>
          <p>
            {activeWidget
              ? activeWidget.text
              : 'Queremos selecionar as pessoas mais comprometidas para receber asbolsas de estudo. Pessoas que de fato vão extrair o máximo de valordo programa para se tornarem profissionais de impacto, capazes deconstruir soluções que transformem o mundo, para isso, você precisacompletar os três passos abaixo, assim vamos selecionar a pessoacerta para a bolsa.'}
          </p>
          <Button
            label="Quero concorrer a uma bolsa!"
            className="participate__button"
            onClick={() => router.push('/maintenance')}
          />
        </section>
      </Main>
    </Container>
  );
}
