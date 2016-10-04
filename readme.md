# Scripts

### 服务器支持的选项
nodemon bin/server

--noServerRendering 关闭服务端渲染，启用服务端路径匹配，如果组件内有错误会阻塞服务启动
--noServerRouting 关闭服务端路径匹配，此时服务端渲染也会关闭，组件内错误不会影响服务端，前端使用 hash routing
--hot 开启实时更新前端资源

### 需要的几种模式
- 前端，热重载 - fe:hot
- 前端，无热重载，文件写入式（开发，生产）- fe
- 服务端 API 开发（不响应前端文件修改）- server:api
- 服务端渲染调试（开启服务端渲染，开发模式，关闭热重载，响应文件修改）- server:dev server
- 服务端生产（开启服务端渲染，生产模式，关闭热重载，响应文件修改）- server:prod

### pres
- 全局 css - build:globalStyles
- dll - build:dll
- node - build:node
- 资源压缩/拷贝 - copy:assets
- 资源监听 - watch:<name>