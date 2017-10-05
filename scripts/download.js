import React from 'react';

class Download extends React.Component {
  render() {
    const {
      a, b, c, d
    } = this.props.match.params;

    return (
      <div>
        <h1>Download</h1>
        <p>{a}</p>
        <p>{b}</p>
        <p>{c}</p>
        <p>{d}</p>
      </div>
    );
  }
}

export default Download;
