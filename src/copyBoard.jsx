import React from 'react'
import copy from "copy-to-clipboard";
export class CopyBoard extends React.Component {
    constructor() {
        super()
        this.state = {
            textToCopy: "Copy to Clipboard Demo!",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.Copytext = this.Copytext.bind(this);
    }
    handleInputChange (e) {
        this.setState({
            textToCopy: e.target.value
        })
    }
    Copytext() {
        copy(this.state.textToCopy)
    }
    render() {
        // const { textToCopy, btnText } = this.state;
        return (
            <div>
                <div>Copy to Clipboard Demo </div>
                <div>
                <textarea className="form-control" placeholder="Enter Text" onChange={this.handleInputChange} />
                <div>
                    <button onClick={ this.Copytext }>Click Copy to Clipboard</button>
                </div>
                </div>
            </div>
        )
    }
}
export default CopyBoard 