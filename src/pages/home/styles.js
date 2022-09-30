import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .pokemon_grid{
        margin: auto;
        max-width: 100%;
        padding: 10px 0px;
        justify-content: center;
        display: flex;
        flex-direction: columns;
        flex-wrap: wrap;
        
    }
`

export const Header = styled.header`
    width: 98%;
    height: 100px;
    color: white;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .list{
        display: flex;
        align-items: center;
    }
    
    .list p{
        margin: 0 5px;
    }
`

export const button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: black;
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    padding: 8px;
    border: none;
`