import React from 'react';
import Dropzone from 'react-dropzone';
import {
  Link
} from 'react-router-dom';

import client, { TRACKERS } from './torrent-client';

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
      console.log(torrent.infoHash);

      torrent.on('upload', () => {
        console.log('uploaded');
      });

      this.setState({torrentId: torrent.infoHash});
    });
  }

  render() {
    const {torrentId} = this.state;

    if (torrentId) {
      return (
        <Link to={torrentId}>Send link to friend</Link>
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
