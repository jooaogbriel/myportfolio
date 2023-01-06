import styled from "styled-components";

export const Container = styled.div`
.main{
    display: flex;
    flex-direction: column;
}
.name{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.img{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
img{
    width: 320px;
    height: 200px;
    margin: 20px;
    margin-left: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 20px;
    border-color: rgb(123 137 168);

}
h1{
    color: white;
}
hr {
    border-width: 2px;
    width: 50%;
    border-color: #6833E4;
}
h3{
    color: white;
}
p{
    color: rgb(123 137 168);
}
nav{
    color: white
}
span{
    border-color: rgb(25 39 66);
    border-style: solid;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: rgb(25 39 66);
    color: white;
    text-align: center;
    margin: 5px;
    border-width: 5px;
    font-weight: 550;
}
`