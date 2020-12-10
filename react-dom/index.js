const ReactDom = {
    render
}
function render (vnode,container) {
    if (vnode === undefined) return;
    if (typeof vnode === 'string') {
        const textNode = document.createTextNode(vnode);
        return container.appendChild(textNode)
    }
    //否则就是虚拟Dom对象
    const {tag,attrs} = vnode
    const dom = document.createElement(tag)
    if (attrs) {
        for(let key in attrs) {
            console.log(key)
            const value = attrs[key]
            setAttribute(dom,key,value)
        }
    }
    // 递归调用
    vnode.childrens.forEach(child=> render(child,dom))
    return container.appendChild(dom)

}
// 设置属性
function setAttribute(dom,key,value){
    if (key === 'className') {
        key = 'class'
    }
    if ( /on\w+/.test(key)) {
        key = key.toLowerCase()
        dom[key] = value || ''
    }else if ( key == 'style') {
        if (!value || typeof value === 'string') {
            dom.style.cssText = value || ''
        }else if (value && typeof value == 'object') {
            for ( let key in value ) {
                if ( typeof value[k] == 'number') {
                    dom.style[key] == value[key] + 'px'
                }else{
                    dom.style[k] = value[k]
                }
            }
        }
    }else{
        if ( key in dom) {
            dom[key] = value || ''
        }
        if (value) {
            dom.setAttribute(key,value)
        }else{
            dom.removeAttribute(key)
        }
    }

}
export default ReactDom