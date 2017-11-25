import update from 'immutability-helper';
import { Button } from "reactbulma";

const ReactDataGrid = require('react-data-grid');
const React = require('react');


class Example extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                width: 80
            },
            {
                key: 'task',
                name: 'Title',
                editable: true,
            },
            {
                key: 'priority',
                name: 'Priority',
                editable: true,
            }
        ];
        this.addRow = this.addRow.bind(this);
        this.addColumn = this.addColumn.bind(this);
        this.state = { rows: this.createRows(2),
                        columns:this._columns};
    }

    getRandomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    };

    createRows = (numberOfRows) => {
        let rows = [];
        for (let i = 1; i < numberOfRows; i++) {
            rows.push({
                id: i,
                task: 'Task ' + i,
                complete: Math.min(100, Math.round(Math.random() * 110))
            });
        }
        return rows;
    };

    rowGetter = (i) => {
        return this.state.rows[i];
    };

    handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        let rows = this.state.rows.slice();

        for (let i = fromRow; i <= toRow; i++) {
            let rowToUpdate = rows[i];
            let updatedRow = update(rowToUpdate, {$merge: updated});
            rows[i] = updatedRow;
        }

        this.setState({ rows });
    };

    addRow(){
        let rowsCurrent = this.state.rows;
        rowsCurrent.push({ id:"",task:"",complete:""})
        this.setState({ rows: rowsCurrent});
    }
    addColumn(){
        let colsCurrent = this.state.columns;
        colsCurrent.push({  key: 'id',
                            name: 'ID',
                            width: 80})
        console.log(colsCurrent)
        this.setState({ columns: colsCurrent});
        this.forceUpdate()
    }


    render() {
        return  (
            <div>
            <ReactDataGrid
                enableCellSelect={true}
                columns={this.state.columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight={500}
                onGridRowsUpdated={this.handleGridRowsUpdated}/>


            <Button onClick={this.addRow}>
            Add Row
             </Button>
                <Button onClick={this.addColumn}>
                    Add column
                </Button>
            </div>


    );
    }
}
export default Example