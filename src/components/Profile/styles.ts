import styled from "styled-components";

export const Container = styled.div`
.main{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.name{
    display: flex;
    align-items: center;
}
.img{
    display: flex;
    align-items: center;
    justify-content:center;
    
}
img{
    width: 370px;
    height: 224px;
    margin: 20px;
    margin-left: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 20px;
    border-color: rgb(123 137 168);
    overflow-clip-margin: content-box;
    overflow: clip;


}
img:hover{
    transform: scale(1,1.1);
   
}
h1{
    color: white;
    margin-left: 116px;
    
}
hr {
    border-width: 2px;
    width: 37%;
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
h4{
    color: rgb(123 137 168);
    font-style: italic;
}
.git{
    text-decoration: underline
}
`