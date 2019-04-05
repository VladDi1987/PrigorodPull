import fireBaseService from "../js/firebase.Service";
import starsManipulation from "../js/StarsManipulation";
import localStorageServices from "../js/localStorage.Services";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import config from "../js/config";

const pollManipulation = (function (fireBaseService, starsManipulation, localStorageServices) {
    "use strict";

    let pollButton = document.querySelector('#btn_poll');
    pollButton.addEventListener('click', setPollValue);


    function setPollValue() {
        setVoteNumber();
        // add  getPageName() to .ref(config.dataUrl.reference  + fireBaseService.currentPage())
        let cityRef = firebase.database().ref(config.dataUrl.reference).child('ratings');
        let ratings = {};

        cityRef.once("value", function (obj) {
            let rating = obj.val();
            let starsValues = starsManipulation.getStarsValue();

            Object.keys(starsValues).forEach(function(key) {
                ratings[key] = rating[key] + starsValues[key].count;
            });

        });
        cityRef.update(ratings);
        //pollButton.disabled = true;
        // localStorageServices.setDataToLocalStorage();
        starsManipulation.shutDown();
    }

    function setVoteNumber() {
        let count = {};
        // add  getPageName() to .ref(config.dataUrl.reference  + fireBaseService.currentPage())
        let votersRef = firebase.database().ref(config.dataUrl.reference).child('voted');
        votersRef.once("value", function (object) {
            let mark = object.val();
            count = {
                count: mark["count"] + 1
            }
        });
        votersRef.update(count);
    }


})(fireBaseService, starsManipulation, localStorageServices);