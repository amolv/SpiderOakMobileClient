/**
 * FoldersCollection.js
 */
(function (spiderOakApp, window, undefined) {
  "use strict";
  var console = window.console || {};
  console.log = console.log || function(){};
  var Backbone    = window.Backbone,
      _           = window._,
      $           = window.$;

  spiderOakApp.FoldersCollection = Backbone.Collection.extend({
    // ...
    parse: function(resp, xhr) {
      // window.console.log(resp);
      var folders = [];
      _.each(resp.dirs, function(folder){
        folders.push({
          name: folder[0].slice(0,-1),
          url: folder[1]
        });
      });
      return folders;
    }
  });

})(window.spiderOakApp = window.spiderOakApp || {}, window);