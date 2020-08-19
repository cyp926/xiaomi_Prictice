const gulp = require("gulp");
const del = require("del");

const webseerver = require("gulp-webserver");

const cssmin = require("gulp-cssmin");
const autofixer = require("gulp-autoprefixer");

const htmlmin = require("gulp-htmlmin");

const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sassMin = require("gulp-sass");
const gulpCssmin = require("gulp-cssmin");

let cssHandler = function() {
    return gulp.src("./src/css/*.css")
        .pipe(cssmin())
        .pipe(autofixer())
        .pipe(gulp.dest("./dist/css"));
}
let jsHandler = function() {
    return gulp.src("./src/js/*.js")
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
}
let htmlHandler = function() {
    return gulp.src("./src/html/*.html")
        .pipe(htmlmin({
            removeAttributeQuotes: true,
            removeComments: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
        }))
        .pipe(gulp.dest("./dist/html"))
}
let webserverHandler = function() {
    return gulp.src("./dist")
        .pipe(webseerver({
            host: '127.0.0.1',
            port: '1315',
            livereload: true,
            open: './html/index.html'

        }))
}
let sassHandler = function() {
    return gulp.src("./src/sass/*.scss")
        .pipe(sassMin())
        .pipe(cssmin())
        .pipe(autofixer())
        .pipe(gulp.dest("./dist/css"));
}
let imgHandler = function() {
    return gulp.src("./src/images/*.*")
        .pipe(gulp.dest("./dist/images"));
}
let fontsHandler = function() {
    return gulp.src("./src/fonts/*.*")
        .pipe(gulp.dest("./dist/fonts"));
}
let paginHandler = function() {
    return gulp.src("./src/jquery-pagination/*.*")
        .pipe(gulp.dest("./dist/jquery-pagination"));
}
let serverHandler = function() {
    return gulp.src("./src/server/*.php")
        .pipe(gulp.dest("./dist/server"));
}
let delHandler = function() {
    return del(["./dist"])
}
let watchHandler = function() {
    gulp.watch('./src/css/*.css', cssHandler);
    gulp.watch('./src/js/*.js', jsHandler);
    gulp.watch('./src/html/*.html', htmlHandler);
    gulp.watch('./src/images/*.*', imgHandler);
    gulp.watch('./src/sass/*.scss', sassHandler);
    gulp.watch('./src/fonts/*.*', fontsHandler);
    gulp.watch('./src/jquery-pagination/*.*', paginHandler);
    gulp.watch('./src/server/*.php', serverHandler);
}
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler, jsHandler, htmlHandler, serverHandler, sassHandler, imgHandler, fontsHandler, paginHandler),
    webserverHandler,
    watchHandler
)