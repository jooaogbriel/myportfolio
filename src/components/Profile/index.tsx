import * as C from './styles';
import project1 from '../../imgs/proj1.jpeg';
import project2 from '../../imgs/netflix.png';
import project3 from '../../imgs/project3.png';

export const Projects = ( )=> {
    return (
        <C.Container>
            <div className='main'>
                <div className='name'>
                    <h1>Aqui estão alguns dos meus projetos.</h1>
                    <hr/>
                </div>
                <div className='img'> 
                <div className='infos'>
                <a className='principal' href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-lara-plc">
                    <img src={ project1 } alt=""></img>
                    <h3>Kenzie Food</h3>
                    </a>
                    <p>Ecommerce de Alimentos.</p>
                    <nav>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                    </nav>
                </div>      

                <div className='infos'>
                <a className='principal' href="https://github.com/jooaogbriel/projeto-netflix">
                    <img src={ project2 } alt=""></img>
                    <h3>Netflix</h3>
                    </a>
                    <p>Tela inicial da Netflix.</p>
                    <nav>
                        <span>ReactJs</span>
                        <span>TypeScript</span>
                        <span>Styled-Components</span>
                    </nav>
                </div>

            
                <div className='infos'>
                <a className='principal' href="https://github.com/jooaogbriel/tela-login">
                    <img src={ project3 } alt=""></img>
                    <h3>Tela de Login</h3>
                </a>
                    <p>Tela de Login com tema League of Legends.</p>
                    <nav>
                        <span>ReactJs</span>
                        <span>Yup</span>
                        <span>React Hook Form</span>
                    </nav>
                </div>
                

                </div>
                <div className='final'>
                <h4>Tem muito mais no meu <a className='git' href='https://github.com/jooaogbriel'>GitHub!</a></h4>
                </div> 
               
            </div>
        </C.Container>
    )
}
