'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
    .controller('MainController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
      function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
      }
      $scope.toggleLeft = buildToggler('left');

    }])
    .directive('myNavMenu', function() {
      return {
        replace: true,
        restrict: 'E',
        scope: {
            isSidebar: '@',
        },
        templateUrl: 'views/sidebar.template.html',
        link: function (scope, element, attributes) {
            // var el = angular.element(element);
            var button = angular.element('#navbar-toggle');
            var navLink = angular.element('.sidebar-nav a');
            navLink.on('click', function(){
               // Actions after the file is selected
               button.click();
            });
        }
      };
    })
    .directive('scrollToItem', function() {
      return {
          restrict: 'A',
          scope: {
              scrollTo: "@"
          },
          link: function(scope, element, attr) {

              element.on('click', function() {
                  var bodyElem = angular.element("body");
                  angular.element(bodyElem).animate({scrollTop: element.offset().top}, "fast");
              });
          }
      };
    })
    .controller('ModalDemoCtrl', ['$scope', '$uibModal', function ($scope, $uibModal, $log) {
      var self = this;
      self.animationsEnabled = true;
      self.work = $scope.work;

      self.openComponentModal = function () {
        var modalInstance = $uibModal.open({
          // animation: false,
          backdrop: false,
          windowClass: 'full-screen',
          component: 'modalComponent',
          resolve: {
            work: function () {
              return self.work;
            }
          }
        });

      };

    }]);

    // Please note that the close and dismiss bindings are from $uibModalInstance.

    angular.module('yoAngularApp').component('modalComponent', {
      templateUrl: 'myModalContent.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: function () {
        var self = this;
        self.$onInit = function () {
          self.work = self.resolve.work;
        };
      },
      controllerAs: 'modalContent'
    });
