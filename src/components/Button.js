import React from 'react'
import Ink from 'react-ink'

const defaultProps = {
  className: 'col-btn',
  tagName: 'button',
  type: 'button'
}

export default class Button extends React.Component {
  render() {
    const { tagName, children, ...attrs } = this.props

    return React.createElement(tagName, attrs, [
      <Ink key="__ink__" />,
      ...children
    ])
  }
}

Button.defaultProps = defaultProps
