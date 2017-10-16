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
            './assets/sass/vendor/normalize/normalize.css',
            './assets/sass/vendor/prism/prism.css',
            './assets/sass/vendor/jam-icons-css/jam-icons.css'
        ], './public/css/vendor.css');

    mix.scripts('./assets/js/script.js', './public/js/app.js')

    mix.scripts([
        './assets/js/vendor/jquery-3.2.1.min.js',
        './assets/js/vendor/modernizr-2.8.3.min.js',
        './assets/js/vendor/accordion-js/accordion.js',
        './assets/js/vendor/modaal-js/modaal.min.js',
        './assets/js/vendor/prism-js/prism.js',
        './assets/js/vendor/prism-js/prism-normalize-whitespace.js'
    ], './public/js/vendor.js')
});
