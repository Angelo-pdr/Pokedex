import styled from "styled-components";

export const container = styled.div`
    width: 98%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px;

    .inputArea{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        height: 30px;
    }

    input{
        height: 100%;
        width: 100%;
    }
`

export const Button = styled.button`
    height: 35px;
    cursor: pointer;
`