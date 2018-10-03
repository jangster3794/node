const rootElement = document.getElementById('root')
function tick(){
    const time = new Date().toLocaleTimeString()
    const element = <h3>It is <input value={time}/> </h3>
    ReactDOM.render(element,rootElement)
}
tick()
setInterval(tick,1000)