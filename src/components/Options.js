import React, {Component} from "react";
import { Container, Nav } from "reactbulma";
import { Button } from "reactbulma";
import AlertContainer from 'react-alert';

var containerStyle = {
    margin: "40px"
};

var navItemStyle = {
    paddingLeft: "10px",
    paddingRight: "10px"
};

let OptionButton = (props) => (
    <Button info large onClick={props.onClick}>
        {props.children}
    </Button>
);

export default class Options extends Component {

    constructor(props) {
        super(props);

        this.save = this.save.bind(this);
    }

    save() {
        this.msg.show("Note Saved!", {
            time: 3000,
            type: "success"
        });
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
                        <OptionButton onClick={this.props.addSearch}>Add Search</OptionButton>
                    </Nav.Item>
                    <Nav.Item style={navItemStyle}>
                        <Button large info outlined><a href={"https://www.onlineocr.net/"} target="_blank">OCR</a></Button>
                    </Nav.Item>
                    <Nav.Item style={navItemStyle}>
                        <Button large info outlined><a href={"https://www.tools4noobs.com/summarize/"} target="_blank">Summarize</a></Button>
                    </Nav.Item>
                        <Nav.Item>
                            <Button large primary onClick={this.save}>Save Note</Button>
                            <AlertContainer ref={a => this.msg = a}/>
                        </Nav.Item>
                    
                </Nav>
            </Container>
        );
    }
}