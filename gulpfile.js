var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyHtml = require("gulp-minify-html"),
    minifyCss = require("gulp-minify-css"),
    livereload = require('gulp-livereload');

gulp.task('js', function () {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular/angular.min.js.map',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-route/angular-route.min.js.map',
        'node_modules/angular-storage/dist/angular-storage.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/js/modal.js',
        'node_modules/bootstrap/js/collapse.js',
        'node_modules/bootstrap/js/alert.js',
        'node_modules/jsrsasign/lib/footer.js',
        'node_modules/ionic1-star-rating/dist/index.js',
        'node_modules/jsrsasign/lib/jsrsasign.js',
        'app/libraries/angular-rate.js'
    ])
        .pipe(gulp.dest('public/assets/js'));

    gulp.src([
        'app/js/app.js',
        'app/js/config.js',
        'app/js/router.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());

    gulp.src([
        'app/js/controllers/*.js'
    ])
        .pipe(concat('controllers.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());

    gulp.src([
        'app/js/services/*.js'
    ])
        .pipe(concat('services.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());

    gulp.src([
        'app/js/directives/*.js'
    ])
        .pipe(concat('directives.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());
});

gulp.task('html', function () {
    gulp.src([
        'app/html/templates/*.html'
    ])
        .pipe(minifyHtml())
        .pipe(gulp.dest('public/assets/templates'))
        .pipe(livereload());

    gulp.src([
        'app/html/directives/*.html'
    ])
        .pipe(minifyHtml())
        .pipe(gulp.dest('public/assets/directives'))
        .pipe(livereload());

    gulp.src([
        'app/*.html'
    ])
        .pipe(minifyHtml())
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});

gulp.task('css', function () {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'app/libraries/rate.css'
    ])
        .pipe(gulp.dest('public/assets/css'));
    gulp.src([
        'app/css/*.css'
    ])
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('images', function () {
    gulp.src([
        'node_modules/ionic1-star-rating/dist/assets/images/star-rating.icons.svg',
        'app/img/*'
    ])
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('fonts', function () {
    gulp.src([
        'node_modules/font-awesome/css/*.*'
    ])
        .pipe(gulp.dest('public/assets/css'));
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/bootstrap/fonts/*.*'
    ])
        .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('default', ['html', 'js', 'fonts', 'css', 'images']);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['gulpfile.js'], ['default']);
    gulp.watch(['app/*.html', 'app/templates/*'], ['html']);
    gulp.watch(['app/css/*'], ['css']);
    gulp.watch(['app/img/*'], ['images']);
    gulp.watch(['app/js/**/**'], ['js']);
    gulp.watch(['app/html/**/**'], ['html']);
});
