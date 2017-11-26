import React, {Component} from "react";
import ReactQuill from "react-quill";
import { Container, Button, Table, Input } from "reactbulma";
import 'react-quill/dist/quill.snow.css';


var tableStyle = {
    padding: "0px"
};

var editorStyle = {
    padding: "3px"
};

export default class Formula extends Component {

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
            <Container style={tableStyle}>
            <script type={"text/javascript"} id={"WolframAlphaScriptc8e812b716d764690e3a1085ddd3635a"} src={"//www.wolframalpha.com/widget/widget.jsp?id=c8e812b716d764690e3a1085ddd3635a&theme=green"}></script>
            </Container>
        );

    }
}