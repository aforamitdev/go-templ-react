import * as esbuild from 'esbuild';
import fs from 'fs';

const files = fs.readdirSync('../frontend/react').map((dir) => {
  return `./react/${dir}/index.ts`;
});

// const files = ['./react/one/index.ts', './react/two/index.ts'];
await esbuild
  .build({
    entryPoints: files,
    bundle: true,
    minify: true,
    outdir: '../static',
  })
  .then(() => console.log('⚡ Javascript build complete! ⚡'));
