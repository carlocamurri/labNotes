import React, {Component} from "react";
import { Container } from "reactbulma";

import TextEditor from "../../components/TextEditor";
import Options from "../../components/Options";
import Cells from "./Cells";
import Example from "../../components/DataGrid";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Container is-fluid="true">
                <Cells />
                <Example />
            </Container>
        );
    }
}
