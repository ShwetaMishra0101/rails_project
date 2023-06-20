// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
require("semantic-ui")
// about supported directives.
// require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close')
  .on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  })

// $(document).ready(function() {
//     $('.ui.dropdown').dropdown();
//   });