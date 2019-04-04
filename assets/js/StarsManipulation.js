import starsManipulationService from "../js/StarsManipulation.service";

const starsManipulation = (function (starsManipulationService) {
    "use strict";

    // Fieldset

    const selectedParam = starsManipulationService.getSelectedParam(),
      confessLists = document.querySelectorAll('.confess');

    function activate() {
        addMouseEvents();
        selectStars();
    }

    function addMouseEvents() {
        function addMouseEventsToElements(elements) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].onmouseover = onMouseOver;
                elements[i].onmouseout = onMouseOut;
            }
        }

        Object.keys(selectedParam).forEach(function (key) {
            addMouseEventsToElements(selectedParam[key].elements);
        });
    }

    /*********************************************/

    function selectStars() {
        function selectStar(element, selectedParamKey) {
            [].forEach.call(element, function (i) {
                i.onclick = function () {
                    let el = this,
                      elements = el.parentElement.children,
                      onStar = parseInt(el.getAttribute('data-value'), 10);
                    selectedParam[selectedParamKey].count = onStar;
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].classList.remove('selected');
                    }
                    for (let i = 0; i < onStar; i++) {
                        elements[i].classList.add('selected');
                    }
                };
            });
        }

        Object.keys(selectedParam).forEach(function (key) {
            selectStar(selectedParam[key].elements, key);
        });
    }


    /********************************************/
    function onMouseOver() {
        let el = this,
          elements = el.parentElement.children,
          onStar = parseInt(el.getAttribute('data-value'), 10);
        for (let i = 0; i < elements.length; i++) {
            (i < onStar) ? elements[i].classList.add('hover') : elements[i].classList.remove('hover');
        }
    }

    function onMouseOut() {
        let el = this,
          elements = el.parentElement.children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('hover');
        }
    }


    function unselectStars() {
        for (let i = 0; i < confessLists.length; i++) {
            for (let j = 0; j < confessLists[i].children.length; j++) {
                confessLists[i].children[j].classList.remove('selected');
            }
        }
    }

    function setDefaultParam() {
        Object.keys(selectedParam).forEach(function (key) {
            selectedParam[key]["count"] = 0;
        });
    }

    function getStarsValue() {
        return selectedParam;
    }

    function shutDown() {
        unselectStars();
        setDefaultParam();
    }

    return {
        shutDown: shutDown,
        getStarsValue: getStarsValue,
        activate: activate
    }

})(starsManipulationService);

export default starsManipulation;