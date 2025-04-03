import React from 'react';
import { DEFAULT_COLOR } from './src/context/ThemeContext';

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setBodyAttributes({
    className: 'dark',
    style: `--primary-color: ${DEFAULT_COLOR};`
  });

  setHeadComponents([
    <link
      key="favicon-svg"
      rel="icon"
      type="image/svg+xml"
      href="/favicon.svg"
    />,
    <link
      key="favicon-32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon.svg"
    />,
    <link
      key="favicon-16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon.svg"
    />,
    <link
      key="apple-touch-icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon.svg"
    />,
  ]);
}; 