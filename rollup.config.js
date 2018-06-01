import progress from 'rollup-plugin-progress';
import buble from 'rollup-plugin-buble';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import autoprefixer from 'autoprefixer';
import clean from 'postcss-clean';

const isDist = process.env.BUILD === 'production';

export default {
    input: 'src/js/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: !isDist,
    },
    plugins: [
        progress({
            clearLine: false,
        }),
        postcss({
            extract: true,
            sourceMap: !isDist,
            plugins: [
                autoprefixer(),
                clean(),
            ],
        }),
        buble({
            transforms: {
                modules: false,
                dangerousForOf: true,
            },
            objedtAssign: 'Object.assign',
        }),
        uglify(),
    ],
};
