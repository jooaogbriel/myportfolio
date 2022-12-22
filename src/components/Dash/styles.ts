import styled from "styled-components";

export const Container = styled.div`
.main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1{
    font-size: 50px;
}
.intro{
    align-items: center;
    justify-content: center;
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
    border-color: black;
    border-style: solid;
    border-radius: 20px;
}

`