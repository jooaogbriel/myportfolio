import * as C from './styles'

export const Header = ( )=> {
    return (
        <C.Container>
            <header>
                <h1>{'<João Gabriel/>'}</h1>
                
                <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Projetos</a></li>
                    <li><a href="/">Experiências</a></li>
                </ul>
                </nav>
            </header>
        </C.Container>
    )
}