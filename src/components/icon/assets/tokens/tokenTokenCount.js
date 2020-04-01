import React from 'react';

const EuiIconTokenBinary = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d="M8 4H3V7H8V4Z" />
      <path d="M13 9H8V12H13V9Z" />
      <path d="M10 4H13V7H10V4Z" />
      <path d="M6 9H3V12H6V9Z" />
    </g>
  </svg>
);

export const icon = EuiIconTokenBinary;