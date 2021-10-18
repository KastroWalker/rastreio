import styled from 'styled-components'

export const Input = styled.input`
    border-radius: 10px;
    font-size: 22px;
    padding: 10px;
    width: 250px;
    outline: 0;
`

export const ButtonTracker = styled.button`
    background-color: #008CBA;
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    border-radius: 10px;
    width: 272px;
    border: none;
    padding: 10px;
    outline: 0;

    &:hover {
        cursor: pointer;
        background-color: #006A97;
    }
`

export const MessageError = styled.span`
    color: red;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`