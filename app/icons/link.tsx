import { SVGProps } from "react";

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15 10v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4v2H2v11h11v-4h2Zm-1.003-6.586L7.704 9.707 6.29 8.293 12.583 2H8.997V0h7v7h-2V3.414Z"
    />
  </svg>
);
export default LinkIcon;
