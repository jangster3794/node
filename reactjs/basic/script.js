class NameForm extends React.Component {
    handleSubmit = event =>{
        event.preventDefault()
        console.log(event.target[0].value)
    }
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const element = <NameForm/>
ReactDOM.render(
    element,
    document.getElementById('root')
)