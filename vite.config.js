import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import { resolve } from "path";

const { name } = require('./package');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue(), qiankun('vue3Vite', { useDevMode: false })],
    resolve: {
      extensions: ['.js', 'ts', '.vue', '.json'],
        alias: {
          '@': resolve('src'),
        },
      },
    server: {
      host: '0.0.0.0',
      port: 9080,
      cors: true,
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    define: {
      'process.env': env
    }
  }
})
