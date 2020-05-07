1. 路由发生变化，定时器、网络请求等异步操作要清除，否则可能会报错
    ```
    1、在Deom1中创建一个parent组件，在该组件中写一个定时计数的功能
    2、再创建一个Home组件
    3、使用路由进行切换
    问题：当切换到parent组件时，计数开始，突然改变路由到home页面，定时器不清除，就会报错
    处理：
    在parnet组件中，添加一个生命周期函数
    componentWillUnmount() {
        // 组件销毁前，清除定时器
        MyAPI.unsubscribe()
    }
    这样就能解决报错问题。
    ```
2. 关于渲染的问题（重新渲染的问题）
   两种方法：方法1:通过生命周期；方法2:通过react的PureComponent方法
   ```
   1、创建一个child组件，并在parent中引用
   2、把parent中定时计数的值传到chlid组件中
   这样child就会接收到一直变化的值，就会不断的渲染组件，但是如果传入的时一个定值，就不需要不断的渲染
   方法：通过shouldComponentUpdate
   在child组件中加入判断
   shouldComponentUpdate(nextProps, nextState) {
       if (nextProps.num === this.props.num) {
           return false
       }
       return true
   }
   ```
   ```
   通过react中的PureComponent
   PureComponent：可以对数据进行浅比较
   ```
3. fragment
   ```
   需求：一个组件中有一个ul，li是引入的
   Item如果不加一个外层标签，就会报错，添加外层标签，就不符合h5的标签结构
   class Item extends React.Component {
       render() {
           return (
               <div>
                    <li>item1</li>
                    <li>item2</li>
               </div>
           )
       }
   }
   export default class Demo2 extends React.Component{
       render() {
           return (
               <ul>
                <Item />
               </ul>
           )
       }
   }
   解决：通过react中的Fragment方法
   class Item extends React.Component {
       render() {
           return (
               <Fragment>
                    <li>item1</li>
                    <li>item2</li>
               </Fragment>
           )
       }
   }
   ```
4. contextType
5. 高阶组件
   ```
   1、是一个函数
   2、参数是一个组件
   3、返回值是一个组件
   ```
   详情见：Demo4
6. 高阶组件应用：
   ```
   需求：有两个以上的组件，视图基本一样，只是数据来源通过不同的网路请求
   1、新建一个高阶组件.jsx文件
   2、定义高阶组件
   const widthFetch = (url) => (View) => {

   }
   3、通过constructor初始化变量
   constructor() {
       super()
       this.state = {
           isLoding: true,
           data: null
       }
   }
   4、在componentDidMount生命周期中发送网路请求
   componentDidMount() {
       fetch(url)
       .then(res => res.json())
       .then(data => {
           this.setState({
               isLoding: false,
               data: data
           })
       })
   }
   5、渲染视图
   render() {
       if (this.state.isLoding) {
           return (
               <div>loding...</div>
           )
       }else {
           return (
               <View data={this.state.data}></View>
           )
       }
   }
   6、导出高阶组件
   export default widthFetch
   ```
   ```
   如何使用：
   1、引入高阶组件
   import WidthFetch from './widthFetch'
   2、定义方法：
   const User = WidthFetch('http://jsonplaceholder.typicode.com/users')(props => {
       return (
           <div>
                <p>UserList：{ props.data[0].name }</p>
           </div>
       )
   })
   3、导出
   export default User
   ```
7. 错误边界处理