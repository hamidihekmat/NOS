import { SVGProp } from '../interfaces/svg.interface';

export const SearchIcon = ({ size, color }: SVGProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size ? size : 24} ${size ? size : 24}`}
      data-v-7b357a42=""
      width={size ? size : '24'}
      height={size ? size : '24'}
      color={color ? color : '#FFFFFF'}
    >
      <g
        fill="none"
        stroke={color ? color : '#FFFFFF'}
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
