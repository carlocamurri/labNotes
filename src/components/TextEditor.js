import React, {Component} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default class TextEditor extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' }; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(value) {
        this.setState({ text: value });
    }
     
    render() {
        return (
            <ReactQuill value={this.state.text}
                onChange={this.handleChange} />
        );
    }
}