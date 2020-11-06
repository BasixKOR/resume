import { useRef } from 'react';

import Menu from 'components/Welcome/Menu';
import Header from 'components/Welcome/Header';
import useInteresction from 'utils/use-intersection';

function Welcome(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useInteresction(ref);

  return (
    <>
      <Menu useBackground={!isVisible} />
      <Header ref={ref} />
    </>
  );
}

export default Welcome;
