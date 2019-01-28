import React from 'react';

import {client} from './torrent-client';

const downloadBlobURL = (name, blobURL) => {
  let a = document.createElement('a');
  document.body.appendChild(a);
  a.download = name;
  a.href = blobURL;
  a.click();
};

class Download extends React.Component {
  constructor() {
    super();

    this.state = {status: 'initial'};

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.status !== 'initial') {
      return;
    }

    this.setState({status: 'downloading'});

    const {torrentId} = this.props.match.params;

    client.add(decodeURIComponent(torrentId), (torrent) => {
      const file = torrent.files[0];
      const stream = file.createReadStream();

      stream.on('data', () => {
        if (torrent.progress === 1) {
          file.getBlobURL((err, blobURL) => {
            if (err) {
              throw err;
            }
            downloadBlobURL(file.name, blobURL);
            this.setState({status: 'initial'});
          });
        }
      });
    });
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.state.status === 'initial' ? 'Download' : 'Downloading...'}
      </button>
    );
  }
}

export default Download;
