import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, {
  VantResolve
} from 'vite-plugin-style-import';
import Unocss from 'unocss/vite'
import {
  presetUno
} from 'unocss'
export default defineConfig({
  plugins: [
    vue(), Unocss({
      presets: [
        presetUno(),
      ],
    }),
    styleImport({
      resolves: [VantResolve()]
    }),
  ],
})