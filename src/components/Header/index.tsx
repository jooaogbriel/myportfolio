import * as C from './styles'

export const Header = ( )=> {

    return (
        <C.Container>
            <div className='container' id='header'>
                <div className='navbar'>
                    <h1><span className='purple'>{'<'}</span>
                    <span className='white'>João Gabriel</span>
                    <span className='purple'>{'/>'}</span>
                    </h1>
                    <nav>
                    <ul>
                        <li> <a href="#projetos">Projetos</a> </li>
                        <li> <a href="#tecs">Tecnologias</a> </li>
                        <li> <a href="#final">Contato</a> </li>
                    </ul>
                    </nav>
                   
                </div>
            </div>
        </C.Container>
    )
}