import { GetStaticProps } from 'next';

type Props = {
  host: string;
};

const Home: React.FC<Props> = ({ host }) => {
  return <div>{host}</div>;
};

export const getStaticProps: GetStaticProps<Props> = async (_context) => {
  // must be async
  return {
    props: {
      host: '123',
    },
  };
};

export default Home;
