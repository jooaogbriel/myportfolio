import styled from "styled-components";



export const Container = styled.div`
html{
    font-size: 62.5%;
}
body{
    font-size: 1.6rem;
}
.main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("../../imgs/coder.svg");
    width: 100%;
    
}
h1{
    font-weight: 700;
    font-size: 5rem;
}
h2{
    color: white;
    line-height: 1px;
    font-size: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
   
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
    transition: 0.2s;
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
img{
    position: absolute;
    right: 220px;
    top: 390px;
    transform: translate(0px);
    animation: float 5s ease-in-out infinite;
}

@keyframes float {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0px);
    }
}

.coding{
    position: absolute;
    left: 250px;
    top: 400px;
}
.dino{
    position: absolute;
    left: 340px;
    top: 460px;
    width: 150px;
}
.js{
    position: absolute;
    left: 350px;
    top: 120px;
    width: 100px;
}
.html{
    position: absolute;
    left: 950px;
    top: 150px;
    width: 60px;
    
}
.white{
    color: white;
}
.purple{
    color: rgb(107 33 168);
}

@media (max-width: 375px) {
    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img, .html,.js,.dino{
        width: 1px;
        top: 0;
        left: 0;
        right: 0;
    }
    h1{
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 10px;
        
    }
    span{
        padding: 5px;
    }
    .purple{
        padding: 5px;
        margin-top: 10px;
    }
    .white{
        padding: 10px;
        font-size: 40px;
    }
    .name{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .media{
        font-size: 20px;
    }
    
   a{
       font-size: 15px;
   }
   ul{
       display: flex;
      align-items: center;
      justify-content: center;
   }
}
@media (max-width: 425px) {
    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img, .html,.js,.dino{
        width: 1px;
        top: 0;
        left: 0;
        right: 0;
    }
    h1{
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 10px;
        
    }
    span{
        padding: 5px;
    }
    .purple{
        padding: 5px;
        margin-top: 10px;
    }
    .white{
        padding: 10px;
        font-size: 40px;
    }
    .name{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .media{
        font-size: 20px;
    }
    
   a{
       font-size: 15px;
   }
   ul{
       display: flex;
      align-items: center;
      justify-content: center;
   }
}
`