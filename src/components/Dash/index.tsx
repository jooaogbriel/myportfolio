import * as C from './styles'
import paint from '../../imgs/paintbrush.svg'
import coding from '../../imgs/coding.svg'
import dino from '../../imgs/dino.svg'
import jsback from '../../imgs/jsback.svg'
import html from '../../imgs/html.svg'

export const Home = ( )=> {
    return (
        <C.Container>
        <div className='main'>
            <div className='intro'>
                <h2>Hello Word! 👋</h2>
                <div className='name'>
                    <h1><span className='white'>Me chamo </span>
                    <span className='purple'>João Gabriel </span></h1>
                    <h1><span className='white'>Desenvolvedor </span>
                    <span className='purple'>Full Stack </span></h1>
                </div>
                <h2>com 1 ano de experiência 🚀</h2>
            </div>

            <img src={paint} alt=''></img>
            <img className='coding' src={coding} alt=''></img>
            <img  className='dino' src={dino} alt=''></img>
            <img  className='html' src={html} alt=''></img>
            <img  className='js' src={jsback} alt=''></img>

            <div className='list'>
                <nav>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/jooaogbriel" >GitHub</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jooaogbriel/">Linkedin</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1_YM8RX_kbVGYHb7gjxTe2faVuteo3Lu5MXvlJ2znuI0/edit?usp=sharing">Currículo</a></li>
                    </ul>
                </nav>
                </div>
        </div>      
        </C.Container>
    )
}