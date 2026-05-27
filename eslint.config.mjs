import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "node_modules/**"]
  },
  ...compat.extends("next/core-web-vitals")
];

export default eslintConfig;
