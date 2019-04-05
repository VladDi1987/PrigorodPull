import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import config from "../js/config";
import starsManipulationService from "../js/StarsManipulation.service";

const fireBaseService = (function (config, firebase, starsManipulationService) {
    "use strict";

    firebase.initializeApp(config.firebaseConfig);
    const riteCounters = starsManipulationService.getRiteOutputs();

    let starsTotal = 5,
      votersValue = 0,
      votedCount = document.querySelector('.voted__count');

 /*   if more page*/

  /*  function getPageName() {
        let path = window.location.pathname;
        let page = path.split("/").pop();
        let reference = page.split(".").shift();
        return reference;
    }*/

    function getVotesValue() {
        // add  getPageName() to ref(config.dataUrl.reference + getPageName())
        let votersRef = firebase.database().ref(config.dataUrl.reference).child('voted');
        votersRef.once("value", function (obj) {
            let mark = obj.val();
            Object.keys(mark).forEach(function (key) {
                votersValue = mark[key];
                votedCount.innerText = mark[key];
            });
        });
    }

    function fillStarsRatingValue() {
        // add  getPageName() to ref(config.dataUrl.reference + getPageName())
        let ref = firebase.database().ref(config.dataUrl.reference).child('ratings');
        ref.on("value", function (obj) {
            let rating = obj.val();
            Object.keys(rating).forEach(function (key) {
                let starPercentage = (rating[key] / starsTotal) / votersValue;
                riteCounters[key].element.innerText = Math.round(starPercentage * 10) / 10;
            });
        })
    }

    function init() {
        getVotesValue();
        fillStarsRatingValue();
    }

    return {
        init: init,
        // currentPage: getPageName
    }

})(config, firebase, starsManipulationService);

export default fireBaseService;
