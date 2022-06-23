module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    "module:react-native-expand-dotenv"
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '@assets/',
            rootPathSuffix: 'src/assets',
          },
          {
            rootPathPrefix: '@components/',
            rootPathSuffix: 'src/components',
          },
          {
            rootPathPrefix: '@config/',
            rootPathSuffix: 'src/config',
          },
          {
            rootPathPrefix: '@constants/',
            rootPathSuffix: 'src/constants',
          },
          {
            rootPathPrefix: '@modals/',
            rootPathSuffix: 'src/modals',
          },
          {
            rootPathPrefix: '@routes/',
            rootPathSuffix: 'src/routes',
          },
          {
            rootPathPrefix: '@screens/',
            rootPathSuffix: 'src/screens',
          },
          {
            rootPathPrefix: '@store/',
            rootPathSuffix: 'src/store',
          },
          {
            rootPathPrefix: '@utils/',
            rootPathSuffix: 'src/utils',
          },
        ],
      },
    ],
  ],
};
