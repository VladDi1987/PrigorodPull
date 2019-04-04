const starsManipulationService = (function () {
    "use strict";

    const infrastructurePoll = document.getElementById('infrastructure-poll').children,
      roadPoll = document.getElementById('road-poll').children,
      ecologyPoll = document.getElementById('ecology-poll').children,
      groceryPoll = document.getElementById('grocery-poll').children,
      schoolsPoll = document.getElementById('schools-poll').children,
      securityPoll = document.getElementById('security-poll').children,
      selectedParam = {
            infrastructure: {
                elements: infrastructurePoll,
                count: 0
            },
            road: {
                elements: roadPoll,
                count: 0
            },
            ecology: {
                elements: ecologyPoll,
                count: 0
            },
            grocery: {
                elements: groceryPoll,
                count: 0
            },
            schools: {
                elements: schoolsPoll,
                count: 0
            },
            security: {
                elements: securityPoll,
                count: 0
            }
        };

        return {
            getSelectedParam: function() {
                return selectedParam;
            }
        }
})();

export default  starsManipulationService;