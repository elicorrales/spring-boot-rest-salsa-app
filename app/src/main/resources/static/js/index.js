'use strict';


const pleaseWaitElem     = document.getElementById('pleaseWait');
const appHeaderContainerElem = document.getElementById('appHeaderContainer');
appHeaderContainer.style.display = 'none';

const appContainerElem = document.getElementById('appContainer');
appContainer.style.display = 'none';

var goToMainScreen;
var goToPlayList;
var mainScreenPanelElem;
var navPanelElem;
var playListPanelElem;

window.onload = () => {
    console.log('onload');
    setTimeout(() => {
    mainScreenPanelElem = document.getElementById('mainScreenPanel');
    navPanelElem        = document.getElementById('navPanel');
    playListPanelElem   = document.getElementById('playListPanel');
    playListPanelElem.style.display = 'none';
    navPanelElem.style.display = 'none';
    app.appIsReadyToUse();
    goToMainScreen = app.goToMainScreen;
    goToPlayList = app.goToPlayList;
    appHeaderContainerElem.style.display = 'block';
    appContainerElem.style.display = 'block';
    pleaseWaitElem.style.display = 'none';
    },1000);
};

window.onloadeddata = () => {
    console.log('oonloadeddata');
};

window.onloadedmetadata = () => {
    console.log('oonloadedmetadata');
};

