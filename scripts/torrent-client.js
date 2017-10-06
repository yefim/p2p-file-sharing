import WebTorrent from 'webtorrent';

export const TRACKERS = [
  ['wss://tracker.btorrent.xyz'],
  ['wss://tracker.openwebtorrent.com'],
  ['wss://tracker.fastcast.nz']
];

export default new WebTorrent({
  tracker: {
    rtcConfig: undefined
  }
});
