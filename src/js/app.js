
requirejs.config({
  paths: {
    "jquery": '/assets/jquery/dist/jquery.min',
    "jquery.cookie": '/assets/jquery.cookie/jquery.cookie',
    "foundation": '/assets/foundation/js/foundation',
    "foundation.abide": '/assets/foundation/js/foundation/foundation.abide',
    "foundation.accordion": '/assets/foundation/js/foundation/foundation.accordion',
    "foundation.alert": '/assets/foundation/js/foundation/foundation.alert',
    "foundation.clearing": '/assets/foundation/js/foundation/foundation.clearing',
    "foundation.dropdown": '/assets/foundation/js/foundation/foundation.dropdown',
    "foundation.equalizer": '/assets/foundation/js/foundation/foundation.equalizer',
    "foundation.interchange": '/assets/foundation/js/foundation/foundation.interchange',
    "foundation.joyride": '/assets/foundation/js/foundation/foundation.joyride',
    "foundation.magellan": '/assets/foundation/js/foundation/foundation.magellan',
    "foundation.offcanvas": '/assets/foundation/js/foundation/foundation.offcanvas',
    "foundation.orbit": '/assets/foundation/js/foundation/foundation.orbit',
    "foundation.reveal": '/assets/foundation/js/foundation/foundation.reveal',
    "foundation.slider": '/assets/foundation/js/foundation/foundation.slider',
    "foundation.tab": '/assets/foundation/js/foundation/foundation.tab',
    "foundation.toolbar": '/assets/foundation/js/foundation/foundation.toolbar',
    "foundation.topbar": '/assets/foundation/js/foundation/foundation.topbar'
  },
  shim: {
    "jquery.cookie": ['jquery'],
    "foundation": ['jquery'],
    "foundation.abide": ['foundation'],
    "foundation.accordion": ['foundation'],
    "foundation.alert": ['foundation'],
    "foundation.clearing": ['foundation'],
    "foundation.dropdown": ['foundation'],
    "foundation.equalizer": ['foundation'],
    "foundation.interchange": ['foundation'],
    "foundation.joyride": ['foundation', 'jquery.cookie'],
    "foundation.magellan": ['foundation'],
    "foundation.offcanvas": ['foundation'],
    "foundation.orbit": ['foundation'],
    "foundation.reveal": ['foundation'],
    "foundation.slider": ['foundation'],
    "foundation.tab": ['foundation'],
    "foundation.toolbar": ['foundation'],
    "foundation.topbar": ['foundation']
  }
});

require(['jquery', 'foundation'], function($) {
  // Foundation JavaScript
  // Documentation can be found at: http://foundation.zurb.com/docs
  $(document).load(function() {
    $(this).foundation();
  });
});
