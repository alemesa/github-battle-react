import React from 'react';
import { TweenMax } from 'gsap';

class Test extends React.Component {
  componentDidMount() {
    const el = this.container;
    TweenMax.fromTo(el, 1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 });
  }

  render() {
    return (
      <div className="box" ref={c => (this.container = c)}>
        Animating{' '}
      </div>
    );
  }
}

export default Test;
