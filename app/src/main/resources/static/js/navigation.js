'use strict';

var navigation = {};

goToPlayList = () => {
    mainScreenPanelElem.style.display = 'none';
    playListPanelElem.style.display = 'block';
    navPanelElem.style.display = 'block';
    playList.showList();
};

goToMainScreen = () => {
    mainScreenPanelElem.style.display = 'block';
    playListPanelElem.style.display = 'none';
    navPanelElem.style.display = 'none';
};

navigation.goToPlayList = goToPlayList;
navigation.goToMainScreen = goToMainScreen;