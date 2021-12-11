import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const BasicButton = ({ style, title, logo, alt, handleAction }) => {
  return (
    <button css={button} className={style} onClick={handleAction}>
      {logo && <img src={logo} alt={alt} />}
      {title}
    </button>
  )
}

const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  -webkit-writing-mode: horizontal-tb !important;
  -webkit-appearance: button;
  border-radius: 2.5em;
  height: 48px;
  min-width: 240px;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  letter-spacing: .02em;
  text-align: center;
  cursor: pointer;

  img {
    width: 28px;
    margin-right: 12px;
  }

  &:hover {
    opacity: .7;
  }

  &.primary {
    color: #666;
    background-color: #fff;
    border: 2px solid #4285F4;
  }

  &.secondary {
    color: #fff;
    background-color: #4285F4;
  }
`

export default BasicButton
