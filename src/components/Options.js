import React, {Component} from "react";
import { Container, Nav } from "reactbulma";
import { Button } from "reactbulma";

var containerStyle = {
    margin: "40px"
};

var navItemStyle = {
    paddingLeft: "10px",
    paddingRight: "10px"
};

let OptionButton = (props) => (
    <Button primary large onClick={props.onClick}>
        {props.children}
    </Button>
);

export default class Options extends Component {

    buttonClicked() {
        console.log("Button clicked");
    }

    render() {
        return (
            <Container is-fluid="true" style={containerStyle}>
                <Nav>
                    <Nav.Item style={navItemStyle}>
                        <OptionButton onClick={this.props.addEditor}>Add Text Cell</OptionButton>
                    </Nav.Item>
                    <Nav.Item style={navItemStyle}>
                        <OptionButton onClick={this.props.addTable}>Add Table Cell</OptionButton>
                    </Nav.Item>
                    <Nav.Item style={navItemStyle}>
                        <OptionButton onClick={this.props.addFormula}>Add Formula</OptionButton>
                    </Nav.Item>
                </Nav>
            </Container>
        );
    }
}