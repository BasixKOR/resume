import { Img, HTMLChakraProps } from '@chakra-ui/core';
import NextImage from 'next/image';
import { forwardRef, Ref } from 'react';

type NextImageProps = Parameters<typeof NextImage>[0]; // FIXME should be replaced with import from next when it exports its type
export type ImageProps = Omit<
  HTMLChakraProps<'img'>,
  'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'
> &
  NextImageProps;

function Image(props: ImageProps, ref: Ref<HTMLImageElement>): JSX.Element {
  return <Img ref={ref} as={NextImage} {...props} />; // FIXME kinda upstream: https://github.com/chakra-ui/chakra-ui/issues/2248
}

export default forwardRef(Image);
