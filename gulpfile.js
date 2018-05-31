var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = true;


elixir(function(mix) {
  mix.sass('./scss/app.scss', 'css/app.css')
    // .styles( cssFiles, 'src/css/app.css')

});
