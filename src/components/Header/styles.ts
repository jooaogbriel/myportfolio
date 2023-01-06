import styled from "styled-components";

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    background-color: #121214;
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
    height: 12%;
    display: flex;
    align-items: center;
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
    font-size: 25px;
}
nav{
    flex: 1;
    text-align: right;
}
nav ul li{
    list-style: none;
    display: inline-block;
    margin-left: 60px;
}
nav ul li a{ 
    text-decoration: none;
    color: #fff;
    font-size: 17px;
}
.white{
    color: white;
}
.purple{
    color: rgb(107 33 168);
}
`
