
interface Matrix {
    a:number,
    b:number,
    c:number,
    d:number,
    e:number,
    f:number,
    g:number,
}

interface BaseContext {
    transform: Matrix[],
}

interface PageContext {
    transform:Matrix[], // 页面变换矩阵
    userData: any, // 用户自定义数据
    color:string, // 画笔颜色
    shapes: BaseContext[] // 页面子形状
    width:number, // 页面宽度
    height:number, // 页面高度
    background:string // 背景颜色,
}

interface ShapeContext {

}