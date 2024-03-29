import styled from "styled-components";

export const Container = styled.div`
html{
    scroll-behavior: smooth;
}
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1{
    color: white;
   
}
hr {
    border-width: 1px;
    width: 60%;
    border-color: #6833E4;
    margin-top: 100px;
}
a{
    text-decoration: underline;
    font-style: italic;
}

.info{
    
    justify-content: space-between;
    
}
p{
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 10px;
}
h1{
    font-size: 3.5rem;
    line-height: 1;
}
.img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 25px;
}
span{
    color: rgb(123 137 168);
    margin: 5px;
}
.made{
    padding: 20px;
}
.name{
    color: #b2bbcf;
    font-weight: 500;
    
}
.name:hover{
    color: #6833E4;
    cursor: pointer;
}
.tel{
    display: flex;
    align-items: center;
}
.email{
    display: flex;
    align-items: center;
}
.mini-img{
    width: 20px;
    height: 20px;
}
@media (max-width: 375px) {
    h1 {
        font-size: 30px;
        padding: 10px;
    }
}
@media (max-width: 425px) {
    h1 {
        font-size: 30px;
        padding: 10px;
    }
}
@media (max-width: 768px) {
    h1 {
        font-size: 40px;
        padding: 10px;
    }
}
`
