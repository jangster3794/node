const rootElement = document.getElementById('root')
const element = React.createElement('h3',{
    className : 'container',
    children  : ['Hello World.', 'Goodbye world.']
})

ReactDOM.render(element,rootElement)