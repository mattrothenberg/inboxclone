angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('NavCtrl', function($scope) {
  $scope.isMenuOpen = false;
  $scope.fabActive = false;

  $scope.openMenu = function() {
    $scope.isMenuOpen = true;
  }

  $scope.closeMenu = function() {
    $scope.isMenuOpen = false;
  }

  // $scope.toggleComposeOverlay = function() {
  //   console.log('rawr');
  //   if ( $scope.fabActive === true) {
  //     $scope.fabActive = false;
  //   } else {
  //     $scope.fabActive = true;
  //   }
  // }
})

.controller('InboxCtrl', function($scope, $timeout) {
  $scope.emails = [
    {
      id: 0,
      done: false,
      subject: 'Ionic Framework',
      subClass: '',
      avatar: {
        url: '../img/ionic-logo.png',
        initial: '',
      },
      participants: 'Ionic Team, me',
      body: "Yeah, it's an awesome framework! If only I actually knew what I was doing",
      attachments: {}
    },
    {
      id: 1,
      done: false,
      subject: 'We need to talk...',
      subClass: 'girlfriend',
      avatar: {
        url: '',
        initial: 'G'
      },
      participants: 'Girlfriend',
      body: "I think you're obsessed with coding",
      attachments: {}
    },
  ];

  $scope.echoCurrentSlide = function(index, id) {
    if (index == 0) {
      var arrItem = _.where($scope.emails, {id: id});
      var arrItemIndex = _.indexOf($scope.emails, arrItem[0]);
      $scope.emails.splice(arrItemIndex, 1);
    }
  }

  console.log($scope.emails);


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
