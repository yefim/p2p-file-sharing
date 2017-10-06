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

      this.setState({torrentId: torrent.infoHash});
    });
  }

  render() {
    const {torrentId} = this.state;

    return (
      <div>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          <h1>Upload file</h1>
        </Dropzone>
        {
          torrentId
            ? <Link to={torrentId}>Send link to friend</Link>
            : null
        }
      </div>
    );
  }
}

export default Upload;
