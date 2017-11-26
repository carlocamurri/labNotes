import React, {Component} from "react";
import ReactQuill from "react-quill";
import { Panel, Container, Heading, Button, Table, Input } from "reactbulma";


var tableStyle = {
    padding: "0px"
};

var editorStyle = {
    padding: "3px"
};

var data = [
    {
        title: "Proline",
        link: "https://www.wolframalpha.com/input/?i=proline"
    },
    {
        title: "Kinetic Energy",
        link: "https://www.wolframalpha.com/input/?i=kinetic+energy"
    },
    {
        title: "Mutagenesis",
        link: "https://www.wolframalpha.com/input/?i=mutagenesis"
    },
    {
        title: "Molarity Calculator",
        link: "https://www.wolframalpha.com/input/?i=molarity+calculator"
    },
    {
        title: "Molarity",
        link: "https://www.wolframalpha.com/input/?i=molarity" 
    }
];

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { search: '' }; // You can also pass a Quill Delta here
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        let filteredData = data.filter(item => {
            return (
              item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            );
        });

        const listNames = filteredData.map((item, i) => (
            <li key={i} style={{padding: "5px"}}><a href={item.link} target="_blank">{item.title}</a></li>
        ));

        var firstThreeItems = listNames.slice(0, 3);

        if (this.state.search === "") {
            firstThreeItems = [];
        }

        return (
            <Panel style={tableStyle}>
                <Panel.Heading>
                    <Heading>Search in Wolfram Alpha</Heading>
                </Panel.Heading>
                <Panel.Block>
                    <Input placeholder="Insert topic" value={this.state.search} onChange={this.updateSearch.bind(this)}></Input>
                </Panel.Block>
                <Panel.Block>
                    <ul>
                        {firstThreeItems}
                    </ul>
                </Panel.Block>
            </Panel>

        );

    }
}