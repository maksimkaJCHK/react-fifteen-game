import paths from './paths';

const inputOutput = {
  input: [`${paths.src}/Main.js`],
  output: {
    file: `${paths.build}/main.js`,
    name: 'main',
    format: 'iife',
    chunkFileNames() {
      return 'common.js'
    }
  },
}

export default inputOutput;