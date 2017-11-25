import React, {Component} from "react";
import { Container } from "reactbulma";

import Options from "../../components/Options";
import TextEditor from "../../components/TextEditor";

export default class Cells extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: []
        };

        this.addTextEditor = this.addTextEditor.bind(this);
    }
     
    addTextEditor() {
        var ccells = this.state.cells;
        ccells.push(TextEditor);
        this.setState({cells: ccells});
    }

    render() { 
        return (
            <Container is-fluid="true">
                <Options addEditor={this.addTextEditor}/>
                {this.state.cells.map((Component, i) => <Component key={i} />)}
            </Container>
        );
    }
}