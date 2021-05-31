export const useJWPlayer = (playlist) => {
  const onReady = () => {
    const jwplayerAPI = window.jwplayer('player');
    // Remove Settings
    jwplayerAPI.on('play', () => {
      // Set Title
      const spacerElement =
        document.getElementsByClassName('jw-text-duration')[0];
      if (!spacerElement.classList.contains('title-active')) {
        spacerElement.innerHTML += `<p id="movie-title">${playlist.title}</p>`;
        spacerElement.classList.add('title-active');
      }

      const settingsElement =
        document.getElementsByClassName('jw-submenu-topbar')[0];
      if (settingsElement) settingsElement.remove();
    });
    const jw = document.getElementById('player');
    const wrapper = document.getElementsByClassName('jw-wrapper')[0];
    const vttDiv = document.createElement('div');
    vttDiv.className = 'vtt';
    wrapper.appendChild(vttDiv);
    // Add Keyboard Press
    jw.addEventListener('keypress', ({ keyCode }) => {
      if (keyCode === 119 || keyCode === 87) {
        addOffset(0.5);
      }
      if (keyCode === 113 || keyCode === 81) {
        addOffset(-0.5);
      }
    });
    const player = document.getElementsByTagName('video')[0];
    const track = document.createElement('track');
    track.kind = 'subtitles';
    track.label = 'English';
    track.srclang = 'en';
    track.default = true;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200 && this.responseText) {
        // If VTT fetch succeeded, replace the src with a BLOB URL.
        var blob = new Blob([this.responseText], { type: 'text/vtt' });
        track.setAttribute('src', URL.createObjectURL(blob));
      }
    };
    xhttp.open('GET', playlist.tracks[0].file, true);
    xhttp.send();
    player.appendChild(track);
    const currentTrack = player.textTracks[0];
    currentTrack.mode = 'hidden';
    const renderCue = () => {
      const cue = currentTrack.activeCues[0];
      if (currentTrack.activeCues.length) {
        vttDiv.innerHTML = cue.text;
      } else {
        vttDiv.innerHTML = '';
      }
    };
    if (jwplayerAPI.getCurrentCaptions()) {
      currentTrack.addEventListener('cuechange', renderCue);
    }
    jwplayerAPI.on('captionsChanged', (e) => {
      if (e.track) {
        currentTrack.addEventListener('cuechange', renderCue);
      } else {
        currentTrack.removeEventListener('cuechange', renderCue);
        vttDiv.innerHTML = '';
      }
    });
  };

  function addOffset(offset) {
    const player = document.getElementsByTagName('video')[0];
    const tracks = player.textTracks;
    Array.from(tracks).forEach((track) => {
      Array.from(track.cues).forEach((cue) => {
        cue.startTime += offset || 1;
        cue.endTime += offset || 1;
      });
    });
  }

  return [onReady];
};
