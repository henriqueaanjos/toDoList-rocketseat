import React, { useState } from 'react';

import {
    Container,
    InputText
} from './styles';
import { TextInput } from 'react-native';

interface InputProps{
    value: string,
    setValue: (value: string) => void;
}

export function Input({value, setValue}: InputProps){
    return(
        <Container>
            <InputText
                placeholder='Adicione uma nova tarefa'
                onChangeText={setValue}
                placeholderTextColor='#808080'
                value={value}
                isFilled={value != ''}
            />
        </Container>
    );
}