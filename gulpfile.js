const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
// const pug = require('gulp-pug');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch('src/js/*.js', gulp.parallel('scripts'));
    gulp.watch('src/icons/*', gulp.parallel('icons'));
    gulp.watch('src/fonts/*', gulp.parallel('fonts'));
    gulp.watch('src/img/*', gulp.parallel('img'));
});
// gulp.watch('src/app/*.pug', gulp.parallel('pug'));

gulp.task('html', () => {
    return gulp.src('src/*.html') 
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js')
      .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('mailer', () => {
    return gulp.src('src/mailer/**/*')
      .pipe(gulp.dest('dist/mailer'));
});

gulp.task('icons', () => {
    return gulp.src('src/icons/**/*')
      .pipe(gulp.dest('dist/icons'));
});

gulp.task('img', () => {
    return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// gulp.task('pug', ()=> {
//     return gulp.src('src/app/*.pug')
//     .pipe(pug({pretty:true}))
//     .pipe(gulp.dest('src/app/'));
// });

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'icons', 'mailer', 'fonts', 'scripts', 'img', 'html'));