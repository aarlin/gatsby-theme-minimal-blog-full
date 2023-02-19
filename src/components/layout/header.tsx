import {
  HStack,
  Heading,
  IconButton,
  Link,
  Tooltip,
  Container,
  chakra,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiCommand } from 'react-icons/fi';

import { CmdPaletteContext } from 'src/providers/cmd-palette-provider';

const Header = () => {
  const { open: openCommandPalette } = useContext(CmdPaletteContext);
  const [shortcut, setShortcut] = useState<string>();

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf('Mac OS X') != -1 ? 'Cmd + K' : 'Ctrl + K'
    );
  }, [setShortcut]);

  return (
    <HStack
      as='nav'
      position='sticky'
      zIndex='popover'
      top={0}
      alignItems='center'
      justifyContent='space-between'
      w='full'
      mb={16}
      py={3}
      bg='white'
      _dark={{
        bg: 'gray.800',
      }}
      insetX={0}
      transitionDuration='normal'
      transitionProperty='background'
    >
      <Container
        alignItems='center'
        justifyContent='space-between'
        display='flex'
        maxW='container.md'
        px={{ base: 4, lg: 0 }}
      >
        <Heading size='sm'>
          <Link as={NextLink} href='/'>
          {/* <svg data-v-70b83f88="" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid meet" color-interpolation-filters="sRGB" style="margin: auto;">
            <rect data-v-70b83f88="" x="0" y="0" width="100%" height="100%" fill="#ffffff" fill-opacity="1" class="background"></rect>
            <g data-v-70b83f88="" class="iconmbgsvg">
              <g fill="#333" hollow-target="textNormalTran">
                <g opacity="0.55">
                  <g>
                    <rect fill="#333" fill-opacity="0" stroke-width="2" x="0" y="0" width="112.5" height="122.02661807295564" class="image-rect"></rect>
                    <svg x="0" y="0" width="112.5" height="122.02661807295564" filtersec="colorsb7017447100" class="image-svg-svg primary" style="overflow: visible;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.0015622725477442145 -0.000027662112188409083 92.19300079345703 100.00003051757812">
                        <path d="M76.57 55.43l-36.23-36L22 1.2A14.48 14.48 0 0 0 16.2 0C7.37 0 .19 8.1 0 18.16v43.47a18.67 18.67 0 0 0 18.43 18.91H69.2a17.86 17.86 0 0 0 10-15.92 17.4 17.4 0 0 0-2.63-9.19z" fill="#e62c5a" opacity=".8"></path>
                        <path d="M73.76 19.46H23a17.86 17.86 0 0 0-10 15.92 17.46 17.46 0 0 0 2.61 9.2l36.23 36L70.23 98.8A14.52 14.52 0 0 0 76 100c8.82 0 16-8.09 16.19-18.15V38.36a18.67 18.67 0 0 0-18.43-18.9z" fill="#0fabf6" opacity=".8"></path>
                        <path d="M15.61 44.58l36.23 36H69.2a17.86 17.86 0 0 0 10-15.92 17.4 17.4 0 0 0-2.62-9.19l-36.23-36H23a17.86 17.86 0 0 0-10 15.91 17.46 17.46 0 0 0 2.61 9.2z" fill="#501b8d" opacity=".5"></path>
                      </svg>
                    </svg>
                  </g>
                </g>
                <g transform="translate(8.645000457763672,38.258310317993164)">
                  <g data-gra="path-name" fill-rule="" class="tp-name">
                    <g transform="scale(1)">
                      <g>
                        <path d="M22.6-45.51L22.6-45.51 23.58-45.51Q27.1-45.51 29.26-39.9L29.26-39.9Q45.54-7.81 46.02-6.54L46.02-6.54 46.02-4.82Q46.02-1.94 42.21-0.19L42.21-0.19Q41.39 0 40.88 0L40.88 0 40.05 0Q36.5 0 34.31-5.81L34.31-5.81Q23.11-27.96 22.95-28.09L22.95-28.09Q10.41-2.89 9.71-1.87L9.71-1.87Q7.84 0 5.84 0L5.84 0 5.05 0Q2.16 0 0.29-3.49L0.29-3.49Q0-4.51 0-5.11L0-5.11 0-5.81Q0-7.08 3.24-13.14L3.24-13.14 18.54-43.35Q20.34-45.51 22.6-45.51ZM54.53-45.51L54.53-45.51 55.35-45.51Q58.18-45.51 60.08-42.28L60.08-42.28Q60.62-41.23 60.62-39.77L60.62-39.77 60.62-11.3 89.06-11.3Q94.07-11.3 95.21-6.44L95.21-6.44 95.21-4.92Q95.21-2.29 91.95-0.44L91.95-0.44Q91.03 0 90.23 0L90.23 0 54.27 0Q51.38 0 49.54-3.49L49.54-3.49Q49.19-4.41 49.19-5.11L49.19-5.11 49.19-40.21Q49.19-43.67 53.26-45.32L53.26-45.32Q53.96-45.51 54.53-45.51Z" transform="translate(0, 45.5099983215332)"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <defs v-gra="od"></defs>
          </svg> */}
            <chakra.svg
              width={10}
              height={10}
              viewBox='0 0 640 577'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M309.493 90.3561L90.4279 486.459H549.572L309.493 90.3561Z'
                fill='#805AD5'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M307.698 0.0178706C339.963 -0.622139 370.124 15.9673 386.841 43.5492L626.921 439.652C643.832 467.554 644.38 502.397 628.354 530.815C612.328 559.234 582.217 576.815 549.572 576.815H90.4279C58.4239 576.815 28.8036 559.912 12.5424 532.369C-3.71875 504.826 -4.1985 470.746 11.2809 442.757L230.346 46.6534C245.954 18.4304 275.433 0.65788 307.698 0.0178706ZM313.075 270.691L243.716 396.103H389.088L313.075 270.691Z'
                fill='#805AD5'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M318.481 58.6209C333.477 63.3871 343.038 78.1035 341.328 93.7885L315.997 326.19L370.419 227.625C379.254 211.625 399.346 205.838 415.298 214.698C431.249 223.559 437.019 243.712 428.185 259.712L294.215 502.348C286.597 516.146 270.333 522.64 255.345 517.869C240.356 513.097 230.803 498.385 232.512 482.706L257.8 250.693L118.99 502.64C110.17 518.648 90.083 524.454 74.1234 515.608C58.1637 506.762 52.3755 486.614 61.195 470.606L279.61 74.1724C287.219 60.3624 303.485 53.8546 318.481 58.6209ZM480.635 323.565C496.605 332.392 502.417 352.533 493.616 368.551L446.94 453.507H547.875C566.11 453.507 580.892 468.334 580.892 486.623C580.892 504.912 566.11 519.739 547.875 519.739H391.048C379.37 519.739 368.561 513.551 362.621 503.466C356.682 493.381 356.496 480.899 362.132 470.64L435.784 336.585C444.584 320.567 464.665 314.738 480.635 323.565Z'
                fill='white'
              />
            </chakra.svg>
          </Link>
        </Heading>
        <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
          <Tooltip label={`Command Palette (${shortcut})`}>
            <IconButton
              aria-label='toggle theme'
              icon={<FiCommand />}
              onClick={openCommandPalette}
              size='sm'
              variant='ghost'
            />
          </Tooltip>
        </HStack>
      </Container>
    </HStack>
  );
};

export default Header;
