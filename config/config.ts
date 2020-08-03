import { IConfig, IPlugin } from 'umi-types';
import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
import proxy from './proxy';
import webpackPlugin from './plugin.config';
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

console.log('process.env;', process.env);
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV, NODE_ENV } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
console.log('process.env;11', REACT_APP_ENV);
console.log('process.env;11', isAntDesignProPreview);
console.log('process.env;12', NODE_ENV); //development

const plugins: IPlugin[] = [
  ['umi-plugin-antd-icon-config', {}],
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: 'testModule',
              icon: 'setting',
              path: '/testModule',
              routes: [
                {
                  path: '/testModule/demo1',
                  name: 'demo1',
                  title: 'demo1',
                  icon: 'user',
                  component: './testModule/demo1',
                },
                {
                  path: '/testModule/demo2',
                  name: 'demo2',
                  title: 'demo2',
                  icon: 'user',
                  component: './testModule/demo2',
                },
                {
                  path: '/testModule/demo3',
                  name: 'demo3',
                  title: 'demo3',
                  icon: 'user',
                  component: './testModule/demo3',
                },
                {
                  path: '/testModule/demo4',
                  name: 'demo4',
                  title: 'demo4',
                  icon: 'user',
                  component: './testModule/demo4',
                },
                {
                  path: '/testModule/demo5',
                  name: 'demo5',
                  title: 'demo5',
                  icon: 'user',
                  component: './testModule/demo5',
                },
                {
                  path: '/testModule/demo6',
                  name: 'demo6',
                  title: 'demo6',
                  icon: 'user',
                  component: './testModule/demo6',
                },
                {
                  path: '/testModule/demo7',
                  name: 'demo7',
                  title: 'demo7',
                  icon: 'user',
                  component: './testModule/demo7',
                },
                {
                  path: '/testModule/demo8',
                  name: 'demo8',
                  title: 'demo8',
                  icon: 'user',
                  component: './testModule/demo8',
                },
                {
                  path: '/testModule/demo9',
                  name: 'demo9',
                  title: 'demo9',
                  icon: 'user',
                  component: './testModule/demo9',
                },
                {
                  path: '/testModule/demo10',
                  name: 'demo10',
                  title: 'demo10',
                  icon: 'user',
                  component: './testModule/demo10',
                },
                {
                  path: '/testModule/demo11',
                  name: 'demo11',
                  title: 'demo11',
                  icon: 'user',
                  component: './testModule/demo11',
                },
                {
                  path: '/testModule/demo12',
                  name: 'demo12',
                  title: 'demo12',
                  icon: 'user',
                  component: './testModule/demo12',
                },
                {
                  path: '/testModule/demo13',
                  name: 'demo13',
                  title: 'demo13',
                  icon: 'user',
                  component: './testModule/demo13',
                },
                {
                  path: '/testModule/demo14',
                  name: 'demo14',
                  title: 'demo14',
                  icon: 'user',
                  component: './testModule/demo14',
                },
                {
                  path: '/testModule/demo15',
                  name: 'demo15',
                  title: 'demo15',
                  icon: 'user',
                  component: './testModule/demo15',
                },
                {
                  path: '/testModule/demo16',
                  name: 'demo16',
                  title: 'demo16',
                  icon: 'user',
                  component: './testModule/demo16',
                },
              ],
            },
            {
              path: '/train',
              name: 'train',
              icon: 'profile',
              routes: [
                {
                  path: '/train/list',
                  name: 'trainList',
                  component: './train/List',
                },
              ],
            },
            {
              name: '个人中心',
              icon: 'smile',
              path: '/accountcenter',
              component: './AccountCenter',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  chainWebpack: webpackPlugin,
} as IConfig;
