import * as C from './styles'

export const Home = ( )=> {
    return (
        <C.Container>
        <div className='main'>
            <div className='intro'>
                <h2>Hello Word! 👋</h2>
                <h1><span className='white'>Me chamo </span>
                <span className='purple'>João Gabriel </span></h1>
                <h1><span className='white'>Desenvolvedor </span>
                <span className='purple'>Full Stack </span></h1>
                <h2>com 1 ano de experiência 🚀</h2>
            </div>

            <div className='list'>
                <nav>
                    <ul>
                        <li><a href="https://github.com/jooaogbriel">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/jooaogbriel/">Linkedin</a></li>
                        <li><a href="https://docs.google.com/document/d/1_YM8RX_kbVGYHb7gjxTe2faVuteo3Lu5MXvlJ2znuI0/edit?usp=sharing">Currículo</a></li>
                    </ul>
                </nav>
                </div>
        </div>      
        </C.Container>
    )
}