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



