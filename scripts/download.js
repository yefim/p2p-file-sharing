import React from 'react';

import client from './torrent-client';

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

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {torrentId} = this.props.match.params;

    console.log(torrentId);

    client.add(torrentId, (torrent) => {
      console.log(torrent);
      const file = torrent.files[0];
      const stream = file.createReadStream();
      stream.on('data', () => {
        if (torrent.progress === 1) {
          file.getBlobURL((err, blobURL) => {
            if (err) {
              throw err;
            }
            downloadBlobURL(file.name, blobURL);
          });
        }
      });
    });
  }

  render() {
    return (
      <button onClick={this.onClick}>Download</button>
    );
  }
}

export default Download;
