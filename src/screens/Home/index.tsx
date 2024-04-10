import { useState } from 'react';
import { Text, FlatList, Alert } from 'react-native';

import { 
    Container,
    Header,
    InputBar,
    Content,
    ContentHeader,
    Option,
    OptionTitle,
    OptionCounter,
    OptionCounterNumber,
    EmptyComponentBox,
    EmptyComponentText,
    EmptyComponentTitle,
    Separator
} from './styles';

import Logo from '../../../assets/Logo.svg';
import ClipboardImg from '../../../assets/Clipboard.svg';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Task } from '../../Components/Task';

interface TaskProps{
    id: string,
    description: string,
    done: boolean
}

interface CounterProps{
    created: number,
    done: number
}


export function Home(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [counter, setCounter] = useState<CounterProps>({created:0, done:0});

    function counterUpdate(opp: 'add' | 'removeCreated' | 'removeDone'| 'changeCreated' | 'changeDone'){
        switch(opp){
            case 'add':
                setCounter(old =>{return {created: old.created + 1, done: old.done}});
                break;
            case 'removeCreated':
                setCounter(old =>{return {created: old.created - 1, done: old.done}});
                break;
            case 'removeDone':
                setCounter(old =>{return {created: old.created - 1 , done: old.done - 1}});
                break;
            case 'changeCreated':
                setCounter(old =>{return {created: old.created , done: old.done - 1}});
                break;
            case 'changeDone':
                setCounter(old =>{return {created: old.created , done: old.done + 1}});
                break;
        }
    }

    function handleRemoveTask(id: string){
        Alert.alert("Podemos excluir ?", "Tem certeza que deseja realmente excluir essa tarefa?", [
            {
                text: 'Tenho!',
                onPress: () => {
                    const t = tasks.find(task => task.id === id);
                    setTasks(tasks.filter(task => task.id !== id));
                    if(t?.done)
                        counterUpdate('removeDone');
                    else
                        counterUpdate('removeCreated');
                    Alert.alert("Agora já era pae!", "Excluido com sucesso");
                }
            },
            {
                text: 'Cancelar',
                style: 'cancel'
            }
        ]);
    }

    function handleDoneTask(id: string){
        const tasksUpdated = tasks.map( task => ({...task}));
        const taskUpdated = tasksUpdated.find(task => task.id === id);
        if(taskUpdated){
            taskUpdated.done = !taskUpdated.done;
            setTasks([...tasksUpdated]);
            if(taskUpdated.done)
                counterUpdate('changeDone');
            else
                counterUpdate('changeCreated');
        }
    }

    function handleAddTask(){
        setTasks(old => [...old, 
            {
                id: Date(),
                description: task,
                done: false
            }
        ]);
        counterUpdate('add');
        setTask('');
    }

    return(
        <Container>
            <Header>
                <Logo/>
                <InputBar>
                    <Input
                        value={task}
                        setValue={setTask}
                    />
                    <Button onPress={handleAddTask}/>
                </InputBar>
            </Header>
            <Content>
                <ContentHeader>
                    <Option>
                        <OptionTitle option='created'>
                            Criadas
                        </OptionTitle>
                        <OptionCounter>
                            <OptionCounterNumber>
                                {counter.created}
                            </OptionCounterNumber>
                        </OptionCounter>
                    </Option>
                    <Option>
                        <OptionTitle option='done'>
                            Concluídas
                        </OptionTitle>
                        <OptionCounter>
                            <OptionCounterNumber>
                                {counter.done}
                            </OptionCounterNumber>
                        </OptionCounter>
                    </Option>
                </ContentHeader>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <Task
                            id={item.id}
                            description={item.description}
                            onRemove={handleRemoveTask}
                            done={item.done}
                            onDone={handleDoneTask}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => 
                        <>
                        <Separator/>
                        <EmptyComponentBox>
                            <ClipboardImg/>
                            <EmptyComponentText>
                                <EmptyComponentTitle>
                                    Você ainda não tem tarefas cadastradas{'\n'}
                                </EmptyComponentTitle>
                                    Crie tarefas e organize seus itens a fazer
                            </EmptyComponentText>
                        </EmptyComponentBox>
                        </>
                    }
                />
            </Content>
           
        </Container>
    );
}