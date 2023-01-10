import * as C from './styles';
import html from '../../imgs/html5.svg';
import css from '../../imgs/css3.svg';
import js from '../../imgs/js.svg';
import react from '../../imgs/react.svg';
import ts from '../../imgs/ts.svg';
import node from '../../imgs/nodejs.svg';
import git from '../../imgs/git.svg';
import figma from '../../imgs/figma.svg'

export const Tecs = ( )=> {
    return (
       <C.Container>
           <div className='main'>
               <div className='name'>
                   <h2>Algumas Tecnologias que eu utilizo.</h2>
               </div>

                <div className='tecs'>
                    <img src={ html } alt=""></img>
                    <img src={ css } alt=""></img>
                    <img src={ js } alt=""></img>
                    <img src={ react } alt=""></img>
                    <img src={ ts } alt=""></img>
                    <img src={ node } alt=""></img>
                    <img src={ git } alt=""></img>
                    <img className='figma' src={ figma } alt=""></img>
                </div>
           </div>
       </C.Container>
    )
}