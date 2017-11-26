import React, {Component} from "react";
import { Container } from "reactbulma";

import Options from "../../components/Options";
import TextEditor from "../../components/TextEditor";
import DataTable from "../../components/DataTable";
import Search from "../../components/Search";

export default class Cells extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: []
        };

        this.addTextEditor = this.addTextEditor.bind(this);
        this.addDataTable = this.addDataTable.bind(this);
        this.addSearch = this.addSearch.bind(this);
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

    addSearch() {
        var ccells = this.state.cells;
        ccells.push(Search);
        this.setState({cells: ccells});
    }

    render() { 
        return (
            <Container is-fluid="true">
                <Options addEditor={this.addTextEditor} addTable={this.addDataTable} addSearch={this.addSearch}/>
                {this.state.cells.map((Component, i) => <Component key={i} />)}
            </Container>
        );
    }
}