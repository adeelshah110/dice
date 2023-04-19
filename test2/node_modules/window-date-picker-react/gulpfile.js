const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rollup = require('rollup');
const replace = require('rollup-plugin-replace');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const pkg = require('./package');

gulp.task('css', () => {
    return gulp.src('node_modules/window-date-picker/dist/css/window-date-picker.min.css')
    .pipe(gulp.dest('./dist/css'));
});

const banner = `/*!
* Window Date Picker React
* version: ${pkg.version}
*  author: ${pkg.author.name} <${pkg.author.email}>
* website: ${pkg.author.url}
*  github: ${pkg.repository.url}
* license: MIT
*/`;

gulp.task('script', async done => {
    const bundle = await rollup.rollup({
        input: './src/index.jsx',
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            nodeResolve(),
            commonjs({
                include: [
                    'node_modules/**',
                ],
                namedExports: {
                    'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement', 'cloneElement']
                },
            }),
            babel({
                exclude: 'node_modules/**',
                presets: [
                    ['@babel/preset-env', {modules: false}],
                    ['@babel/preset-react']
                ]
            })
        ]
    });

    await bundle.write({
        banner,
        file: 'dist/js/window-date-picker.js',
        format: 'umd',
        name: 'WindowDatePicker'
    });

    await bundle.write({
        banner,
        file: 'dist/js/window-date-picker.common.js',
        format: 'cjs'
    });

    await bundle.write({
        banner,
        file: 'dist/js/window-date-picker.esm.js',
        format: 'es'
    });

    done();
});

gulp.task('watch-script', () => {
    gulp.watch('./src/*.jsx', gulp.series('script'));
});

gulp.task('minify-script', () => {
    return gulp.src('dist/js/window-date-picker.js')
    .pipe(uglify({
        output: {
            comments: /Window Date Picker React/
        }
    }))
    .pipe(rename('window-date-picker.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', done => {
    gulp.parallel('watch-script')(done);
});