平常在进行业务开发时遇到的常用组件问题

这里都以ts的形式积累下来

### FullPage组件
详情可参考https://alvarotrigo.com/fullPage/#page1
这里自己手写撸了一个 
使用方法如下

```tsx
import React from 'react'
import Login from '../Login';
import Blog from '../blog';
import Resume from '../resume';
import Fullpage from '../../components/fullpage';

const Home: React.FC = () => {
    return (
      <Fullpage
        routes={["home", "blog", "resume"]}
        tips={["主页", "个人博客", "我的简历"]}
        navColor="black"
        color="black"
      >
        <Login />
        <Blog />
        <Resume />
      </Fullpage>
    );
}

export default Home
```

这里定义的interface为
```tsx
interface FullpageProps {
  routes: string[]; // 规定的url地址
  tips?: string[]; // tips为悬浮nav时的文字提示
  color?: string; // color为tips的文字颜色
  navColor?: string; // navColor为导航的颜色
}
```
目前提供的接口就这么多 这个组件可用于个人博客开发或者官网信息展示
与fullPage官网提供的组件有什么不同？
+ 基本样式与效果与fullPage无差异 所以不用去研究他那些繁多的API 开箱即用
+ 修改url 可以看到 alvarotrigo.com/fullPage/#page1 fullpage对于url的定向是通过锚点来的 非常之丑，而本组件采用Js原生的replaceState写法去掉了锚点