function SayHelloAsFunction(props){
    return (
        <div>
            Hello {firstName} {lastName}
        </div>
    )
}

SayHelloAsFunction.proptypes = {
    firstName: PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired,
}

class SayHelloAsClass extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName : PropTypes.string.isRequired,
    }
    render(){
        const {firstName,lastName} = this.props
        return(
            <div>
                Hello {props.firstName} {props.lastName}!
            </div>
        )
    }
}
