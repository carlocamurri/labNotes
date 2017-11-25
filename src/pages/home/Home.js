import React, {Component} from "react";
import { Container } from "reactbulma";

import TextEditor from "../../components/TextEditor";
import Options from "../../components/Options";
import Cells from "./Cells";

export default class Home extends Component {

    render() {
        return (
            <Container is-fluid>
                <Options />
                <Cells />
            </Container>
        );
    }
}
