import * as C from './styles'
import line from '../../imgs/lineBreak.svg'
import email from '../../imgs/eemail.png'
import tel from '../../imgs/tel.png'

export const Final = ( )=> {
    return (
        <C.Container>
            <div className='img'>
                <img src={line} alt="" />
            </div>

            <div className='main'>
                <h1>Interessado em trabalhar comigo?</h1>
                <div className='info'>
                    <div className='email'>
                        <img className='mini-img' src={email} alt="" />
                        <p>joao_woork@outlook.com</p>
                        <p>joao_woork@outlook.com</p>
                    </div>
                    

                    <div className='tel'>
                        <img className='mini-img' src={tel} alt="" />
                        <p>+5519998748169</p>
                        
                        
                    </div>
                    
                    
                </div>

            <hr/>
                <div className='made'>
                    <span>made by<span className='name'>João Gonçalves 🇧🇷</span></span>
                </div>
                
            </div>
        </C.Container>
    )
}