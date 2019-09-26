import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import path from 'path';

export default {
  input: 'lib/index.js',
  output: {
    name: 'BarethemeCore',
    file: 'dist/lib.min.js',
    format: 'umd',
  },
  plugins: [
    terser(),
    babel({
      exclude: 'node_modules/**',
    }),
    json(),
    alias({
      resolve: ['.js'],
      entries: [
        {
          find: '@', replacement: path.resolve(__dirname, '/lib'),
        },
      ],
    }),
  ],
};
