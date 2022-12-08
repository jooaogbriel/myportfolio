import * as C from './styles';
import project1 from '../../imgs/project1.png';

export const Projects = ( )=> {
    return (
        <C.Container>
            <div>
                <h1>Aqui estão meus melhores projetos</h1>

                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-lara-plc">
                    <img src={ project1 } alt=""></img>
                </a>

                <a href="https://www.w3schools.com">
                    <img src={ project1 } alt=""></img>
                </a>

                <a href="https://www.w3schools.com">
                    <img src={ project1 } alt=""></img>
                </a>
            </div>
        </C.Container>
    )
}