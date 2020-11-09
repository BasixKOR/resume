import {
  Container,
  ContainerProps,
  Heading,
  Wrap,
  WrapItem,
  useTheme,
  Tooltip,
} from '@chakra-ui/core';
import Image from 'next/image';

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
              <Image
                src={tech.thumbnail}
                alt={tech.title}
                width={theme.sizes.lg}
                height={theme.sizes.lg}
              />
            </Tooltip>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}

export default Technologies;
