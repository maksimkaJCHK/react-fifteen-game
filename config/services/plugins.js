import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';

import appRoot from 'app-root-path';
import path from 'path';

const bPlugins = (extract = false) => {
  return [
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      extensions: ['.js', '.jsx'],
      browser: true,
    }),
    image(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(appRoot.path, 'src'), 
        },
      ]
    }),
    extract ? postcss({
      extract: 'css/main.css',
      minimize: true,
      plugins: [
        autoprefixer(),
        url({
          url: "inline",
          maxSize: 10,
          fallback: "copy",
        }),
      ],
    }) : postcss({
      plugins: [
        autoprefixer(),
        url({
          url: "inline",
          maxSize: 10,
          fallback: "copy",
        }),
      ],
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        "@babel/preset-react",
      ],
      plugins: [],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "debug": false,
            "useBuiltIns": "entry",
            "modules": false,
            "corejs": 3,
            "targets": {
              "chrome": "80",
              "edge": "80"
            }
          }
        ],
      ]
    }),
  ]
}

export default bPlugins;