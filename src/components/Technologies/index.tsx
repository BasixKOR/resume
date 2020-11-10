import {
  Container,
  ContainerProps,
  Heading,
  Wrap,
  WrapItem,
  useTheme,
  Tooltip,
  Img,
} from '@chakra-ui/core';

import type { TechnologyContent } from 'lib/technologies';

export interface TechnologiesProps extends ContainerProps {
  technologies: TechnologyContent[];
}

function Technologies({
  technologies,
  ...props
}: TechnologiesProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container {...props}>
      <Heading>Technologies</Heading>
      <Wrap mt="2" spacing="2">
        {technologies.map((tech) => (
          <WrapItem key={tech.title}>
            <Tooltip label={tech.title}>
              <Img src={tech.thumbnail} alt={tech.title} boxSize="5ch" />
            </Tooltip>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}

export default Technologies;
