"use strict";angular.module("yoAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngMaterial","ui.bootstrap","portfolioList"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"scripts/main/main.template.html",controller:"MainController",controllerAs:"main"}).when("/about",{templateUrl:"views/about.template.html",controller:"AboutController",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("common",["common.portfolio"]),angular.module("common.portfolio",["ngResource"]).factory("Portfolio",["$resource",function(a){return a("assets/portfolio/:workId.json",{},{query:{method:"GET",params:{workId:"portfolio"},isArray:!0}})}]),angular.module("portfolioList",["common.portfolio","ngMaterial"]).component("portfolioList",{templateUrl:"scripts/portfolio-list/portfolio-list.template.html",controller:["Portfolio","$scope","$mdDialog",function(a,b,c){b.portfolio=a.query(),b.workId=0,b.getWorkId=function(){return b.workId+=1,b.workId}}],controllerAs:"portfolioList"}),angular.module("yoAngularApp").controller("MainController",["$scope","$mdSidenav",function(a,b){function c(a){return function(){b(a).toggle()}}a.toggleLeft=c("left")}]).directive("myNavMenu",function(){return{replace:!0,restrict:"E",scope:{isSidebar:"@"},templateUrl:"views/sidebar.template.html",link:function(a,b,c){var d=angular.element("#navbar-toggle"),e=angular.element(".sidebar-nav a");e.on("click",function(){d.click()})}}}).directive("scrollToItem",function(){return{restrict:"A",scope:{scrollTo:"@"},link:function(a,b,c){b.on("click",function(){var a=angular.element("body");angular.element(a).animate({scrollTop:b.offset().top},"fast")})}}}).controller("ModalDemoCtrl",["$scope","$uibModal",function(a,b,c){var d=this;d.animationsEnabled=!0,d.work=a.work,d.openComponentModal=function(){b.open({backdrop:!1,windowClass:"full-screen",component:"modalComponent",resolve:{work:function(){return d.work}}})}}]),angular.module("yoAngularApp").component("modalComponent",{templateUrl:"myModalContent.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controller:function(){var a=this;a.$onInit=function(){a.work=a.resolve.work}},controllerAs:"modalContent"}),angular.module("yoAngularApp").controller("AboutController",function(){}),angular.module("yoAngularApp").run(["$templateCache",function(a){a.put("404.html",'<!doctype html> <html lang="en"> <head> <meta charset="utf-8"> <!-- <meta http-equiv="Refresh" content = "1; URL=http://www.joaof-csantos.com/"> --> <title>Page Not Found :(</title> <style>::-moz-selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      ::selection {\n        background: #b3d4fc;\n        text-shadow: none;\n      }\n\n      html {\n        padding: 30px 10px;\n        font-size: 20px;\n        line-height: 1.4;\n        color: #737373;\n        background: #f0f0f0;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n      }\n\n      html,\n      input {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n      }\n\n      body {\n        max-width: 500px;\n        padding: 30px 20px 50px;\n        border: 1px solid #b3b3b3;\n        border-radius: 4px;\n        margin: 0 auto;\n        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n        background: #fcfcfc;\n      }\n\n      h1 {\n        margin: 0 10px;\n        font-size: 50px;\n        text-align: center;\n      }\n\n      h1 span {\n        color: #bbb;\n      }\n\n      h3 {\n        margin: 1.5em 0 0.5em;\n      }\n\n      p {\n        margin: 1em 0;\n      }\n\n      ul {\n        padding: 0 0 0 40px;\n        margin: 1em 0;\n      }\n\n      .container {\n        max-width: 380px;\n        margin: 0 auto;\n      }\n\n      /* google search */\n\n      #goog-fixurl ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      #goog-fixurl form {\n        margin: 0;\n      }\n\n      #goog-wm-qt,\n      #goog-wm-sb {\n        border: 1px solid #bbb;\n        font-size: 16px;\n        line-height: normal;\n        vertical-align: top;\n        color: #444;\n        border-radius: 2px;\n      }\n\n      #goog-wm-qt {\n        width: 220px;\n        height: 20px;\n        padding: 5px;\n        margin: 5px 10px 0 0;\n        box-shadow: inset 0 1px 1px #ccc;\n      }\n\n      #goog-wm-sb {\n        display: inline-block;\n        height: 32px;\n        padding: 0 10px;\n        margin: 5px 0 0;\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: #f5f5f5;\n        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n\n      #goog-wm-sb:hover,\n      #goog-wm-sb:focus {\n        border-color: #aaa;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n        background-color: #f8f8f8;\n      }\n\n      #goog-wm-qt:hover,\n      #goog-wm-qt:focus {\n        border-color: #105cb6;\n        outline: 0;\n        color: #222;\n      }\n\n      input::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n      }</style> </head> <body> <div class="container"> <h1>Not found <span>:(</span></h1> <p>Sorry, but the page you were trying to view does not exist.</p> <p>It looks like this was the result of either:</p> <ul> <li>a mistyped address</li> <li>an out-of-date link</li> </ul> <script>var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;</script> <script src="//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js"></script> </div> </body> </html>'),a.put("index.html",'<!DOCTYPE html> <html lang="en" ng-app="yoAngularApp"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width,initial-scale=1"> <meta name="description" content="Joao Santos personal corner on the web."> <meta name="author" content="Joao Francisco Silva Caeiro dos Santos"> <meta property="og:url" content="http://www.joaof-csantos.com"> <meta property="og:title" content="Joao Santos"> <meta property="og:image" content="http://www.joaof-csantos.com/img/site-meta-img.png"> <meta property="og:description" content="Joao Santos personal corner on the web."> <title>João Santos</title> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <!-- build:css(.) styles/vendor.css --> <!-- bower:css --> <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css"> <link rel="stylesheet" href="bower_components/angular-material/angular-material.css"> <!-- endbower --> <!-- endbuild --> <!-- build:css(.tmp) styles/main.css --> <link rel="stylesheet" href="styles/main.css"> <!-- endbuild --> <!-- Custom Fonts --> <script src="https://use.fontawesome.com/fb275ad607.js"></script> <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"> </head> <body id="page-top" class="index body-wrapper" ng-controller="MainController" ng-cloak> <!--  Sidebar--> <md-sidenav class="md-sidenav-left" md-component-id="left" md-whiteframe="4"> <my-nav-menu is-sidebar="true" class="sidebar-wrapper"></my-nav-menu> </md-sidenav> <div class="content-wrapper"> <!-- Header --> <header ng-include="&quot;views/header.template.html&quot;"></header> <!-- Portfolio Grid Section --> <div ng-view></div> <!-- Footer --> <footer class="text-center" ng-include="&quot;views/footer.template.html&quot;"></footer> <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) --> <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md"> <a class="btn btn-primary" href="#page-top"> <i class="fa fa-chevron-up"></i> </a> </div> </div> <!-- build:js(.) scripts/vendor.js --> <!-- bower:js --> <script src="bower_components/jquery/dist/jquery.js"></script> <script src="bower_components/angular/angular.js"></script> <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script> <script src="bower_components/angular-animate/angular-animate.js"></script> <script src="bower_components/angular-cookies/angular-cookies.js"></script> <script src="bower_components/angular-aria/angular-aria.js"></script> <script src="bower_components/angular-messages/angular-messages.js"></script> <script src="bower_components/angular-material/angular-material.js"></script> <script src="bower_components/angular-resource/angular-resource.js"></script> <script src="bower_components/angular-route/angular-route.js"></script> <script src="bower_components/angular-sanitize/angular-sanitize.js"></script> <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script> <!-- endbower --> <!-- endbuild --> <!-- build:js({.tmp,app}) scripts/scripts.js --> <script src="scripts/app.js"></script> <script src="scripts/common/common.module.js"></script> <script src="scripts/common/portfolio/portfolio.service.js"></script> <script src="scripts/portfolio-list/portfolio-list.js"></script> <script src="scripts/main/main.js"></script> <script src="scripts/controllers/about.js"></script> <!-- endbuild --> </body> </html>'),a.put("scripts/main/main.template.html",'<!-- Portfolio Grid Section --> <section id="portfolio"> <div class="container"> <div class="row"> <div class="col-lg-8"> <p>As a software engineer who bumped web development from a small hobby into a career path I had the opportunity of working in projects for both individuals and big corporations.</p> <p>Among backend development and projects, here is some of the work I\'ve been doing in the past years.</p> </div> </div> <div class="row"> <div class="col-lg-12"> <h4>Work</h4> <hr class="star-primary"> </div> </div> <div class="row"> <portfolio-list></portfolio-list> </div> </div> </section>'),a.put("scripts/portfolio-list/portfolio-list.template.html",'<div ng-repeat="work in portfolio" class="col-sm-4 portfolio-item"> <div ng-controller="ModalDemoCtrl as modal"> <script type="text/ng-template" id="myModalContent.html"><div class="container portfolio-modal">\n          <div class="close-modal"  ng-click="modalContent.dismiss()">\n            <div class="lr">\n              <div class="rl">\n              </div>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col-lg-8 col-lg-offset-2">\n              <div class="modal-body">\n                <div class="modal-title">\n                  <h2>{{modalContent.work.title}}</h2>\n                  <div>{{modalContent.work.categories}}</div>\n                </div>\n                <div class="project-intro-text text-left" ng-bind-html="modalContent.work.introText"></div>\n                <div class="modal-cover-img-wrapper">\n                  <img ng-src="{{modalContent.work.imageUrl}}" class="img-responsive   img-centered" alt="">\n                </div>\n                <div class="modal-project-details row">\n                  <div class="col-sm-4">\n                    <ul class="list-inline item-details">\n                      <li ng-repeat="item in modalContent.work.itemDetails">\n                        <span class="item-title">{{item.title}}:</span>\n                        <strong  ng-bind-html="item.content"></strong>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="col-sm-8" ng-bind-html="modalContent.work.description"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div></script> <a href="#/" class="portfolio-link row" ng-click="modal.openComponentModal()"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img ng-src="{{work.imageUrl}}" class="img-responsive" alt="{{work.name}}"> </a> <a href="#/" title="{{work.name}}" class="portfolio-item-title row" ng-click="modal.openComponentModal()">{{work.name}}</a> </div> </div>'),a.put("views/about.template.html",'<div class="about-me container"> <div class="row"> <div class="about-me-body"> <div class="section-title col-lg-12"> <h2>About Me</h2> </div> <div class="about-left-col col-sm-6"> <div class="about-me-text"> <p> Hi there! If it wasn\'t obvious by now, my name is João (Jay, J-Wow, Jao, J-Pop...), I\'m a Software developer born in sunny Portugal and a citizen of the world ever since I found out I love travelling. </p> <p> I focused my work on <a href="https://www.drupal.org/" target="_blank">Drupal</a> development but am always keen on exploring new tech stacks, which sometimes takes me to do silly stuff like deciding to spend <a href="http://www.hackathon.io/masters-london" target="_blank">24 hours</a> building an App using a technology I have never touched before - totally worth it though. </p> <p>When I\'m not nerding away in front of my laptop I am probably outside, either cycling, walking about, meeting friends and definitely beach whenever I can! Lover of good wines and great cheese accompanied by amazing music and good company.</p> </div> </div> <div class="about-right-col col-sm-6"> <div class="about-me-image"> <img src="images/jsantos.jpg" class="img-responsive img-centered" alt=""> </div> <div class="contact-wrapper"> <a class="contact-resume contact-col col-xs-6" target="_blank" href="assets/jsantos-cv.pdf">My CV</a> <a class="contact-email contact-col col-xs-6" href="mailto:jfs.csantos@gmail.com">Contact Me</a> </div> <div class="social-wrapper hidden-xs"> <ul class="list-inline"> <li> <a href="https://github.com/jfcsantos" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a> </li> <li> <a href="https://twitter.com/boissa" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-twitter"></i></a> </li> <li> <a href="https://www.linkedin.com/in/joaofcsantos" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-linkedin"></i></a> </li> <li> <a href="https://www.instagram.com/jfcsantos/" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-instagram"></i></a> </li> </ul> </div> </div> </div> </div> </div>'),a.put("views/footer.template.html",'<div class="footer-below"> <div class="container"> <div class="row"> <ul class="list-inline"> <li> <a href="https://github.com/jfcsantos" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-github"></i></a> </li> <li> <a href="https://twitter.com/boissa" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-twitter"></i></a> </li> <li> <a href="https://www.linkedin.com/in/joaofcsantos" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-linkedin"></i></a> </li> <li> <a href="https://www.instagram.com/jfcsantos/" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-instagram"></i></a> </li> </ul> </div> <div class="row"> <div class="col-lg-12"> &copy; Joao Santos 2016 </div> </div> </div> </div>'),a.put("views/header.template.html",'<div class="container header-inner-wrapper"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header page-scroll"> <button type="button" id="navbar-toggle" class="navbar-toggle" ng-click="toggleLeft()"> <span class="sr-only">Toggle navigation</span> <i class="fa fa-bars"></i> </button> </div> <div class="row"> <div class="col-lg-12"> <!-- <img class="img-responsive" src="img/profile.png" alt=""> --> <div class="intro-text"> <span class="name"> <a href="#page-top">Joao Santos</a> </span> <span class="skills">Full Stack Web Developer</span> </div> </div> </div> <!-- Navigation --> <nav id="mainNav" class="navbar navbar-default navbar-custom"> <!-- Collect the nav links, forms, and other content for toggling --> <my-nav-menu is-sidebar="false" class="collapse navbar-collapse navbar-wrapper"></my-nav-menu> <!-- <div class="collapse navbar-collapse navbar-wrapper">\n      <ul class="nav navbar-nav">\n        <li>\n          <a href="/">Home</a>\n        </li>\n        <li>\n          <a href="/#portfolio">Work</a>\n        </li>\n        <li>\n          <a href="about">About Me</a>\n        </li>\n      </ul>\n    </div> --> <!-- /.navbar-collapse --> </nav> </div>'),a.put("views/sidebar.template.html","<ul ng-class=\"isSidebar === 'true' ? 'sidebar-nav' : ['nav', 'navbar-nav']\"> <li ng-class=\"isSidebar === 'true' ? 'page-scroll' : '' \"> <a href=\"#/\">Home</a> </li> <li ng-class=\"isSidebar === 'true' ? 'page-scroll' : '' \"> <a href=\"#/\" scroll-to-item scroll-to=\"#portfolio\"> Work</a> </li> <li ng-class=\"isSidebar === 'true' ? 'page-scroll' : '' \"> <a href=\"#/about\">About Me</a> </li> </ul>")}]);
