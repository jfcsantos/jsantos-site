"use strict";angular.module("yoAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngMaterial","ui.bootstrap","portfolioList"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.template.html",controller:"MainController",controllerAs:"main"}).when("/about",{templateUrl:"views/about.template.html",controller:"AboutController",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("common",["common.portfolio"]),angular.module("common.portfolio",["ngResource"]).factory("Portfolio",["$resource",function(a){return a("assets/portfolio/:workId.json",{},{query:{method:"GET",params:{workId:"portfolio"},isArray:!0}})}]),angular.module("yoAngularApp").controller("MainController",["$scope","$mdSidenav",function(a,b){function c(a){return function(){b(a).toggle()}}a.toggleLeft=c("left")}]).directive("myNavMenu",function(){return{replace:!0,restrict:"E",scope:{isSidebar:"@"},templateUrl:"views/sidebar.template.html",link:function(a,b,c){var d=angular.element("#navbar-toggle"),e=angular.element(".sidebar-nav a");e.on("click",function(){d.click()})}}}).directive("scrollToItem",function(){return{restrict:"A",scope:{scrollTo:"@"},link:function(a,b,c){b.on("click",function(){var a=angular.element("body");angular.element(a).animate({scrollTop:b.offset().top},"fast")})}}}).controller("ModalDemoCtrl",["$scope","$uibModal",function(a,b,c){var d=this;d.animationsEnabled=!0,d.work=a.work,d.openComponentModal=function(){b.open({backdrop:!1,windowClass:"full-screen",component:"modalComponent",resolve:{work:function(){return d.work}}})}}]).component("modalComponent",{templateUrl:"myModalContent.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controller:function(){var a=this;a.$onInit=function(){a.work=a.resolve.work}},controllerAs:"modalContent"}),angular.module("portfolioList",["common.portfolio","ngMaterial"]).component("portfolioList",{templateUrl:"views/portfolio-list.template.html",controller:["Portfolio","$scope","$mdDialog",function(a,b,c){b.portfolio=a.query(),b.workId=0,b.getWorkId=function(){return b.workId+=1,b.workId}}],controllerAs:"portfolioList"}),angular.module("yoAngularApp").controller("AboutController",function(){}),angular.module("yoAngularApp").run(["$templateCache",function(a){a.put("views/about.template.html",'<div class="about-me container"> <div class="row"> <div class="about-me-body"> <div class="section-title col-lg-12"> <h2>About Me</h2> </div> <div class="about-left-col col-sm-6"> <div class="about-me-text"> <p> Hi there! If it wasn\'t obvious by now, my name is João (Jay, J-Wow, Jao, J-Pop...), I\'m a Software developer born in sunny Portugal and a citizen of the world ever since I found out I love travelling. </p> <p> I focused my work on <a href="https://www.drupal.org/" target="_blank">Drupal</a> development but am always keen on exploring new tech stacks, which sometimes takes me to do silly stuff like deciding to spend <a href="http://www.hackathon.io/masters-london" target="_blank">24 hours</a> building an App using a technology I have never touched before - totally worth it though. </p> <p>When I\'m not nerding away in front of my laptop I am probably outside, either cycling, walking about, meeting friends and definitely beach whenever I can! Lover of good wines and great cheese accompanied by amazing music and good company.</p> </div> </div> <div class="about-right-col col-sm-6"> <div class="about-me-image"> <img src="images/jsantos.ff8ec3d8.jpg" class="img-responsive img-centered" alt=""> </div> <div class="contact-wrapper"> <a class="contact-resume contact-col col-xs-6" target="_blank" href="assets/jsantos-cv.pdf">My CV</a> <a class="contact-email contact-col col-xs-6" href="mailto:jfs.csantos@gmail.com">Contact Me</a> </div> <div class="social-wrapper hidden-xs"> <ul class="list-inline"> <li> <a href="https://github.com/jfcsantos" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a> </li> <li> <a href="https://twitter.com/boissa" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-twitter"></i></a> </li> <li> <a href="https://www.linkedin.com/in/joaofcsantos" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-linkedin"></i></a> </li> <li> <a href="https://www.instagram.com/jfcsantos/" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-instagram"></i></a> </li> </ul> </div> </div> </div> </div> </div>'),a.put("views/footer.template.html",'<div class="footer-below"> <div class="container"> <div class="row"> <ul class="list-inline"> <li> <a href="https://github.com/jfcsantos" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-github"></i></a> </li> <li> <a href="https://twitter.com/boissa" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-twitter"></i></a> </li> <li> <a href="https://www.linkedin.com/in/joaofcsantos" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-linkedin"></i></a> </li> <li> <a href="https://www.instagram.com/jfcsantos/" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-instagram"></i></a> </li> </ul> </div> <div class="row"> <div class="col-lg-12"> &copy; Joao Santos 2016 </div> </div> </div> </div>'),a.put("views/header.template.html",'<div class="container header-inner-wrapper"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header page-scroll"> <button type="button" id="navbar-toggle" class="navbar-toggle" ng-click="toggleLeft()"> <span class="sr-only">Toggle navigation</span> <i class="fa fa-bars"></i> </button> </div> <div class="row"> <div class="col-lg-12"> <!-- <img class="img-responsive" src="img/profile.png" alt=""> --> <div class="intro-text"> <span class="name"> <a href="#page-top">Joao Santos</a> </span> <span class="skills">Full Stack Web Developer</span> </div> </div> </div> <!-- Navigation --> <nav id="mainNav" class="navbar navbar-default navbar-custom"> <!-- Collect the nav links, forms, and other content for toggling --> <my-nav-menu is-sidebar="false" class="collapse navbar-collapse navbar-wrapper"></my-nav-menu> <!-- <div class="collapse navbar-collapse navbar-wrapper">\n      <ul class="nav navbar-nav">\n        <li>\n          <a href="/">Home</a>\n        </li>\n        <li>\n          <a href="/#portfolio">Work</a>\n        </li>\n        <li>\n          <a href="about">About Me</a>\n        </li>\n      </ul>\n    </div> --> <!-- /.navbar-collapse --> </nav> </div>'),a.put("views/main.template.html",'<!-- Portfolio Grid Section --> <section id="portfolio"> <div class="container"> <div class="row"> <div class="col-lg-8"> <p>As a software engineer who bumped web development from a small hobby into a career path I had the opportunity of working in projects for both individuals and big corporations.</p> <p>Among backend development and projects, here are a some of the work I\'ve been doing in the past years.</p> </div> </div> <div class="row"> <div class="col-lg-12"> <h4>Work</h4> <hr class="star-primary"> </div> </div> <div class="row"> <portfolio-list></portfolio-list> </div> </div> </section>'),a.put("views/portfolio-list.template.html",'<div ng-repeat="work in portfolio" class="col-sm-4 portfolio-item"> <div ng-controller="ModalDemoCtrl as modal"> <script type="text/ng-template" id="myModalContent.html"><div class="container portfolio-modal">\n          <div class="close-modal"  ng-click="modalContent.dismiss()">\n            <div class="lr">\n              <div class="rl">\n              </div>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col-lg-8 col-lg-offset-2">\n              <div class="modal-body">\n                <div class="modal-title">\n                  <h2>{{modalContent.work.title}}</h2>\n                  <div>{{modalContent.work.categories}}</div>\n                </div>\n                <div class="project-intro-text text-left" ng-bind-html="modalContent.work.introText"></div>\n                <div class="modal-cover-img-wrapper">\n                  <img ng-src="{{modalContent.work.imageUrl}}" class="img-responsive   img-centered" alt="">\n                </div>\n                <div class="modal-project-details row">\n                  <div class="col-sm-4">\n                    <ul class="list-inline item-details">\n                      <li ng-repeat="item in modalContent.work.itemDetails">\n                        <span class="item-title">{{item.title}}:</span>\n                        <strong  ng-bind-html="item.content"></strong>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="col-sm-8" ng-bind-html="modalContent.work.description"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div></script> <a href="#/" class="portfolio-link row" ng-click="modal.openComponentModal()"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img ng-src="{{work.imageUrl}}" class="img-responsive" alt="{{work.name}}"> </a> <a href="#/" title="{{work.name}}" class="portfolio-item-title row" ng-click="modal.openComponentModal()">{{work.name}}</a> </div> </div>'),a.put("views/portfolio-modals.template.html",'<!-- Portfolio Modals --> <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <div class="modal-title"> <h2>CRUK Fundraising Platform</h2> <div>fundraise, charity, Drupal, PHP</div> </div> <div class="project-intro-text text-left"> <p>The new fundraising platform created in-house by Cancer Research UK aims to provide a seamless, free and enjoyable way of creating <a href="https://fundraise.cancerresearchuk.org/e-lions" target="_blank">Fundraising Pages</a>.</p> </div> <div class="modal-cover-img-wrapper"> <img src="images/portfolio/cruk-fundraise.png" class="img-responsive img-centered" alt=""> </div> <div class="modal-project-details row"> <div class="col-sm-4"> <ul class="list-inline item-details"> <li>Client: <strong>Cancer Research UK</strong> </li> <li>Website: <strong><a href="https://fundraise.cancerresearchuk.org/" target="_blank">fundraise.cancerresearchuk.org</a> </strong> </li> <li>Date: <strong>June 2016</strong> </li> <li>Categories: <strong>fundraise, charity, Drupal, PHP</strong> </li> </ul> </div> <div class="col-sm-8"> <p>Together with the digital team at CRUK, I led the development of this Drupal based project. The platform uses a mix of both Drupal 7 with custom built Symphony Web Services serving the required contents and assets to the user.</p> <p>Besides the ability to personalize the page, the main feature built is the Donation feed. This list of past donations and messages left by contributors is part of the integration with CRUK\'s donation and payment processing services.</p> </div> </div> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <div class="modal-title"> <h2>Moon Jamaica</h2> <div>Commerce, Drupal, PHP</div> </div> <div class="project-intro-text text-left"> <p>The Moon Jamaica website started as a digital version of it\'s older brother, the Moon Jamaica guide book, as a way to easily keep the contents up-to-date and provide a pleasant experience for the users. It is also a booking website, listing all the hotels, rental car and events available in the guide book.</p> </div> <div class="modal-cover-img-wrapper"> <img src="images/portfolio/moonjamaica.png" class="img-responsive img-centered" alt=""> </div> <div class="modal-project-details row"> <div class="col-sm-4"> <ul class="list-inline item-details"> <li>Client: <strong>Moon Jamaica</strong> </li> <li>Website: <strong><a href="https://www.moonjamaica.com/" target="_blank">MoonJamaica.com</a> </strong> </li> <li>Date: <strong>August 2016</strong> </li> <li>Categories: <strong>Commerce, Drupal, PHP</strong> </li> </ul> </div> <div class="col-sm-8"> <p>This website was built using Drupal with the Commerce modules to habdle all the booking and store functionalities. Working as a consultant, I am trying to recreate and optimise the most important features built in the site, as well as improving the user experience of the overall website.</p> </div> </div> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <div class="modal-title"> <h2>Disasters Emergency Committee</h2> <div>fundraise, charity, Drupal, PHP</div> </div> <div class="project-intro-text text-left"> <p>The DEC – Disasters Emergency Committee – brings together 13 leading UK aid agencies to raise money at times of humanitarian crisis in poorer countries. By working together we can raise more money to save lives and rebuild shattered communities.</p> </div> <div class="modal-cover-img-wrapper"> <img src="images/portfolio/dec-org.png" class="img-responsive img-centered" alt=""> </div> <div class="modal-project-details row"> <div class="col-sm-4"> <ul class="list-inline item-details"> <li>Client: <strong>Disasters Emergency Committee</strong> </li> <li>Website: <strong><a href="http://www.dec.org.uk/" target="_blank">DEC.org.uk</a> </strong> </li> <li>Date: <strong>September 2015</strong> </li> <li>Categories: <strong>fundraise, charity, Drupal, PHP, Embedly, Stripe</strong> </li> </ul> </div> <div class="col-sm-8"> <p>Helped build and deploy the new DEC website, a mobile-friendly project focused on raising awareness for worldwide crisis appeals with a clean design and customized donation process.</p> <p>Implemented a content feed for the Appeal pages using <a href="http://embed.ly/" target="_blank">Embed.ly</a>, fetching relevant content from several sources including Twitter, Facebook and YouTube. Also created a custom Donation workflow integrating <a href="https://stripe.com/" target="_blank">Stripe\'s</a> API for payment processing.</p> </div> </div> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <div class="modal-title"> <h2>Theatre People</h2> <div>Commerce, Bookings, Drupal, PHP, Python</div> </div> <div class="project-intro-text text-left"> <p>The main website of one of the biggest and most experienced theatre ticket provider in London, <a href="http://www.theatrepeople.com/" target="_blank">TheatrePeople.com</a> handles a huge amount of traffic and bookings with an all in-house solution.</p> </div> <div class="modal-cover-img-wrapper"> <img src="images/portfolio/theatre-people.png" class="img-responsive img-centered" alt=""> </div> <div class="modal-project-details row"> <div class="col-sm-4"> <ul class="list-inline item-details"> <li>Client: <strong>Encore Tickets Ltd.</strong> </li> <li>Website: <strong><a href="http://www.theatrepeople.com/" target="_blank">TheatrePeople.com</a> </strong> </li> <li>Date: <strong>June 2014</strong> </li> <li>Categories: <strong>Commerce, Bookings, Drupal, PHP, Python</strong> </li> </ul> </div> <div class="col-sm-8"> <p>As part of the Drupal development team at <a href="http://www.encoretickets.co.uk/" target="_blank">Encore Tickets</a>, I was responsible for implementing new features, custom-built A/B test scenarios as well as maintenance and improvements to existing code.</p> <p>With optimization in mind and in order to always have the most up-to-date ticket and show availability, I built a small Python service to provide multi-threading on custom inter-dependent Drupal cron jobs which ran every night. - <a href="https://github.com/jfcsantos/python-threads" target="_blank">Overnight Updates</a></p> </div> </div> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div>  <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <div class="modal-title"> <h2>ESN Lisboa</h2> <div>Drupal, PHP, Volunteering, NPO</div> </div> <div class="project-intro-text text-left"> <p>ESN Lisboa is the Lisbon section of the Erasmus Student Network. It is a non-profit organization born in September 2008 by the hand of a small group of Portuguese Erasmus students that had just come from their Erasmus. </p> </div> <div class="modal-cover-img-wrapper"> <img src="images/portfolio/esn-lisboa.png" class="img-responsive img-centered" alt=""> </div> <div class="modal-project-details row"> <div class="col-sm-4"> <ul class="list-inline item-details"> <li>Client: <strong>Erasmus Student Network Lisboa</strong> </li> <li>Website: <strong><a href="esnlisboa.org" target="_blank">ESN Lisboa</a> </strong> </li> <li>Date: <strong>September 2012</strong> </li> <li>Categories: <strong>Drupal, PHP, Volunteering, NPO</strong> </li> </ul> </div> <div class="col-sm-8"> <p>As a volunteer member of the organisation I was responsable for the maintenance of the ESN Lisboa website. <a href="http://esn.org/" target="_blank">ESN Satellite</a> is a website template for all ESN sections and projects based on Drupal 7 which has volunteer members contributing to it\'s constant development and improvement.</p> </div> </div> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <div class="modal-title"> <h2>TKB Multimedia Archive</h2> <div>Drupal, PHP, D3.js</div> </div> <div class="project-intro-text text-left"> <p>As part of my Computer Science master thesis I worked on the TKB project - A Transmedia Knowledge Base for Perfoming Arts. This was part of a long, multi-faceted project, focused on video annotation and the creation of a platform where artists could easily store multimedia content and connect to others. </p> </div> <div class="modal-cover-img-wrapper"> <img src="images/portfolio/tkb-fct.png" class="img-responsive img-centered" alt=""> </div> <div class="modal-project-details row"> <div class="col-sm-4"> <ul class="list-inline item-details"> <li>Client: <strong>FCT UNL</strong> </li> <li>Website: <strong><a href="https://tkb.fcsh.unl.pt/" target="_blank">TKB Multimedia Archive</a></strong> </li> <li>Date: <strong>July September 2012</strong> </li> <li>Categories: <strong>Drupal, PHP, D3.js</strong> </li> </ul> </div> <div class="col-sm-8"> <p>The archive was created with the purpose of clearly displaying the connections between each artist and their content. With this in mind, I\'ve abstracted most of the Drupal content views and used the <a href="https://d3js.org/" target="_blank">D3.js</a> library for data visualization.</p> <p>The result was a platform where all the content and users where connected in a graph-like display, related via categories, tag words or field of studies.</p> </div> </div> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> '),a.put("views/sidebar.template.html","<ul ng-class=\"isSidebar === 'true' ? 'sidebar-nav' : ['nav', 'navbar-nav']\"> <li ng-class=\"isSidebar === 'true' ? 'page-scroll' : '' \"> <a href=\"#/\">Home</a> </li> <li ng-class=\"isSidebar === 'true' ? 'page-scroll' : '' \"> <a href=\"#/\" scroll-to-item scroll-to=\"#portfolio\"> Work</a> </li> <li ng-class=\"isSidebar === 'true' ? 'page-scroll' : '' \"> <a href=\"#/about\">About Me</a> </li> </ul>")}]);