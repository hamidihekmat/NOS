import { SVGProp } from '../interfaces/svg.interface';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const HomeIcon = ({ size, href }: SVGProp) => {
  const [select, setSelect] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  useEffect(() => {
    if (isMobile && `/${router.asPath.split('/')[1]}` === href) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }, [isMobile]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '24'}
      height={size ? size : '24'}
      viewBox={`0 0 ${size ? size : 24} ${size ? size : 24}`}
    >
      <g
        fill="none"
        stroke={select ? 'var(--bg-canvas)' : '#F0F6FC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      >
        <path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z" />
      </g>
    </svg>
  );
};
