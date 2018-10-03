class MyFancyForm extends React.Component {
    static avaialbleOptions = ['apple', 'grape','cherry','orange','pear','peach']

    state={multiline: '', commaSeparated: ''}

    handleCommaSeparatedChange = event => {
        const {value} = event.target
        this.setState({
            commaSeparated: value,
            multiline: value.split(',').map(v=>v.trim()).filter(Boolean).join('\n')
        })
    }
    handleMultiLineChange = event => {
        const {value} = event.target
        this.setState({
            commaSeparated: value.split('\n').map(v=>v.trim()).filter(Boolean).join(','),
            multiline: value
        })
    }
    handleMultiSelectChange = event => {
        console.log('handleMultiSelectChanged')
    }

    render(){
        const {commaSeparated,multiline} = this.state
        return (
            <form>
                <div>
                    <label>
                        comma separated values:
                        <br />
                        <input
                            type = "text"
                            value={commaSeparated}
                            onChange={
                                this.handleCommaSeparatedChange
                            }
                            />
                    </label>
                </div>
                <div>
                    <label>
                            multiline values:
                            <br />
                            <textarea value={multiline}
                            rows={MyFancyForm.avaialbleOptions.length}
                            onChange={
                                this.handleMultiLineChange
                            }
                            />
                    </label>
                </div>
                <div>
                    <label>
                            multiselect values:
                    </label>
                </div>
            </form>
        )
    }
}

const element = <MyFancyForm/>
ReactDOM.render(
    element,
    document.getElementById('root')
)