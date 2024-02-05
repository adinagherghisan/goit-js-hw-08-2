
import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new VimeoPlayer('vimeo-player');
let currentTime = parseFloat(localStorage.getItem('videoplayer-current-time'));
if (currentTime) {
    player.setCurrentTime(currentTime);
}
else {
    currentTime = 0;
};
player.on('timeupdate', throttle(function (e) {
    currentTime = e.seconds;
}, 1000));
window.addEventListener('beforeunload', function () {
    localStorage.setItem('videoplayer-current-time', currentTime.toString())
});