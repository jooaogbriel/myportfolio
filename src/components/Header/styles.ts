import styled from "styled-components";

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    background-color: #121214;
}
html{
    scroll-behavior: smooth;
}
.container{
    width: 100%;
  
    padding-left: 8%;
    padding-right: 8%;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 100px;
}
.navbar{
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    
  scroll-behavior: smooth;
}
.logo{
    width: 50px;
    cursor: pointer;
}
.menu-icon{
    width: 30px;
    cursor: pointer;
    margin-left: 40px;
}
h1{
    font-size: 24px;
}
h1:hover{
    cursor: pointer;
}
nav{
    flex: 1;
    text-align: right;
    width: 100%;
   
    
}
nav ul li{
    list-style: none;
    display: inline-block;
    margin-left: 60px;
}
nav ul li a{ 
    text-decoration: none;
    color: #fff;
    color: #a9a9a9;
    font-weight: 500;
}
a:hover{
    color: white;
}
.white{
    color: white;
}
.purple{
    color: rgb(107 33 168);
}
@media (max-width: 375px) {
    h1{
        margin-left: 10px;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
@media (max-width: 425px) {
    h1{
        margin-left: 10px;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
@media (max-width: 768px) {
    h1{
        margin-left: 10px;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`