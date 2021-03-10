import path from "path";
import svelte from "rollup-plugin-svelte";
import preprocess from "svelte-preprocess";
import tsconfig from "./tsconfig.json";

const production = process.env.NODE_ENV === "production";

/* Here we get paths from tsconfig and convert it to Vite aliases */
function handlePath(p) {
  return path.resolve(__dirname, p).replace(/([\\/])\*$/, "");
}

const aliases = Object.entries(tsconfig.compilerOptions.paths);
const aliasConfig = {};

for (const [configAlias, configPaths] of aliases) {
  const wpAlias = configAlias.replace(/([\\/])\*$/, "");
  aliasConfig[wpAlias] = configPaths.map(handlePath);
}

export default {
  resolve: {
    alias: {
      ...aliasConfig,
      // Without line below, Svelte libraries throw error "Function called outside component initialization"
      svelte: path.resolve(__dirname, "node_modules/svelte"),
    },
  },
  plugins: [
    svelte({
      hot: !production,
      emitCss: production,
      preprocess: preprocess({
        typescript: true,
        postcss: true,
      }),
    }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
};
