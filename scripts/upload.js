import React from 'react';
import Dropzone from 'react-dropzone';
import {Link} from 'react-router-dom';

import client, {TRACKERS} from './torrent-client';

class Upload extends React.Component {
  constructor() {
    super();

    this.state = {torrentId: null};

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop([file]) {
    if (!file) {
      return;
    }

    client.seed(file, {announce: TRACKERS}, (torrent) => {
      this.setState({torrentId: torrent.magnetURI});
    });
  }

  render() {
    const {torrentId} = this.state;

    if (torrentId) {
      return (
        <div>
          <p>Keep this tab open and send the link below to your friend</p>
          <input readOnly value={window.location + encodeURIComponent(torrentId)} />
        </div>
      );
    } else {
      return (
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          <h1>Upload file</h1>
        </Dropzone>
      );
    }
  }
}

export default Upload;
