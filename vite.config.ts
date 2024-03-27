import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src') // 路径别名
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ ElementPlusResolver() ],
            imports: [
                'vue',
                'vue-router',
                'pinia',
            ],
            dts: 'src/import.d.ts',
            eslintrc: {
                enabled: false,  // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
            }
        }),
        Components({
            resolvers: [ ElementPlusResolver({
                importStyle: 'sass', // 使用预处理样式
            }) ],
            dts: 'src/components.d.ts'
        }),
        // element 样式自动引入
        createStyleImportPlugin({
            resolves: [ ElementPlusResolve() ],
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `element-plus/theme-chalk/${name}.css`
                    },
                },
            ]
        }),
    ],
    build: {
        minify: 'terser', // 必须开启：使用terserOptions才有效果
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        },
    }
})
