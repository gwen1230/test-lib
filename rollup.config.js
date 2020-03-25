import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.ts', // our source file
  output: [
    {
      name: 'test-lib',
      file: 'dist/test-lib.umd.js',
      format: 'umd',
      sourcemap: true
    }
    // {
    //   // A self-executing function, suitable for inclusion as a <script> tag.
    //   name: 'test-lib',
    //   file: 'dist/test-lib.umd.min.js',
    //   format: 'iife',
    //   extend: true,
    //   sourcemap: true,
    //   plugins: [terser()]
    // },
    // {
    //   // CommonJS, suitable for Node and other bundlers
    //   name: 'test-lib',
    //   file: 'dist/test-lib.common.js',
    //   format: 'cjs',
    //   sourcemap: true
    // }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: { exclude: ['node_modules', 'src/components/', 'tests'] }
    }),
    // commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    })
    // scss({
    //   output: 'dist/test-lib.css'
    // }),
    // copy({
    //   targets: [{ src: 'src/assets/sass/**', dest: 'dist/scss' }]
    // }),
    // image(),
    // terser() // minifies generated bundles
  ]
};
