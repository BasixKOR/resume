import { Stack } from '@chakra-ui/core';
import { GetStaticProps } from 'next';

import Technologies from 'components/Technologies';
import Welcome from 'components/Welcome';

import { getTechnologyContents, TechnologyContent } from 'lib/technologies';

interface IndexProps {
  technologies: TechnologyContent[];
}

const Index: React.FC<IndexProps> = ({ technologies }) => (
  <>
    <Welcome />
    <Stack mt="4">
      <Technologies technologies={technologies} />
    </Stack>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      technologies: await getTechnologyContents(),
    },
  };
};

export default Index;
