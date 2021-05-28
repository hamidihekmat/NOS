import { SVGProp } from '../interfaces/svg.interface';

export const HomeIcon = ({ size, color }: SVGProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '24'}
      height={size ? size : '24'}
      viewBox={`0 0 ${size ? size : 24} ${size ? size : 24}`}
    >
      <g
        fill="none"
        stroke={color ? color : '#FFFFFF'}
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
