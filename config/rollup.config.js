import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import paths from './services/paths';

import inputOutput from './services/input-output';
import bPlugins from './services/plugins';

inputOutput.output.sourcemap = 'inline';

const plugins = bPlugins();

export default {
  ...inputOutput,
  plugins: [
    serve({
      open: false,
      openPage: '',
      contentBase: ['public'],
      host: 'localhost',
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
    livereload({
      watch: `${paths.build}`,
    }),
    ...plugins,
  ]
};