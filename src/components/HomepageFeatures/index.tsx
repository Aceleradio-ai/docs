import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Música que sente o volante',
    image: '/img/musica3.gif',
    description: (
      <>
        Aceleradio.AI analisa sua condução em tempo real e ajusta a trilha sonora conforme o seu humor no trânsito.
      </>
    ),
  },
  {
    title: 'Do pop ao metal, só depende do pedal',
    image: '/img/musica2.gif',
    description: (
      <>
        Pisou fundo? Vem som pesado! Tá tranquilo? Rola um lo-fi ou pop leve. Seu estilo ao volante define a batida.
      </>
    ),
  },
  {
    title: 'IA que entende sua direção',
    image: '/img/musica1.gif',
    description: (
      <>
        Nossa inteligência artificial identifica padrões de direção agressiva ou suave para ajustar a vibe musical automaticamente.
      </>
    ),
  },
];


function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureGif} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
