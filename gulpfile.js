// Include gulp
var gulp = require("gulp");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

BUILD_DEST = "build/";
FILES_OF_HTML = ["src/{popup,background}/*.html"];
FILES_OF_ICON = ["img/*.+(png|jpg|jpeg)"];
FILES_OF_CSS = ["src/popup/styles/*.css"];
FILES_OF_SCSS = ["src/popup/styles/*.scss"];
FILES_OF_TYPESCRIPT = ["src/{popup,background,content}/*.ts"];
FILES_OF_COPY = ["manifest.json"];

gulp.task("default", ["build"]);

gulp.task("build", ["html", "icon", "css", "scss", "typescript", "copy"]);

gulp.task("html", function () {
    return gulp.src(FILES_OF_HTML)
        .pipe(gulp.dest(BUILD_DEST));
});

gulp.task("icon", function () {
    return gulp.src(FILES_OF_ICON, {"base":"."})
        .pipe(gulp.dest(BUILD_DEST));
});

gulp.task("css", function () {
    return gulp.src(FILES_OF_SCSS)
        .pipe(gulp.dest(BUILD_DEST));
});

gulp.task("scss", function () {
    return gulp.src(FILES_OF_SCSS)
        .pipe(sass())
        .pipe(gulp.dest(BUILD_DEST));
});

gulp.task("typescript", function () {
    return gulp.src(FILES_OF_TYPESCRIPT)
        .pipe(tsProject())
        .js.pipe(gulp.dest(BUILD_DEST));
});

gulp.task("copy", function () {
    return gulp.src(FILES_OF_COPY)
        .pipe(gulp.dest(BUILD_DEST));
});

gulp.task("watch", ["build"], function () {
    gulp.watch(FILES_OF_HTML, ["html"]);
    gulp.watch(FILES_OF_ICON, ["icon"]);
    gulp.watch(FILES_OF_CSS, ["css"]);
    gulp.watch(FILES_OF_SCSS, ["scss"]);
    gulp.watch(FILES_OF_TYPESCRIPT, ["typescript"]);
    gulp.watch(FILES_OF_COPY, ["copy"]);
});
