import React from 'react';
import { Image } from 'react-native';
import styled from "styled-components";
import { } from '../styled/index'
import colors from '../../constants/colors';

const Container = styled.TouchableOpacity`
    padding-vertical: 20;
    padding-horizontal: 20;
    border-radius: 5;
    border-color: ${colors.light_gray};
    border-width: 1;
`;

// const Image = styled.Image`
//     flex: 1;
//     height: 200;
//     border-radius: 5;
//     background-color: ${colors.light_gray};
// `

const Text = styled.Text`
    font-size: 20
`;

const Title = styled.Text` 
    font-size: 20;
    color: ${colors.dar_gray}
    margin-vertical: 5;
`

const Footer = styled.View`
    flex-direction: row;
`

const PhoneNumberView = styled.View`
    flex: 1;
    padding-vertical: 5;
    padding-horizontal: 5;
`

const EstimationView = styled.View` 
    flex: 1;
    padding-vertical: 5;
    padding-horizontal: 5;
    align-items: flex-end;
`

type Store = {
    id: string,
    name: string,
    img_url: string,
    phone_number: string,
    delivery_estimation: string
}

type Props = {
    store: Store,
    onStorePress: Function
}
export default StoreCell = (props: Props) => {
    const { store, onStorePress } = props
    return (
        <Container activeOpacity={0.8} onPress={onStorePress}>
            <Image
                style={{ flex: 1, height: 200, borderRadius: 5 }}
                source={{ uri: 'https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png' }}
            />
            <Title>{store && store.name || 'Title'}</Title>
            <Footer>
                <PhoneNumberView>
                    <Text>{store && store.phone_number || '00 00'}</Text>
                </PhoneNumberView>
                <EstimationView>
                    <Text>{store && store.delivery_estimation || '10 min'}</Text>
                </EstimationView>
            </Footer>
        </Container>
    );
}