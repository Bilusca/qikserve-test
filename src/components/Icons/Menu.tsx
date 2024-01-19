import { FC } from 'react'

export const Menu: FC = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3168_601)">
        <rect width="16" height="2" rx="1" fill="currentColor" />
        <rect y="7" width="16" height="2" rx="1" fill="currentColor" />
        <rect y="14" width="16" height="2" rx="1" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_3168_601">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}
