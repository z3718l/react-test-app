## 创建React项目
npx create-react-app app-react-demo<br/>
cd app-react-demo<br/>
npm run start / npm start<br/>
注意：运行环境 node>=8.1.0

## 环境介绍
node_nodules：包文件<br/>
public：入口文件<br/>
src：源码文件夹  

## React基础知识
### jsx语法介绍
jsx语法：JavaScript + XML语法（HTML）<br/>
解读jsx语法：遇到<>按照HTML语法解析，遇到{}按照javascript解析

### 元素渲染

### 组件
组件的后缀可以是js，也可以是jsx<br/>
一个React项目由成千上万个组件组成的

### props属性
组件的复用性很重要

### 事件处理
1、this问题<br/>
2、向事件处理程序传递参数

### State
修改state中的值需要用setState({})

### 生命周期
随着对react理解和使用越来越多，生命周期的参考价值越来越多<br/>
    1. componentWillMount:在组件渲染之前执行(组件将要挂载式触发)<br/>
    2. componentDidMount:在组件渲染之后执行(组件挂载完成)<br/>
    3. shouldComponentUpdate:返回true、false；true代表允许改变、false代表不允许改变<br/>
    4. componentWillUpdate:数据在改变之前执行（state、props）<br/>
    5. componentDidUpdate:数据修改完成执行（state、props）<br/>
    6. componentWillReveiceProps:props发生改变时代执行<br/>
    7. componentWillUnmount:组件卸载之前执行

### setState更新是同步还是异步
1. setState会引起视图重绘<br/>
2. 在可控的情况下是异步，在非可控的情况下是同步

### 条件渲染
1. 对视图条件进行切换<br/>
2. 做缺省值

### key
为什么要加key<br/>
1. key是索引<br/>
2. 渲染会引起重绘，有了key，就会值渲染key不相同的或者之前没有的，之前有的就不会渲染<br/>
3. 可以提高性能

### 表单
1. 受控组件<br/>
2. 非受控组件

### Refs and the DOM
适合使用Refs的情况<br/>
1. 管理焦点，文本选择或媒体播放。<br/>
2. 触发强制动画。<br/>
3. 集成第三方 DOM 库。<br/>
注意：勿过度使用 Refs

### 非受控组件
如果表单的change事件比较多，这样需要写很多获取value的事件

### 状态提升
将子元素的公用的数据提到父元素，再传递给子元素

### 组合和继承
this.props.children

### 通过yarn run eject/npm run eject调出来webpack配置

### 跨域问题解决
https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md<br/>
1. 在package.json中进行配置
   "proxy": "http://localhost:4000", // 跨域的地址
2. 通过http-proxy-middleware插件
    ```
    npm install http-proxy-middleware --save
    在src文件夹下新建setupProxy.js
    const { createProxyMiddleware } = require('http-proxy-middleware');
    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware({
            target: 'http://localhost:5000', // 跨域的地址
            changeOrigin: true,
            })
        )
    }
    文件需要export导出，参数需要return出去
    ```


### 路由

### history路由和hash路由

### exact精准匹配路由

### strict 配合exact更加精准匹配路由

### 404页面配置
```
<Router>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link exact to="/mine">Mine</Link></li>
    </ul>
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/mine">
            <Mine />
        </Route>
        <Route>
            <NotFount />
        </Route>
    </Switch>
</Router>

<Route path="/mine" coponent={ Mine }></Route>
```

### NavLink高亮显示选中项
```
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>

<NavLink exact to="/profile">
  Profile
</NavLink>

<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>
```

### 路由跳转携带参数

### 读取参数
```
const params = new URLSearchParams(props.location.search)
console.log(params.get('name'))
console.log(params.get('age'))

import querystring from 'querystring'
const value = querystring.parse(props.location.search)
```

### redirect重定向
```
<Redirect from='/hellomine' to='/mine' /> 
访问hellomine的时候，重定向到mine页面
还可以用于用户访问权限，如果没有访问权限，直接调转到首页，如果有访问权限，就显示当前页
```

### push、replace进行重定向
```
props.history.push('/home') // push在内存中还存在
props.history.replace('/home') // replace直接替换
```

### widthRouter高阶组件进行重定向
由于没有被路由直接管理，获取不到对应的路由数据
是高阶组件

### prompt
导航离开之前，可以添加一个判断警告

### 路由嵌套
```
<Book>
    <Switch>
        <Route path="/book/webbook" component={WebBook}/>
        <Route path="/book/javabook" component={JavaBook}/>
    </Switch>
</Book>

在book组件中显示
{this.props.children}
```
