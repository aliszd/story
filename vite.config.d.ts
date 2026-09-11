declare const _default: any;
export default _default;
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/persian-storybook/",
  plugins: [react()],
});
