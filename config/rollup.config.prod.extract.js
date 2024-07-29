import { terser } from "rollup-plugin-terser";
import sizes from "rollup-plugin-sizes";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { visualizer } from "rollup-plugin-visualizer";

import inputOutput from './services/input-output';
import bPlugins from './services/plugins';

const plugins = bPlugins(true);

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
    sizeSnapshot(),
    sizes(),
    visualizer({
      emitFile: false,
      filename: "visualizations.html",
    }),
  ],
};