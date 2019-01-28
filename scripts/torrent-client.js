import WebTorrent from 'webtorrent';

export const TRACKERS = [
  ['wss://tracker.btorrent.xyz'],
  ['wss://tracker.openwebtorrent.com'],
  ['wss://tracker.fastcast.nz']
];

export const client = new WebTorrent({
  tracker: {
    rtcConfig: {
      iceServers: [
        {urls: 'stun:stun.l.google.com:19302'}
      ]
    }
  }
});
