angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
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

  $scope.toggleFab = function() {
    if ( $scope.fabActive === true) {
      $scope.fabActive = false;
    } else {
      $scope.fabActive = true;
    }
  }
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
    {
      id: 2,
      done: false,
      subject: 'Care Package',
      subClass: 'mom',
      avatar: {
        url: '',
        initial: 'M'
      },
      participants: 'Mom',
      body: "I sent you some goodies!",
      attachments: [
        { name: 'Cookies.docx' },
        { name: 'Pretzels.docx' },
        { name: 'Rugelach.docx' },
        { name: 'Jelly.docx' },
      ]
    }
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
