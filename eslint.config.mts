import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import {Linter} from "eslint";
import ProcessorFile = Linter.ProcessorFile;
import LintMessage = Linter.LintMessage;
import LintMessage = Linter.LintMessage;

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
]);

// 配置对象全解

defineConfig([
    {
        ignores: [] // 当前配置对象中仅有ignore一个配置，则此忽略为全局忽略。，下方所有配置对象都会继承
    },
    {
        /**
         * @description 用于配置对象的名称。这用于错误信息和配置检查器 ，帮助识别正在使用的配置对象
         * @命令规范 名称应描述配置对象的用途，并用 / 作为分隔符与配置名称或插件名称进行范围划分。ESLint 在运行时不强制名称唯一，但建议设置唯一名称以避免混淆。
         * */
        name: "eslint",

        /**
         * @description 一个字符串，指定配置对象应应用到的子目录路径。它可以是相对的，也可以是绝对的路径。
         * */
        basePath: "eslint",

        /**
         * @glob 支持glob
         * @description 表示配置对象应应用的文件。
         * 如果未指定，配置对象将适用于所有与其他配置对象匹配的文件。
         * 没有 files 就是“全局配置”
         * 有 files 就是“局部配置”
         * */
        files: ["*.js"],

        /**
         * @glob
         * @description 表示配置对象不应应用的文件。
         * 如果未指定，配置对象将应用到所有与文件匹配的文件。
         * 如果在配置对象中没有其他键，则这些模式作为全局忽略，并应用到每个配置对象
         * */
        ignores: [],

        /**
         * @description 包含额外配置的字符串、配置对象或配置数组的数组
         * 继承其他 ESLint 配置文件里的规则
         * */
        extends: [], // TODO 内部配置对象有哪些内容？

        /**
         *@description javascript语言相关配置对象 */
        languageOptions: {
            ecmaVersion: 'latest', // 支持的ECMAScript版本，
            sourceType: "module", // JavaScript 源代码的类型。可能的值包括传统脚本文件的 “script”、ECMAScript 模块（ESM）的 “module”，以及 CommonJS 文件的 “commonjs”。（默认：.js 和 .mjs 文件的 “module”;“commonjs” 用于 .cjs 文件
            globals: { //指定在 linting 期间应添加到全局范围的额外对象的对象。告诉 ESLint：这些变量是全局变量，不要报“未定义”错误，并可设置它们是否可写。
                meta2d: "writable",
            },
            parser:{ // 包含parse（）方法或parseForESLint（）方法的对象。(默认值:espree) parser 的作用 = 更换引擎
                parse(){
                },
                parseForESLint(){}
            },
            parserOptions:{ //一个指定额外选项的对象，这些选项直接传递给解析器上的 parse（） 或 parseForESLint（） 方法。可用的选项依赖于解析器， 解析器的“配置项”

            }
        },

        /**
         * @description*/
        linterOptions:{
            noInlineConfig: true, // 是否允许代码文件内内联配置？只允许在 ESLint 配置文件里设定规则，而不允许程序员在代码里绕过 ESLint。
            reportUnusedDisableDirectives: true, // 检查是否存在“无效/不必要的 eslint-disable 注释” 只检查 eslint-disable 相关指令
            reportUnusedInlineConfigs: "warn", //用于检测代码中 未被使用的内联 ESLint 配置指令 检查所有内联配置，包括 eslint-disable, eslint-enable, eslint <rule>
        },

        /**
         *@description 包含预处理（） 和后处理（） 方法的对象，或表示插件内部处理器名称的字符串（如 “pluginName/processorName”）。
         *  */
        processor: { //一个包含preprocess（）和postprocess（）方法的对象，或者一个表示插件内部处理器名称的字符串
            preprocess(text: string, filename: string): (string | ProcessorFile)[] {
                return ''
            },
            postprocess(messages: LintMessage[][], filename: string): LintMessage[] {
                return ''
            }
        },
        plugins:{ // 插件本身不启用规则，只提供规则列表

        },
        rules:{ // 启用/禁用具体规则

        }
    }])