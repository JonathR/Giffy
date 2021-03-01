import { useEffect } from 'react';
import { useRef } from 'react/cjs/react.development';

export default function useTitle({ title }) {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previousTitle = prevTitle.current;
    document.title = `${title} | Giffy`;

    return () => (document.title = previousTitle);
  }, [title]);
}
