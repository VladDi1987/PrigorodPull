import fireBaseService from "../js/firebase.Service";
import pollButton from "../js/pollButtonAnimation";
import localStorageServices from "../js/localStorage.Services";
import starsManipulation from "../js/StarsManipulation";
import pollManipulation from "../js/pollManipulation";

(function (fireBaseService, pollButton, starsManipulation, localStorageServices) {
    'use strict';

    activate();

    function activate() {
        localStorageServices.checkedLocalStorage();
        pollButton.initButtonAnimation();
        starsManipulation.activate();
        fireBaseService.init();
        //fireBaseService.currentPage();
    }

})(fireBaseService, pollButton, starsManipulation,  localStorageServices);