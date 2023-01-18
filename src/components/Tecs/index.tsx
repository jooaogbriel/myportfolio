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
                   <h1>Algumas tecnologias que eu utilizo.</h1>
               </div>
               <div className='name'>
                   <h1>Algumas tecnologias que eu utilizo.</h1>
               </div>

                <div className='tecs'>
                    <div className='container1'>
                        <div className='blocos'>
                            <img src={ html } alt=""></img>
                            <p>HTML</p>
                        </div>

                        <div className='blocos'>
                            <img src={ css } alt=""></img>
                            <p>CSS</p>
                        </div>

                        <div className='blocos'>
                            <img src={ js } alt=""></img>
                            <p>Javascript</p>
                        </div>

                        <div className='blocos'>
                            <img src={ react } alt=""></img>
                            <p>React</p>
                        </div>
                    </div>
                    <div className='container2'>
                    <div className='blocos'>
                        <img src={ ts } alt=""></img>
                        <p>Typescript</p>
                    </div>

                    <div className='blocos'>
                        <img src={ node } alt=""></img>
                        <p>NodeJS</p>
                    </div>

                    <div className='blocos'>
                        <img src={ git } alt=""></img>
                        <p>Git</p>
                    </div>

                    <div className='blocos'>
                        <img className='figma' src={ figma } alt=""></img>
                        <p>Figma</p>
                    </div>
                    
                    </div>
                </div>
           </div>
       </C.Container>
    )
}