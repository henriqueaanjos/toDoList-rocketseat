import { css } from 'styled-components';
import styled from 'styled-components/native';

interface CheckBoxProps{
    done: boolean
}


export const Container = styled.View`
    background-color: #262626;
    border-radius: 8px;
    padding: 12px;
    padding-right: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap:8px;
    margin-bottom: 8px;
`;

export const CheckBox = styled.TouchableOpacity`

`;



export const DescriptionBox = styled.View`
    flex:1;
`;

export const Description = styled.Text<CheckBoxProps>`
    font-size: 14px;
    color: ${({done}) => done ? '#808080' : '#F2F2F2'};
    ${
        ({done}) => done && css`
            text-decoration: line-through #808080;
        `
    }
`;

export const RemoveButton = styled.TouchableOpacity`

`;


