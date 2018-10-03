class StopWatch extends React.Component {
    state = {lapse: 0, running: false}
    handleRunClick = () => {
        this.setState(state => {
            if (state.running){
                clearInterval(this.timer)
            }
            else{
                const startTime = Date.now() - this.state.lapse                
                this.timer = setInterval(()=>{
                    this.setState({
                        lapse:Date.now() - startTime
                    })
                })
            }
            return {running: !state.running}
        })
    }
    handleClearClick = () => {
        console.log('Clicked.')
        clearInterval(this.timer)
        this.setState({lapse:0,running:false})
    }
    compnentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        const {lapse, running} = this.state
            return (
                <div>
                    <label>{lapse}ms</label>
                    <button onClick ={this.handleRunClick} >{running ? 'Stop' : 'Start'}</button>
                    <button onClick ={this.handleClearClick} >Clear</button>
                </div>
            )
    }
}

const element = <StopWatch/>
ReactDOM.render(
    element,
    document.getElementById('root')
)