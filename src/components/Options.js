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
    <Button primary outlined large onClick={props.onClick}>
        {props.children}
    </Button>
);

export default class Options extends Component {

    buttonClicked() {
        console.log("Button clicked");
    }

    render() {
        return (
            <Container is-fluid style={containerStyle}>
                <Nav>
                    <Nav.Item style={navItemStyle}>
                        <OptionButton onClick={this.buttonClicked}>Add Text Cell</OptionButton>
                    </Nav.Item>
                    <Nav.Item style={navItemStyle}>
                        <OptionButton>Add Table Cell</OptionButton>
                    </Nav.Item>
                </Nav>
            </Container>
        );
    }
}