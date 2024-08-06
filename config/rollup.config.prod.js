import terser from '@rollup/plugin-terser';
import sizes from "rollup-plugin-sizes";
import { visualizer } from "rollup-plugin-visualizer";

import inputOutput from './services/input-output.js';
import bPlugins from './services/plugins.js';

const plugins = bPlugins();

export default {
  ...inputOutput,
  plugins: [
    ...plugins,
    terser({
      output: {
        comments: false,
      },
      compress: {
        drop_console: true,
      },
    }),
    sizes(),
    visualizer({
      emitFile: false,
      filename: "visualizations.html",
    }),
  ],
};