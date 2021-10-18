import React, { useState } from "react";
import { tracker } from '../../utils/Tracker';
import { Input, InputContainer, ButtonTracker, MessageError } from './style'

export function InputCode () {
    const [valueInputCode, setValueInputCode] = useState('');
    const [messageError, setMessageError] = useState('Insira um código no input');

    const handlerInput = (event: any) => {
        setValueInputCode(event.target.value)
    }
    
    const trackeCode = async (code: string) => {
        setMessageError('')
        
        if (!code) {
            setMessageError('Insira um código no input')
            return
        }

        tracker(code).then(res => {
            saveCodeOnLocalStorage(res.data.code)
        }).catch(res => {
            setMessageError(res.response.status === 400 ? 'Código inválido' : 'Erro ao rastrear produto')
        })
    }

    const saveCodeOnLocalStorage = (code: string) => {
        const codes = localStorage.getItem('codes')

        if (codes) {
            const oldCodes: Array<String> = JSON.parse(codes)

            oldCodes.includes(code) 
                ? console.error('O codigo já está cadastrado')
                : localStorage.setItem('codes', JSON.stringify([...oldCodes, code]))
        } else {
            localStorage.setItem('codes', JSON.stringify([code]))
        }
    }

    return (
        <InputContainer>
            <Input type="text" name="code" id="code" onChange={handlerInput} placeholder="Código de rastreio"/>
            {messageError && <MessageError>{messageError}</MessageError>}
            <ButtonTracker onClick={() => trackeCode(valueInputCode)}>Rastrear</ButtonTracker>
        </ InputContainer>
    );
}