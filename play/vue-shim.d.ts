// 第2种 使用函数返回值类型
// defineComponent函数的返回值类型本身是包含install属性的，这种做法更直观且更贴合组件本身的类型
// 个人更推荐这种
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}