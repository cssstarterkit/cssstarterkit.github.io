//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function (mix) {
    mix.sass('./cssstarterkit/asset/sass/app.scss', './cssstarterkit/dist/css/postcss/')
        .postcss('app.css', {
            plugins: [
                require('lost')
            ],
            output: './cssstarterkit/dist/css/',
            srcDir: './cssstarterkit/dist/css/postcss/'
        })
        .styles([
            './cssstarterkit/asset/sass/vendor/normalize.css'
        ], './cssstarterkit/dist/css/vendor.css');


    mix.sass('./assets/sass/app.scss', './public/css/postcss/')
        .postcss('app.css', {
            plugins: [
                require('lost')
            ],
            output: './public/css/',
            srcDir: './public/css/postcss/'
        })
        .styles([
            './assets/sass/vendor/font-awesome.min.css',
            './assets/sass/vendor/font-awesome-animation.css',
            './assets/sass/vendor/normalize.css'
        ], './public/css/vendor.css');

    mix.scripts('./cssstarterkit/asset/js/script.js', './cssstarterkit/dist/js/app.js')

    mix.scripts([
        './cssstarterkit/asset/js/vendor/jquery-3.2.1.min.js',
        './cssstarterkit/asset/js/vendor/modernizr-2.8.3.min.js'
    ], './cssstarterkit/dist/js/vendor.js')

    mix.scripts('./assets/js/script.js', './public/js/app.js')

    mix.scripts([
        './assets/js/vendor/jquery-3.2.1.min.js',
        './assets/js/vendor/modernizr-2.8.3.min.js',
        './assets/js/vendor/prism.js',
        './assets/js/vendor/prism-normalize-whitespace.js'
    ], './public/js/vendor.js')
});
