import { FC } from "react";

export const Plus: FC = (props) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.143 10.857h-4.286v4.286A.86.86 0 0110 16a.86.86 0 01-.857-.857v-4.286H4.857A.86.86 0 014 10a.86.86 0 01.857-.857h4.286V4.857A.86.86 0 0110 4a.86.86 0 01.857.857v4.286h4.286A.86.86 0 0116 10a.86.86 0 01-.857.857z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.89 11.143h-3.747v3.711c0 .629-.514 1.143-1.143 1.143a1.146 1.146 0 01-1.143-1.143v-3.711H5.145A1.146 1.146 0 014.002 10c0-.629.515-1.143 1.143-1.143h3.712V5.156c0-.629.514-1.143 1.143-1.143s1.143.514 1.143 1.143v3.701h3.746c.629 0 1.143.514 1.143 1.143s-.514 1.143-1.143 1.143z"
        fill="#fff"
      />
    </svg>
  );
}