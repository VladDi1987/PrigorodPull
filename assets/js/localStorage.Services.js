const localStorageServices = (function () {
    "use strict";

    function checkedLocalStorage() {
        if(localStorage.getItem('data')){
            document.getElementById('btn_poll').disabled = true;
        }
    }

    function setDataToLocalStorage() {
        localStorage.setItem('data', "voted");
    }

    return {
        checkedLocalStorage: checkedLocalStorage,
        setDataToLocalStorage: setDataToLocalStorage
    }

})();

export default localStorageServices;