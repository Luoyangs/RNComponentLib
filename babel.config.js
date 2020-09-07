module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // Local plugin module alias support
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/constants': './src/constants',
          '@/components': './src/components',
          '@/utils': './src/utils',
          '@/examples': './examples',
          '@/public': './public',
        },
      },
    ],
  ],
};
