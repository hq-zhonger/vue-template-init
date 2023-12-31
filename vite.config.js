import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {  createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path"
import * as path from "path";

export default defineConfig({
  envDir : "./vite_env",
  plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs : [path.resolve(process.cwd(),'src/icons/svg')],
      symbolId : 'icon-[dir]-[name]'
    }
  )],

  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, "src"),
    }
  },
})
