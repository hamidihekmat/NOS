import { SVGProp } from '../interfaces/svg.interface';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const TVIcon = ({ size, href }: SVGProp) => {
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
      >
        <path d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7" />
      </g>
    </svg>
  );
};
