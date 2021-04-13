import serve from 'rollup-plugin-serve';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import hmr from 'rollup-plugin-hot'
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer'
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser'
import fs from 'fs';
import path from 'path';

const browsers = [  "last 2 years",  "> 0.1%",  "not dead"]

let is_production = process.env.BUILD === 'production';

const replace_cfg = {
  'process.env.NODE_ENV': JSON.stringify( is_production ? 'production' : 'development' ),
  preventAssignment:false,
}

const babel_cfg = {
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: browsers
          },
        }
      ],
      "@babel/preset-react"
    ],
    exclude: 'node_modules/**',
    plugins: [
      "@babel/plugin-proposal-class-properties",
      ["@babel/plugin-transform-runtime", {
         "regenerator": true
      }],
      //[ "transform-react-jsx", { "pragma": "h" } ]
      [ "transform-react-jsx" ]
    ],
    babelHelpers: 'runtime'
}


const cfg = {
  input: [
    'src/main.js',
  ],
  output: {
    dir:'dist',
    format: 'iife',
    sourcemap: true,
    exports: 'named',
  },
  inlineDynamicImports: true,
  plugins: [
    replace(replace_cfg),
    babel(babel_cfg),
    postcss({
      plugins: [
        autoprefixer({
          overrideBrowserslist: browsers
          //browsers: browsers
        }),
      ]
    }),
    commonjs({
        sourceMap: false,
    }),
    nodeResolve({
        browser: true,
        jsnext: true,
        module: false,
    }),
    serve({
      open: false,
      host: 'localhost',
      port: 3000,
      //contentBase: 'dist',
    }),
  ],
} ;


export default cfg;
