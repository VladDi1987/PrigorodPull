import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import config from "../js/config";

const fireBaseService = (function (config, firebase) {
    "use strict";

    firebase.initializeApp(config.firebaseConfig);

    let starsTotal = 5,
      votersValue = 0;
    let totalRiteNumbers = document.querySelectorAll('.total-rite__count'),
      votedCount = document.querySelector('.voted__count');

 /*   if more page*/

  /*  function getPageName() {
        let path = window.location.pathname;
        let page = path.split("/").pop();
        let reference = page.split(".").shift();
        return reference;
    }*/

    function getVotesValue() {
        let votersRef = firebase.database().ref(config.dataUrl.reference).child('members');
        votersRef.on("value", function (obj) {
            let mark = obj.val();
            votersValue = mark['count'];
            votedCount.innerText = votersValue;
        });
    }

    function fillStarsRatingValue() {
        let ref = firebase.database().ref(config.dataUrl.reference).child('ratings');
        ref.on("value", function (obj) {
            let rating = obj.val();
            let i = 0;
            for (let prop in rating) {
                // Add number rating
                let starPercentage = (rating[prop] / starsTotal) / votersValue;
                let totalValue = Math.round(starPercentage * 10) / 10;
                totalRiteNumbers[i].innerHTML = totalValue;
                i++;
            }
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

})(config, firebase);

export default fireBaseService;
