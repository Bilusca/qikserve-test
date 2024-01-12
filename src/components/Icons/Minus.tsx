import { FC } from "react";

export const Minus: FC = (props) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
      />
      <rect x={4} y={8.5} width={12} height={3} rx={1.5} fill="#fff" />
    </svg>
  );
}

