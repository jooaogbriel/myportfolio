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
.infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;

}
.principal{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
img{
    width: 370px;
    height: 224px;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.75rem;
    border-color: rgb(123 137 168);
    padding: 3px;
}
img:hover{
    transform: translateY(-0.6rem);
    opacity: 0.75;
    border-color:#7c3aed ;
    transition: 0.2s;
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
    line-height: 1px;
    margin-top: 30px;
    font-weight: 700;

}
p{
    color: rgb(123 137 168);
    font-size: 14px; 
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
    border-width: 5px;
    font-weight: 550;
    font-size: 14px;
    margin-right: 8px;
}
h4{
    color: rgb(123 137 168);
    font-style: italic;
}
.git{
    text-decoration: underline;
}
.final{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
}
`