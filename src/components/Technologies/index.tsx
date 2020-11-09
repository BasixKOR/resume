import {
  Box,
  BoxProps,
  Heading,
  Wrap,
  WrapItem,
  useTheme,
} from '@chakra-ui/core';
import Image from 'next/image';

import type { TechnologyContent } from 'lib/technologies';

export interface TechnologiesProps extends BoxProps {
  technologies: TechnologyContent[];
}

function Technologies({
  technologies,
  ...props
}: TechnologiesProps): JSX.Element {
  const theme = useTheme();

  return (
    <Box {...props}>
      <Heading>Technologies</Heading>
      <Wrap>
        {technologies.map((tech) => (
          <WrapItem key={tech.title}>
            <Image
              src={tech.thumbnail}
              alt={tech.title}
              width={theme.sizes.sm}
              height={theme.sizes.sm}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default Technologies;
