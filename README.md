平常在进行业务开发时遇到的常用组件问题

这里都以ts的形式积累下来

### FullPage组件
详情可参考https://alvarotrigo.com/fullPage/#page1
这里自己手写撸了一个 
使用方法如下

```tsx
import HomePage from "./pages/homepage";
import Blog from "./pages/blog";
import Resume from "./pages/resume";
import Fullpage from "./components/fullpage";

const App: React.FC = () => {
  return (
    <>
      <Fullpage tips={['主页', '个人博客', '我的简历']} navColor="black" color="black">
        <HomePage />
        <Blog />
        <Resume />
      </Fullpage>
    </>
  );
};

export default App;
```

tips为悬浮nav时的文字提示
navColor为导航的颜色
color为颜色
目前提供的接口就这么多 这个组件主要用于个人博客开发或者官网信息展示