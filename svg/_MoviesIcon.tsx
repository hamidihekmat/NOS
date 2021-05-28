import { SVGProp } from '../interfaces/svg.interface';

export const MoviesIcon = ({ size, color }: SVGProp) => {
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
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        <path d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5" />
        <path d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3" />
        <path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6" />
      </g>
    </svg>
  );
};
