import React from 'react';
import styled from "styled-components";
import { Button } from '../styled/index'
import colors from '../../constants/colors';
import Ionicon from "react-native-vector-icons/Ionicons";

const Container = styled.View`
    flex-direction: row;
`;

const Text = styled.Text`
    font-size: 20
`;

type Props = {
    text: string,
    icon_name: string
}
export default ButtonIcon = (props: Props) => {
    const { text, icon_name } = props
    return (
        <Button>
            <Container>
                <Text>{text}</Text>
                <Ionicon
                    name={icon_name}
                    size={25}
                    color={colors.light_gray}
                    backgroundColor={"transparent"}
                />
            </Container>
        </Button>
    );
}