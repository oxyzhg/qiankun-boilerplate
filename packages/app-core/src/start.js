import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:4001',
    container: '#container',
    activeRule: '/app1'
  },
  {
    name: 'app2',
    entry: '//localhost:4002',
    container: '#container',
    activeRule: '/app2'
  },
])

start()
