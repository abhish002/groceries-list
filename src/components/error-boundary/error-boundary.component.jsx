import React, { Component } from 'react';
import './error-boundary.styles.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    if (this.state.error) {
      return (
        <div className='error-boundary'>
          <figure>
            <img src='https://i.imgur.com/yW2W9SC.png' alt='A broken porcelein cup' />
            <figcaption>404: Page Crashed!</figcaption>
          </figure>
        </div>
      )
    }

    return this.props.children
  }
}
