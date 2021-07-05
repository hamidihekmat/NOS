import { SVGProp } from '../interfaces/svg.interface';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const SearchIcon = ({ size, href }: SVGProp) => {
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
      viewBox={`0 0 ${size ? size : 24} ${size ? size : 24}`}
      data-v-7b357a42=""
      width={size ? size : '24'}
      height={size ? size : '24'}
    >
      <g
        fill="none"
        stroke={select ? 'var(--bg-canvas)' : '#F0F6FC'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeMiterlimit="10"
        data-v-7b357a42=""
      >
        <path d="M16.4 16.7l6.3 6.5" data-v-7b357a42=""></path>
        <ellipse
          cx="10.5"
          cy="9.8"
          rx="9.2"
          ry="9.1"
          data-v-7b357a42=""
        ></ellipse>
      </g>
    </svg>
  );
};
