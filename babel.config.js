const isDev = process.env.NODE_ENV === 'development'

const plugins = () => {
  const config = ['@loadable/babel-plugin']

  if (isDev) config.push('react-refresh/babel')

  return config
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { debug: false, useBuiltIns: 'usage', corejs: '3.12' }
    ],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: plugins()
}
