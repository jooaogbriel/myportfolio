import styled from "styled-components";



export const Container = styled.div`
body{
    
}
.main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("../../imgs/coder.svg");
}
h1{
    font-weight: 700;
    font-size: 5rem;
   
}
h2{
    color: white;
    line-height: 1px;
    font-size: 35px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.name{
    line-height: 15px;
    align-items: center;
}
ul{
    display: flex;
}
li{
    list-style-type: none;
    cursor: pointer;
    padding: 1rem;
    margin: 3px;
    border-width: 2px;
    border-color: white;
    border-style: solid;
    border-radius: 20px;
    margin: 10px;
    transition: 0.5s;
}
li:hover{
    background-color: #6833E4;
    border-color:#6833E4;
}

a{
    color: white;
    font-weight: bold;
    font-size: 20px;

}
.white{
    color: white;
}
.purple{
    color: rgb(107 33 168);
}

`