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
1. setState会引起视图重绘
2. 在可控的情况下是异步，在非可控的情况下是同步

