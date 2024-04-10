module.exports = {
  apps: [
    {
      name: 'like-qq-login',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}