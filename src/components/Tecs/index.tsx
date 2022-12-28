import * as C from './styles';
import html from '../../imgs/html.png';
import css from '../../imgs/css.png';
import js from '../../imgs/js.png';
import react from '../../imgs/react.png';
import ts from '../../imgs/ts.png';
import node from '../../imgs/node.png';
import sql from '../../imgs/sql.png';
import git from '../../imgs/git.png';

export const Tecs = ( )=> {
    return (
       <C.Container>
           <div className='main'>
               <div className='name'><h2>Algumas Tecnologias que eu utilizo.</h2></div>
                <div className='tecs'>
                <img src={ html } alt=""></img>
                <img src={ css } alt=""></img>
                <img src={ js } alt=""></img>
                <img src={ react } alt=""></img>
                <img src={ ts } alt=""></img>
                <img src={ node } alt=""></img>
                <img src={ sql } alt=""></img>
                <img src={ git } alt=""></img>
                </div>
           </div>
       </C.Container>
    )
}