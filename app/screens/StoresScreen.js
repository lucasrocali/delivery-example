// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { } from '../store/auth/action'
import * as selectors from '../store/auth/selector';
import colors from '../constants/colors';
import styled from "styled-components";

import StoreCell from './components/StoreCell';

const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`;

const Text = styled.Text`
    font-size: 20
`;

const Header = styled.View` 
    padding-vertical: 10;
    padding-horizontal: 20;
    align-items: center;
    justify-content: center;
`

type State = {

}

type Props = {

}

class Stores extends Component<Props, State> {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    renderHeader() {
        return (
            <Header>
                <Text>Header</Text>
            </Header>
        )
    }

    renderItem() {
        return (
            <StoreCell
                onStorePress={() => console.log(' onStorePress')}
            />
        )
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={[1, 2]}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                />
            </Container>
        );
    }
}

export default connect(
    state => ({

    }),
    {}
)(Stores)