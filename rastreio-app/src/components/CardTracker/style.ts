import styled from "styled-components"

export const CardTrakcer = styled.ul`
    background: #ccc;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;
        background: #bbb;
    }

    #city {
        span {
            font-weight: bold;
        }
    }

    #status {
        span { 
            font-weight: bold;
        }
    }
`