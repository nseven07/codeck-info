'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const gsass = require('gulp-sass');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const twig = require('gulp-twig');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const header = require('gulp-header');
const imagemin = require('gulp-imagemin');
const data = require('gulp-data');

const templates = './src/presentation/';
const dist = './dist/';
const homePath = './src/assets/';
const nodeModules = './node_modules/';

const foreach = require('gulp-foreach');

const injectSvg = require('gulp-inject-svg');
const injectSvgOptions = {base: './dist/'};


const paths = {
    js: 'assets/js/',
    css: 'assets/css/',
    icons: 'assets/icons/'
};

const sourceJs = [
    nodeModules + 'jquery/dist/jquery.js',
    nodeModules + 'wowjs/dist/wow.min.js',
    nodeModules + 'bootstrap/dist/js/bootstrap.js',
    nodeModules + 'slick-carousel/slick/slick.js',
    nodeModules + '@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    nodeModules + 'fullpage.js/dist/fullpage.js',
    nodeModules + 'lottie-web/build/player/lottie.min.js',
    nodeModules + 'fullpage.js/dist/fullpage.extensions.min.js',
    homePath + 'js/main.js',
    homePath + 'js/console.js',
];

const sourceSass = [
    homePath + "css/style.sass"
];

const dataSource = require('./data');

function compile() {
    return gulp.src('./src/presentation/pages/*.html')
        .pipe(data(dataSource))
        .pipe(foreach(function (stream, file) {
            return stream
                .pipe(twig({base: './src/presentation'}))
        }))
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
}

function scripts() {
    return gulp.src(sourceJs)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist + 'assets/js'))
        .pipe(connect.reload());
}


function scriptsDev() {
    return gulp.src(sourceJs)
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest(dist + 'assets/js'))
        .pipe(connect.reload())
}


function connectGulp() {
    connect.server({
        root: [dist],
        livereload: true
    });
}

function clean() {
    return del([dist + '**', '!' + dist])
}

function copyFiles() {
    return gulp
        .src(['./src/assets/img/**/*', './src/assets/icons/**/*', './src/assets/font/**/*', './src/assets/presentation/**/*',
            './src/assets/animations/**/*'
        ], {base: './src/'})
        //.pipe(imagemin({interlaced: true, progressive: true, optimizationLevel: 5, svgoPlugins: [{removeViewBox: true}]}))
        .pipe(gulp.dest(dist))
}

function style() {
    const plugins = [
        autoprefixer(),
        cssnano({discardComments: true})
    ];
    return gulp.src(sourceSass)
        .pipe(sourcemaps.init({}))
        .pipe(gsass({
            includePaths: ['node_modules']
        }).on('error', gsass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.', {addComment: false}))
        .pipe(gulp.dest(dist + 'assets/css'))
        .pipe(connect.reload());
}

function styleDev() {
    return gulp.src(sourceSass)
        .pipe(gsass({
            includePaths: ['node_modules']
        }).on('error', gsass.logError))
        .pipe(gulp.dest(dist + 'assets/css'))
        .pipe(connect.reload());
}



function injectSVG() {
    return gulp.src('./dist/*.html')
        .pipe(injectSvg(injectSvgOptions))
        .pipe(gulp.dest(dist));

}

function myWatchTasks() {
    gulp.watch(['./src/assets/css/*.sass'], styleDev);
    gulp.watch(['./src/assets/js/*.js'], scriptsDev);
    gulp.watch(['./src/presentation/**/*.html'], compile)
}

const dev = gulp.parallel(gulp.series(clean, styleDev, copyFiles, scriptsDev, compile, injectSVG, connectGulp), myWatchTasks);
const build = gulp.series(clean, style, copyFiles, scripts, compile, injectSVG);


exports.clean = clean;
exports.copyFiles = copyFiles;
exports.compile = compile;
exports.build = build;
exports.default = dev;
exports.dev = dev;
exports.style = style;

