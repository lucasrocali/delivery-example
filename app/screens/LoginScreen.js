// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../store/auth/action'
import * as authSelectors from '../store/auth/selector';
import styled from "styled-components";
import { Button } from './styled'

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    font-size: 20
`;

const InputText = styled.TextInput`
    width: 90%;
    height: 40;
    border-color: gray;
    border-width: 1;
    border-radius: 20;
    margin-vertical: 5;
`

type State = {

}

type Props = {

}
class Base extends Component<Props, State> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const { login } = this.props
        const { email, password } = this.state
        return (
            <Container>
                <InputText
                    onChangeText={(text) => this.setState({ email: text })}
                    value={email}
                />
                <InputText
                    onChangeText={(text) => this.setState({ password: text })}
                    value={password}
                />
                <Button
                    onPress={() => login(email, password)}
                >
                    <Text>Login</Text>
                </Button>
            </Container>
        );
    }
}

export default connect(
    state => ({

    }),
    { login }
)(Base)