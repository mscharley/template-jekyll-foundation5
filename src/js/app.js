
requirejs.config({
  paths: {
    modernizr: '/assets/modernizr/modernizr',
    jquery: '/assets/jquery/dist/jquery.min',
    foundation: '/assets/foundation/js/foundation'
  },
  shim: {
    foundation: ['jquery']
  }
});

requirejs(['jquery', 'foundation', 'modernizr'], function($) {
  // Foundation JavaScript
  // Documentation can be found at: http://foundation.zurb.com/docs
  $(document).foundation();
});
