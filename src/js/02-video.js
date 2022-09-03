// import '../css/common.css';
import Player from '@vimeo/player';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Video.Player(iframe);

const onPlay = function (data) {
    const stringifyData = JSON.stringify(data);
    localStorage.setItem(TIME_KEY, stringifyData);
}
player.on('timeuodate', throttle(onPlay, 1000));

function resumePlay() {
    if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
        return;
    }
}

const pause = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];

if (pause) {
    player
    player.setCurrentTime(pause)
        .then(function (seconds) { })
        .catch(function (error) {
            switch (error.name) {
                case 'Error':
                    break;
                default:
                    break;
            }
        });
}

resumePlay();
