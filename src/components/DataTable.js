import React, {Component} from "react";
import { Panel, Button, Table, Input } from "reactbulma";

var testColumns = [ "first", "second", "third" ];

var tableStyle = {
    padding: "0px"
};

var buttonStyle = {
    margin: "3px"
};

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: testColumns,
            rowValues: [
                ["a"],
                ["b"],
                ["c"]
            ]
        };

        this.handleColumnEdit = this.handleColumnEdit.bind(this);
        this.addColumn = this.addColumn.bind(this);
        this.addRow = this.addRow.bind(this);
        this.handleRowEdit = this.handleRowEdit.bind(this);
    }

    handleColumnEdit(index, event) {
        var ccolumns = this.state.columns.slice();
        ccolumns[index] = event.target.value;
        this.setState({
            columns: ccolumns,
            rowValues: this.state.rowValues
        });
    }

    addColumn() {
        var ccolumns = this.state.columns.slice();
        ccolumns.push("");

        var rrowValues = this.state.rowValues.slice();
        var noRows;
        if (rrowValues[0] === undefined) {
            noRows = 0;
        } else {
            noRows = rrowValues[0].length;
        }
        var newValuesCol = [];
        var i;
        for (i = 0; i < noRows; i++) {
            newValuesCol.push("");
        }

        rrowValues.push(newValuesCol);

        this.setState({
            columns: ccolumns,
            rowValues: rrowValues
        });
    }

    addRow() {
        var rrowValues = this.state.rowValues.slice();
        if (rrowValues === []) {
            this.state.columns.forEach((col, i) => {
                rrowValues.push([""]);
            });
        } else { 
            rrowValues.forEach((column, i) => { 
                console.log("Column: ", column);
                column.push("");
            });
        }
        console.log("rrowValues: ", rrowValues);
        console.log("rowValues: ", this.state.rowValues);
        this.setState({
            columns: this.state.columns,
            rowValues: rrowValues
        });
    }

    handleRowEdit(id, event) {
        var rrowValues = this.state.rowValues.slice();
        var indices = id.split(" ");
        console.log("Indices: ", indices);
        rrowValues[parseInt(indices[0])][parseInt(indices[1])] = event.target.value;
        this.setState({
            columns: this.state.columns,
            rowValues: rrowValues
        });
    }

    render() {
        return (
            <Panel style={tableStyle}>
                <Panel.Heading>
                    <Button primary outlined onClick={this.addRow} style={buttonStyle}>Add row</Button>
                    <Button primary outlined onClick={this.addColumn} style={buttonStyle}>Add column</Button>
                </Panel.Heading>
                <Panel.Block>
                    <TableRenderer columnNames={this.state.columns} 
                                   handleColumnEdit={this.handleColumnEdit} 
                                   handleRowEdit={this.handleRowEdit}
                                   rowValues={this.state.rowValues} 
                                   style={{width: "100%"}} />
                </Panel.Block>
            </Panel>
        );
    }
}

var TableRenderer = (props) => (
    <Table style={props.style}>
        <TableHeader columnNames={props.columnNames} handleColumnEdit={props.handleColumnEdit} />
        <TableBody rowValues={props.rowValues} handleRowEdit={props.handleRowEdit} />       
    </Table>
);

var TableHeader = (props) => (
    <Table.Head>
        <Table.Tr>
            {props.columnNames.map((columnName, i) => ( <Table.Th key={i}><Input value={columnName} onChange={props.handleColumnEdit.bind(this, i)}></Input></Table.Th> ))} 
        </Table.Tr>
    </Table.Head>
)

class TableBody extends Component {

    constructor(props) {
        super(props);
    }

    getNthRow(n) {
        var row = [];
        this.props.rowValues.forEach(function(column, i) {
            row.push(column[n]);
        });
        return row;
    }

    render() {
        var rowsToRender = [];
        var sampleColumn = this.props.rowValues[0];
        var noRows;
        if (sampleColumn === undefined) {
            noRows = 0;
        } else {
            noRows = sampleColumn.length;
        }
        var i;
        for (i = 0; i < noRows; i++) {
            rowsToRender.push(this.getNthRow(i));
        }
        console.log("Rows to render: ", rowsToRender);
        return (
            <Table.Body>
                {rowsToRender.map((row, j) => {
                    return (<TableRow keyValue={j} key={j} values={row} handleRowEdit={this.props.handleRowEdit}></TableRow>);
                })}
            </Table.Body>
        );
    }
}

var TableRow = (props) => (
    <Table.Tr key={props.keyValue}>
        {props.values.map((value, i) => ( <Table.Th key={i}><Input value={value} onChange={props.handleRowEdit.bind(this, i + " " + props.keyValue)}></Input></Table.Th> ))}
    </Table.Tr>
);