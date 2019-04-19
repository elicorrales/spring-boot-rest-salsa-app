'use strict';

const playListElem   = document.getElementById('playList');
const songPlayerElem = document.getElementById('songPlayer');

var playList = {};

const loadSong = (song) => {

    let lastSongUrl = songPlayerElem.src;

    if (!lastSongUrl) return true;

    let urlParts = new window.URL(lastSongUrl);
    let host = urlParts.host;
    let lastSongPath = decodeURIComponent(urlParts.pathname);
    let newSongPath = '/music/' + song;
    if (newSongPath != lastSongPath) {
        return true;
    }
    return false;
}

var isPlaying = false;
var prevIdx = 0;
const playSong = (idx,song) => {
    if (loadSong(song)) {
        document.getElementById('playIcon'+prevIdx).style.display = 'block';
        document.getElementById('pauseIcon'+prevIdx).style.display = 'none';
        songPlayerElem.src = 'music/' + song;
        songPlayerElem.load();
        songPlayerElem.play();
        isPlaying = true;
        document.getElementById('playIcon'+idx).style.display = 'none';
        document.getElementById('pauseIcon'+idx).style.display = 'block';
    } else if (isPlaying) {
        songPlayerElem.pause();
        isPlaying = false;
        //document.getElementById('playIcon'+idx).style.display = 'block';
        document.getElementById('playIcon'+idx).style = 'vertical-align:bottom;display:block' 
        document.getElementById('pauseIcon'+idx).style.display = 'none';
    } else {
        songPlayerElem.play();
        isPlaying = true;
        document.getElementById('playIcon'+idx).style.display = 'none';
        document.getElementById('pauseIcon'+idx).style.display = 'block';
    }
    prevIdx = idx;
}

const displaySong = (idx,song) => {
    let html = '' 
               +'<div class="row">'
               +'    <button id="songButton' + idx +'"'
               +'        style="border-radius:30px;"' 
               +'        class="btn btn-block" type="button"'
               +'        onclick="playSong(\''+ idx + '\',\'' + song + '\')">'
               +'           <table>'
               +'               <tr>'
               +'                   <td>'               
               +'                       <i id="playIcon'+idx+'" class="fas fa-play fa-3x"></i>'
               +'                   </td>'               
               +'                   <td>'               
               +'                       <i id="pauseIcon'+idx+'" class="fas fa-pause fa-3x"></i>'
               +'                   </td>'               
               +'                   <td>'               
               +'                       <img src="img/maracas.png" style="width:60px;" />'
               +'                       <strong>' + song + '</strong>'
               +'                   </td>'               
               +'               </tr>'
               +'           </table>'
               +'    </button>'
               +'</div>'
               +'<p/>'
               ;
    return html;
}

const showPlayList = (list) => {
    let html = '';
    list.sort().forEach((song,idx) => {
        console.log(song)
        html += displaySong(idx,song);
    });
    return html;
}

const hideAllPauseButtons = (list) => {
    list.forEach((song,idx) => {
        document.getElementById('pauseIcon'+idx).style.display = 'none';
    });
};

const showList = () => {
    console.log('showList');
    axios.get('music')
    .then(
        result => {
            console.log(result);
            playListElem.innerHTML = showPlayList(result.data);
            hideAllPauseButtons(result.data);
        }
    )
    .catch(
        error => {
            console.log(error);
        }
    );
};

playList.showList = showList;