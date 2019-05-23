import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

var banner =
  "//  Morphling v" +
  pkg.version +
  "\n" +
  "//  https://github.com/morphling\n" +
  "//  (c) 2013-" +
  new Date().getFullYear() +
  " Fahmi irsyad khairi\n" +
  "// Morphling may be freely distributed under the MIT license.\n";

export default [
  // browser-friendly UMD build
  {
    input: "source/main.js",
    output: {
      name: "morphling",
      file: pkg.browser,
      format: "umd",
      banner: banner,
      exports: "named"
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "source/main.js",
    external: ["ms"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
];
