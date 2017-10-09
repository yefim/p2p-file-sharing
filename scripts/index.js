// import React from 'react';
// import {
//   HashRouter as Router,
//   Route
// } from 'react-router-dom';
// import {render} from 'react-dom';
// 
// import Upload from './upload';
// import Download from './download';
// 
// render(
//   <Router>
//     <div>
//       <Route exact path="/" component={Upload} />
//       <Route path="/:torrentId" component={Download} />
//     </div>
//   </Router>,
//   document.getElementById('app')
// );
import Peer from 'simple-peer';

const p = new Peer({initiator: true});

p.on('signal', (data) => {
  console.log(JSON.stringify(data));
});

p.on('connect', () => {
  console.log('yayyyyy');
  p.send('hi');
});

// 1. Uploader goes to upload file
// 2. Uploader gets link
// 3. Uploader shares link with Downloader
// 4. Uploader is prompted for Downloader's signal data
// 5. Downloader goes to download link
// 6. Downloader gets browser's signal data
// 7. Downloader shares signal data with Uploader
// 8. Uploader sets signal data on
// 9. Peers connect
// Essentially, https://github.com/feross/simple-peer#usage

const peerData = window.prompt('What is the peer data of the person you want to send the file to?');

p.signal(JSON.parse(peerData));
