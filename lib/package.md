Package.describe({summary: "Custom theme"});

Package.on_use(function (api) {
  api.use(['templating', 'telescope-base',], ['client']);

  api.addFiles([
    'client/stylesheets/main.css',
    'lib/client/templates/new_posts_list.html',
    'lib/client/custom.js',
    ], ['client']);
});
