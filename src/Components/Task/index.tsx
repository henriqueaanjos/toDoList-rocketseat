import React from 'react';
import CheckInativeSvg from '../../../assets/check-inactive.svg';
import CheckActiveSvg from '../../../assets/check-active.svg';
import TrashSvg from '../../../assets/trash.svg';

import {
    Container,
    CheckBox,
    DescriptionBox,
    Description,
    RemoveButton
} from './styles';

interface TaskProps{
    id: string
    description: string,
    done: boolean,
    onRemove: (id: string) => void;
    onDone: (id: string)=> void;
}

export function Task({id, description, done, onRemove, onDone}: TaskProps){

    return(
        <Container>
            <CheckBox onPress={() =>onDone(id)}>
            {done ? <CheckActiveSvg/> : <CheckInativeSvg/>}
            </CheckBox>
            <DescriptionBox>
                <Description done={done}>
                    {description}
                </Description>
            </DescriptionBox>
            <RemoveButton
                onPress={() => onRemove(id)}
            >
                <TrashSvg/>
            </RemoveButton>
        </Container>
    );
}