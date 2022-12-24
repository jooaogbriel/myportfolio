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
    margin-left: 190px;
    
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
`