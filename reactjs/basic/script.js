const rootElement = document.getElementById('root')
// const element = React.createElement('h3',{
//     className : 'container',
//     children  : ['Hello World.', 'Goodbye world.']
// })
const props = {
    className : 'container',
    children  : 'Hello World'
}
const element = <div{...props} />

ReactDOM.render(element,rootElement)