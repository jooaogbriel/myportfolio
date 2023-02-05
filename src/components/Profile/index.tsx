import * as C from './styles';
import project2 from '../../imgs/netflix.png';
import project3 from '../../imgs/project3.png';
import project1 from '../../imgs/nlw.png'

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
                <a className='principal' target="_blank" rel="noopener noreferrer" href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-lara-plc">
                    <img src={ project1 } alt=""></img>
                    <h3>Nlw Setup / Mobile</h3>
                    </a>
                    <p>Uma aplicação de controle de hábitos completa.</p>
                    <nav>
                        <span>React Native</span>
                        <span>ReactJS</span>
                        <span>NodeJS</span>
                    </nav>
                </div>      

                <div className='infos'>
                <a className='principal' target="_blank" rel="noopener noreferrer" href="https://github.com/jooaogbriel/projeto-netflix">
                    <img src={ project2 } alt=""></img>
                    <h3>Netflix</h3>
                    </a>
                    <p>Tela inicial da Netflix.</p>
                    <nav>
                        <span>ReactJS</span>
                        <span>TypeScript</span>
                        <span>Styled-Components</span>
                    </nav>
                </div>

            
                <div className='infos'>
                <a className='principal' target="_blank" rel="noopener noreferrer" href="https://github.com/jooaogbriel/tela-login">
                    <img src={ project3 } alt=""></img>
                    <h3>Tela de Login</h3>
                </a>
                    <p>Tela de Login com tema League of Legends.</p>
                    <nav>
                        <span>ReactJS</span>
                        <span>Yup</span>
                        <span>Yup</span>
                        <span>React Hook Form</span>
                    </nav>
                </div>
                

                </div>
                <div className='final'>
                <h4>Tem muito mais no meu <a target="_blank" rel="noopener noreferrer" className='git' href='https://github.com/jooaogbriel'>GitHub!</a></h4>
                </div> 
               
            </div>
        </C.Container>
    )
}
