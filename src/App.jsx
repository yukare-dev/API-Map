import { useState, useEffect } from 'react'
import axios from 'axios'
import './app.scss'
import search from './assets/search.png'
import logo from './assets/logo.png'
import insta from './assets/insta.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

export default function App(){

  const [info, setInfo] = useState([])

  const pegarDados = async () => {
    const dados = await axios.get('https://fakestoreapi.com/products')
    setInfo(dados.data)
  }

  useEffect(()=>{
    pegarDados()
  },[])

  return(
    <main>
      <header>
        <section className='cabecalho'>
          <img src={logo} alt="Imagem de uma logo ilustrando uma loja" />
          <h1>Vai no Atacado</h1>
          <nav className='navegacao'>
          <ul>
            <li>Inicio</li>
            <li>Carrinho</li>
            <li>Pedidos</li>
            <li>Ajuda</li>
          </ul>
          </nav>
          <section className='barraDeBusca'>
            <input type='search' name='' id='' placeholder='Buscar...'/>
            <button>
              <img src={search} alt="Imagem de uma lupa branca" />
            </button>
          </section>
        </section>
      </header>
      <div className='corpo'>
      {
        info.map((item)=>(
          <article>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
          </article>
        ))
      }
      </div>
    <footer className='rodape'>
      <p>Desenvolvido apenas para fins educativos.</p>
      <nav className='navRodape'>
        <a href=""><img src={insta} alt="Logo do Instagram" /></a>
        <a href=""><img src={linkedin} alt="Logo do Linkedin" /></a>
        <a href=""><img src={github} alt="Logo do GitHub" /></a>
      </nav>
    </footer>
    </main>
  )
}