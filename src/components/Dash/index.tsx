import * as C from './styles'

export const Home = ( )=> {
    return (
        <C.Container>
        <div className='main'>
            <div className='intro'>
                <h2>Hello Word!</h2>
                <h1>Me chamo João Gabriel </h1>
                <h1>Desenvolvedor Full Stack </h1>
                <h2>com 1 ano de experiência</h2>
            </div>

            <div className='list'>
                <nav>
                    <ul>
                        <li><a href="www">GitHub</a></li>
                        <li><a href="www">Linkedin</a></li>
                        <li><a href="www">Currículo</a></li>
                    </ul>
                </nav>
                </div>
        </div>      
        </C.Container>
    )
}