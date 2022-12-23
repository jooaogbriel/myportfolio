import styled from "styled-components";

export const Container = styled.div`
    header{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    h1{
        font-size: 25px;
        color: white;
    }
    ul{
        display: flex;
    }
    li{
        list-style-type: none;
        cursor: pointer;
        padding-left: 2rem;
    }
    a{
        color: white;
        font-weight: bold
    }
    .white{
    color: white;
}
.purple{
    color: rgb(107 33 168);
}

`