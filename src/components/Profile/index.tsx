import * as C from './styles';
import project1 from '../../imgs/project1.png';
import project2 from '../../imgs/project2.png';
import project3 from '../../imgs/project3.png';

export const Projects = ( )=> {
    return (
        <C.Container>
            <div>
                <h1>Aqui estão alguns dos meus projetos</h1>

                <a href="https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-lara-plc">
                    <img src={ project1 } alt=""></img>
                </a>

                <a href="https://www.w3schools.com">
                    <img src={ project2 } alt=""></img>
                </a>

                <a href="https://www.w3schools.com">
                    <img src={ project3 } alt=""></img>
                </a>
            </div>
        </C.Container>
    )
}
