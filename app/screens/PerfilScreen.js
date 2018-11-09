// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../store/auth/action'
import * as authSelectors from '../store/auth/selector';
import styled from "styled-components";
import { Button } from './styled'
import ButtonIcon from './components/ButtonIcon'

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    font-size: 20
`;

type State = {

}

type Props = {

}

class Base extends Component<Props, State> {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    render() {
        const { user, logout, navigation } = this.props
        return (
            <Container>
                <Text>Perfil</Text>
                <Text>{`Hey, ${user.name}`}</Text>
                <ButtonIcon
                    text={'Logout'}
                    icon_name={'ios-person'}
                    onPress={() => {
                        logout()
                        navigation.goBack()
                    }}
                />
            </Container>
        );
    }
}

export default connect(
    state => ({
        loading: authSelectors.getLoadding(state),
        user: authSelectors.getUser(state)
    }),
    { logout }
)(Base)