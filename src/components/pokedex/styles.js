import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: white;
    border-radius: 3px;
    box-shadow: 4px 4px 4px (0,0,0, 0.25);
    width: 400px;
    height: 70px;
    margin: 0px;
    padding: 20px;
    background-image: ${(props) => props.bg};
    cursor: pointer;
    display: flex;
    align-items: center;
    transform: scale(0.9);
    transition: 0.6s ease all;

    &:hover{
        transform: scale(1)
    }

    .pokemon-image{
        padding 10px 5px;
        margin-right: 10px;
        width: 100px;
    }

    img{
        display: block;
        margin: auto;
        width: 90%;
        height: 50%;
    }

    .card-body{
        width: 100%;
        padding 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    .card-top h3{
        text-transform: capitalize;
    }

    .card-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pokemon-type{
        display: flex;
        width: 50%;
        
        height:30px;
        
    }

    .pokemons-types-text{
        display: flex;
        align-items center;
        justify-content: center;
        width: 50px;
        margin-right: 10px;
        text-transform: capitalize;
        border-radius: 20px;
        padding: 8px 10px;
        color: white;
        border: 2px solid white;
    }
    .types_image{
        display: block;
        margin: auto;
        width: 30%;
        margin-left: 5px;
    }
`

export const Button = styled.button`
 
`