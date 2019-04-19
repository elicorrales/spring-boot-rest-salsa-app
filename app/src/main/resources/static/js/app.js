'use strict';

var app = {};


const appIsReadyToUse = () => {
    app.goToMainScreen = navigation.goToMainScreen;
    app.goToPlayList = navigation.goToPlayList;
};

app.appIsReadyToUse = appIsReadyToUse;