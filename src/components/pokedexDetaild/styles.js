import styled from "styled-components";

export const Cotainer = styled.div`
    max-width: 100%;
    max-height: 100%;
`
export const BackgroundTop = styled.div`
    max-width: 100%;
    max-height:  100%;
    background-image: ${(props) => props.bg};
  
    .buttons{
        padding: 10px;
        max-width: 100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    .left{
        border: 1px solid black;
        color: white;
        width: 50px;
        height: 50px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    

    .infor{
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .imgContainer{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        display: block;
        width: 200px;
        height: 200px;
        padding: 10px;
    }
`

export const Types = styled.div`
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
        

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


export const pokemonInfor= styled.div`
    max-width: 100%;
    height: 100vh;
    border-radius: 50px 50px 0px 0px;
    background-color: white;
    
    text-align: center;
    color: black;

    h1{
        paddding: 20px;
        margin: 10px;
    }

    .pokemonAbility{
        max-width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 30px;
    }

    .powers{
        margin: 0 auto;
        display: grid;
        grid-template-columns: 120px 170px 20px;
        
    }

    .bar{
        width: 150px;
        background-color: black;
        height: 7px;
        margin: 10px;
    }

    .barPower{
        max-width: 100%;
        background-color: blue;
        height: 7px;
    }

`
export const Button = styled.button`
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
`