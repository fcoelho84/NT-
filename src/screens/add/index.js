import React from 'react'

import {
    SafeAreaView, 
    Message,
    MessageContainer,
    TextInput,
    Input
} from './styles'

import {
    Reminder
}   from '../../components'

import { KeyboardAvoidingView } from 'react-native'

export default props => {



    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <MessageContainer>
                    <Message>
                        O que você pretende lembrar ? 
                    </Message>

                </MessageContainer>

                <Reminder/>

                <Input />

                <Input />

                <TextInput 
                    multiline={true}
                    maxLength={300}
                    placeholderTextColor="#DDDDDD"
                    placeholder="Adicone algumas anotações para deixar mais claro o seu lembrete!"
                />



            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}