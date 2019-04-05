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

    const infrastructureRite = document.getElementById('infrastructure-rite'),
      roadRite = document.getElementById('road-rite'),
      ecologyRite = document.getElementById('ecology-rite'),
      groceryRite = document.getElementById('grocery-rite'),
      schoolsRite = document.getElementById('schools-rite'),
      securityRite = document.getElementById('security-rite'),
      riteOutputs = {
          infrastructure: {
              element: infrastructureRite,
          },
          road: {
              element: roadRite,
          },
          ecology: {
              element: ecologyRite,
          },
          grocery: {
              element: groceryRite,
          },
          schools: {
              element: schoolsRite,
          },
          security: {
              element: securityRite,
          }
      };


    return {
        getSelectedParam: function () {
            return selectedParam;
        },
        getRiteOutputs: function () {
            return riteOutputs;
        }
    }
})();

export default starsManipulationService;