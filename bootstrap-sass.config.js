var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  verbose: true, // Set to true to show diagnostic information

  // IMPORTANT: Set next two configuration so you can customize
  // bootstrapCustomizations: gets loaded before bootstrap so you can configure the variables used
  // by bootstrap mainSass: gets loaded after bootstrap, so you can override a bootstrap style.
  // NOTE, these are optional.

  // Use preBootstrapCustomizations to change $brand-primary. Ensure this
  // preBootstrapCustomizations does not depend on other bootstrap variables.
  //preBootstrapCustomizations: './_pre-bootstrap-customizations.scss',

  // Use bootstrapCustomizations to utilize other sass variables defined in
  // preBootstrapCustomizations or the _variables.scss file. This is useful to set one
  // customization value based on another value.
  //bootstrapCustomizations: './_bootstrap-customizations.scss',

  mainSass: 'src/assets/scss/main.scss',

  // Default for the style loading
  //styleLoader: 'style-loader!css-loader!sass-loader',
  //
  // If you want to use the ExtractTextPlugin
  //   and you want compressed
   styleLoader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
  //
  // If you want expanded CSS
  //   styleLoader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass?outputStyle=expanded'),

  scripts: {
  },
  styles: {
    'mixins': true,

    'normalize': true,
    'print': true,
    'glyphicons': true,

    'scaffolding': true,
    'type': true,
    'code': true,
    'grid': true,
    'tables': false,
    'forms': true,
    'buttons': true,

    'component-animations': false,
    'dropdowns': false,
    'button-groups': false,
    'input-groups': false,
    'navs': false,
    'navbar': false,
    'breadcrumbs': false,
    'pagination': false,
    'pager': false,
    'labels': false,
    'badges': false,
    'jumbotron': false,
    'thumbnails': false,
    'alerts': false,
    'progress-bars': false,
    'media': false,
    'list-group': false,
    'panels': true,
    'wells': false,
    'responsive-embed': false,
    'close': false,

    'modals': false,
    'tooltip': false,
    'popovers': false,
    'carousel': false,

    'utilities': true,
    'responsive-utilities': true
  }
};

