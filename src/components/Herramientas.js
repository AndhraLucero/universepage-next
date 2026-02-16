import Image from "next/image"

import html from '@/assets/images/html.png'
import css from '@/assets/images/css.png'
import js from '@/assets/images/js.png'
import react from '@/assets/images/react.png'
import node from '@/assets/images/node.png'
import postgresql from '@/assets/images/postgresql.png'
import mysql from '@/assets/images/mysql.png'

export default function Herramientas() {
  return (
      <section className='herramientas_tecnologias'>
        <div className='container'>
            <div className='herramientas'>
                <div className='herramientas_text'>
                    <h2>HERRAMIENTAS Y TECNOLOGIAS</h2>
                    <div className='herramientas_text_content'>
                        <p>Nuestras habilidades y experiencia nos permiten ofrecer soluciones web a través de diversas tecnologías para el desarrollo de software, atractivas, robustas, seguras y escalables.</p>
                    </div>
                   

                </div>
                <div className='herramientas_img'>
                    <div className='herramientas_box'>
                        <img src='/assets/images/html.png' alt='html para páginas web universepage' />                                            
                        <p>HTML</p>
                    </div>
                    <div className='herramientas_box'>
                        <img src='/assets/images/css.png' alt='css para páginas web universepage' />
                        <p>CSS</p>
                    </div>
                    <div className='herramientas_box'>
                        <img src='/assets/images/js.png' alt='java script para páginas web universepage' />
                        <p>JavaScript</p>
                    </div>
                    <div className='herramientas_box'>
                        <img src='/assets/images/react.png' alt='react para páginas web universepage' />
                        <p>React</p>
                    </div>
                    <div className='herramientas_box'>
                        <img src='/assets/images/node.png' alt='Node Js para páginas web universepage' />
                        <p>Node JS</p>
                    </div>
                    <div className='herramientas_box'>
                        <img src='/assets/images/postgresql.png' alt='PostgreSQL para páginas web universepage' />
                        <p>PostgreSQL</p>
                    </div>
                    <div className='herramientas_box'>
                        <img src='/assets/images/mysql.png' alt='mySQL para páginas web universepage' />
                        <p>MySQL</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
