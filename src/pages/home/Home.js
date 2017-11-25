import React, {Component} from "react";
import { Container } from "reactbulma";

import TextEditor from "../../components/TextEditor";
import Options from "../../components/Options";
import Cells from "./Cells";
import Example from "../../components/DataGrid";

export default class Home extends Component {

    render() {
        return (
            <Container is-fluid>

                <Options />
                <TextEditor/>
                <Cells />
                <Example />
            </Container>
        );
    }
}
