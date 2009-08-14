// $Id$

/**
 * The Drupal behaviors for the ShareThis web service.
 */
Drupal.behaviors.sharethis = function(context) {
  // Process each element.
  if (Drupal.settings.sharethis) {
    jQuery.each(Drupal.settings.sharethis, function(id, options) {
      var shared_object = SHARETHIS.addEntry({
        title: options['title'],
        url: options['url']
      });
      shared_object.attachButton(document.getElementById(id), {button: false});
      $('#'+id).click(function() { return false; });
    });
  }
};
