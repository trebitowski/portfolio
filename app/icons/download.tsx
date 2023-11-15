import { SVGProps } from "react";

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M14 6V2.01c.06.05.12.11.17.16l5.66 5.66c.05.05.11.11.16.17H16a2.006 2.006 0 0 1-2-2Z" />
    <path d="M20.94 10H16a4 4 0 0 1-4-4V1.06a3.683 3.683 0 0 0-.66-.06H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-9.34a3.683 3.683 0 0 0-.06-.66ZM7 14h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10 6H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z" />
  </svg>
);
export default DownloadIcon;
