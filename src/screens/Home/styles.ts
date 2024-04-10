import styled from 'styled-components/native';

interface OptionTitleProps{
    option: 'done' | 'created'
}


export const Container = styled.View`
    flex: auto;
    background-color: #1A1A1A;
`;

export const Header = styled.View`
    height: 173px;
    background-color: #0D0D0D;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    padding-top: 70px;
`;

export const InputBar = styled.View`
    width:100%;
    position: relative;
    top: 40px;
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const Content = styled.View`
    flex: 1;
    padding:24px;
    padding-top:55px;
`;

export const ContentHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
`;

export const Option = styled.View`
    flex-direction: row;
    align-items: center;
    gap:8px;

`;

export const OptionTitle = styled.Text<OptionTitleProps>`
    font-weight: bold;
    font-size: 14px;
    color: ${({option}) => option === 'created' ? '#4EA8DE' : '#8284FA'};
`;

export const OptionCounter = styled.View`
    background-color: #333333;
    padding: 2px 8px;
    border-radius: 999999px;
`;

export const OptionCounterNumber = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: #D9D9D9;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: #333333;
`;


export const EmptyComponentBox = styled.View`
    width: 100%;
    padding: 48px 20px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-top: 1px solid red;
`;


export const EmptyComponentTitle = styled.Text`
    font-weight: bold;
`;
export const EmptyComponentText = styled.Text`
    font-size: 14px;
    color: #808080;
    text-align: center;
`;






