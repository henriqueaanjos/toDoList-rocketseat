import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface InputProps{
    isFilled: boolean
}

export const Container = styled.View`
    flex: 1;
`;

export const InputText = styled.TextInput<InputProps>`
    height: auto;
    background-color: #262626;
    font-size: 16px;
    padding: 16px;
    border-radius: 8px;
    color: #F2F2F2;
    border: 1px solid ${({isFilled}) => isFilled ? '#5E60CE': 'black'};
`;

