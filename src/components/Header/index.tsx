import * as C from './styles'

export const Header = ( )=> {
    return (
        <C.Container>
            <div className='container'>
                <div className='navbar'>
                    <h1><span className='purple'>{'<'}</span>
                    <span className='white'>João Gabriel</span>
                    <span className='purple'>{'/>'}</span>
                    </h1>
                    <nav>
                    <ul>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/">Projetos</a> </li>
                        <li> <a href="/">Tecnologias</a> </li>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/">Projetos</a> </li>
                        <li> <a href="/">Tecnologias</a> </li>
                        
                    </ul>
                    </nav>
                   
                </div>
            </div>
        </C.Container>
    )
}