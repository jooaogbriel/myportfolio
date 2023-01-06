import * as C from './styles';
import project1 from '../../imgs/project1.png';
import project2 from '../../imgs/project2.png';
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
                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-lara-plc">
                    <img src={ project1 } alt=""></img>
                    <h3>Kenzie Food</h3>
                    <p>Ecommerce de Alimentos.</p>
                    <nav>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                    </nav>
                </a>

                <a href="https://github.com/jooaogbriel/projeto-netflix">
                    <img src={ project2 } alt=""></img>
                    <h3>Netflix</h3>
                    <p>Tela inicial da Netflix.</p>
                    <nav>
                        <span>ReactJs</span>
                        <span>TypeScript</span>
                        <span>Styled-Components</span>
                    </nav>
                </a>

                <a href="https://github.com/jooaogbriel/tela-login">
                    <img src={ project3 } alt=""></img>
                    <h3>Tela de Login</h3>
                    <p>Tela de Login com tema League of Legends.</p>
                    <nav>
                        <span>ReactJs</span>
                        <span>Yup</span>
                        <span>React Hook Form</span>
                    </nav>
                </a>
                </div>
            </div>
        </C.Container>
    )
}
