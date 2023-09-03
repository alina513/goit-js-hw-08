import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});


const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time" , JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

let currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
player.setCurrentTime(currentTime);

