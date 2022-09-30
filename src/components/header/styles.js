import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 98%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: 10px;
    color: white;

    img{
        display: block;
        width: 10%;
        height: 100%;
    }

    ul {
        list-style: none;
        display: flex;
    }
    li{
        margin-right: 20px;
        cursor: pointer;
        border: 1px solid black;
        transition: 0.8s ease all;
        padding: 5px
    }

    li:hover{
        border-bottom: 1px solid white
    }
`