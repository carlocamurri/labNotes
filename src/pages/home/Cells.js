import React, {Component} from "react";
import { Container } from "reactbulma";

import Options from "../../components/Options";
import TextEditor from "../../components/TextEditor";
import DataTable from "../../components/DataTable";
import Formula from "../../components/Formula";

export default class Cells extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: []
        };

        this.addTextEditor = this.addTextEditor.bind(this);
        this.addDataTable = this.addDataTable.bind(this);
        this.addFormula = this.addFormula.bind(this);
    }
     
    addTextEditor() {
        var ccells = this.state.cells;
        ccells.push(TextEditor);
        this.setState({cells: ccells});
    }

    addDataTable() {
        var ccells = this.state.cells;
        ccells.push(DataTable);
        this.setState({cells: ccells});
    }

    addFormula() {
        var ccells = this.state.cells;
        ccells.push(Formula);
        this.setState({cells: ccells});
    }


    render() { 
        return (
            <Container is-fluid="true">
                <Options addEditor={this.addTextEditor} addTable={this.addDataTable} addFormula={this.addFormula}/>
                {this.state.cells.map((Component, i) => <Component key={i} />)}
            </Container>
        );
    }
}