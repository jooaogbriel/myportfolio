import * as C from './styles';
import project1 from '../../imgs/project1.png';
import project2 from '../../imgs/project2.png';
import project3 from '../../imgs/project3.png';

export const Projects = ( )=> {
    return (
        <C.Container>
            <div className='main'>
                <div className='name'>
                    <h1>Aqui estão alguns dos meus projetos</h1>
                    <h1>👨🏻‍💻</h1>
                </div>
                <div className='img'>       
                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-lara-plc">
                    <img src={ project1 } alt=""></img>
                </a>

                <a href="https://github.com/jooaogbriel/projeto-netflix">
                    <img src={ project2 } alt=""></img>
                </a>

                <a href="https://github.com/jooaogbriel/tela-login">
                    <img src={ project3 } alt=""></img>
                </a>
                </div>
            </div>
        </C.Container>
    )
}
