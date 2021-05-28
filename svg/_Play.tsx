import { SVGProp } from '../interfaces/svg.interface';

export const Play = ({ size, color }: SVGProp) => {
  return (
    <svg
      viewBox="0 0 560 560"
      xmlns="http://www.w3.org/2000/svg"
      strokeMiterlimit="1.414"
      strokeLinejoin="round"
      aria-hidden="true"
      stroke={color ? color : '#FFFFFF'}
      width={size}
      color={color ? color : '#FFFFFF'}
      filter=" brightness(0) invert(1)"
    >
      <path d="m112 504l0-448 392 224-392 224"></path>
    </svg>
  );
};
