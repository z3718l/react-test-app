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
4. contextType