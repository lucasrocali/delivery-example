// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { loadStores } from '../store/stores/action'
import * as storesSelector from '../store/stores/selector';
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

    componentWillMount() {
        const { loadStores } = this.props
        loadStores()
    }

    renderHeader() {
        return (
            <Header>
                <Text>Lojas</Text>
            </Header>
        )
    }

    renderItem({ item: store }) {
        return (
            <StoreCell
                store={store}
                onStorePress={() => console.log(' onStorePress')}
            />
        )
    }

    render() {
        const { stores } = this.props
        console.log('STORES SCREEN render', stores)
        return (
            <Container>
                <FlatList
                    data={stores}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                />
            </Container>
        );
    }
}

export default connect(
    state => ({
        loading: storesSelector.getLoading(state),
        stores: storesSelector.getStores(state)
    }),
    { loadStores }
)(Stores)