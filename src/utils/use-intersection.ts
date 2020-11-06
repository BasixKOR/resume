import { MutableRefObject, useEffect, useState } from 'react';

function useInteresction(ref: MutableRefObject<HTMLElement | null>): boolean {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  });
  return visible;
}

export default useInteresction;
