import { FC } from "react";


export const Caret: FC = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.414 16A1 1 0 014 14.586l7.293-7.293a1 1 0 011.414 0L20 14.586A1 1 0 0118.586 16l-5.879-5.879a1 1 0 00-1.414 0L5.414 16z"
        fill="currentColor"
      />
    </svg>
  );
}
