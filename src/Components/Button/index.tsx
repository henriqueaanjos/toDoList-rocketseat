import React from 'react';
import { AntDesign } from '@expo/vector-icons';


import {
    Container
} from './styles';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
}

export function Button({...props}: ButtonProps){
    return(
        <Container {...props}>
            <AntDesign
                name="pluscircleo"
                size={16}
                color="white"
            />
        </Container>
    );
}