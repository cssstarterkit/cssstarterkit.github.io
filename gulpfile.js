//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function (mix) {
    mix.sass('./assets/sass/app.scss', './public/css/postcss/')
        .postcss('app.css', {
            plugins: [
                require('lost')
            ],
            output: './public/css/',
            srcDir: './public/css/postcss/'
        })
        .styles([
            './assets/sass/vendor/normalize.css',
            './assets/sass/vendor/font-awesome.min.css',
            './assets/sass/vendor/font-awesome-animation.css',
            './assets/sass/vendor/prism.css'
        ], './public/css/vendor.css');

    mix.scripts('./assets/js/script.js', './public/js/app.js')

    mix.scripts([
        './assets/js/vendor/jquery-3.2.1.min.js',
        './assets/js/vendor/modernizr-2.8.3.min.js',
        './assets/js/vendor/prism.js',
        './assets/js/vendor/prism-normalize-whitespace.js'
    ], './public/js/vendor.js')
});

