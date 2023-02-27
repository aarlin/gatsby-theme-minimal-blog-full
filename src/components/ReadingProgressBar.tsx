import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop || document.body.scrollTop;
    const scrollHeight = element.scrollHeight || document.body.scrollHeight;
    const percent = (scrollTop / (scrollHeight - element.clientHeight)) * 100;

    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return (
    <Box
      bgGradient="linear(to-r, yellow.400, orange.500)"
      w={`${width}%`}
      h="6px"
      pos="fixed"
      top="0"
      left="0"
      borderRadius="0 2px 0 0"
      zIndex="50"
    />
  );
}
