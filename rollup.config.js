import postcss from "rollup-plugin-postcss";

export default {
  input: "lib/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    postcss({
      modules: true,
      extensions: [".css"],
    }),
  ],
};
