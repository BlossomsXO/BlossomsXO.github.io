var player;
var isPlaying = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'UOwmWANcQpM',
    playerVars: { 'mute': 0, 'autoplay': 1 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(5);
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    isPlaying = true;
  } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
    isPlaying = false;
  }
}

function togglePlayPause() {
  if (isPlaying) {
    player.pauseVideo();
    isPlaying = false;
  } else {
    player.playVideo();
    isPlaying = true;
  }
}