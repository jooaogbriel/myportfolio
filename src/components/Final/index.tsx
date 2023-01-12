import * as C from './styles'
import line from '../../imgs/lineBreak.svg'

export const Final = ( )=> {
    return (
        <C.Container>
            <div className='img'>
                <img src={line} alt="" />
            </div>

            <div className='main'>
                <h1>Interessado em trabalhar comigo?</h1>
                <div className='info'>
                    <p>joao_woork@outlook.com</p>
                    <p>+5519998748169</p>
                    
                </div>

            <hr/>
                <p>made by João Gonçalves 👨🏻‍💻 🚀</p>
            </div>
        </C.Container>
    )
}