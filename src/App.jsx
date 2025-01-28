import { useState, useEffect } from 'react'
import axios from 'axios'
import './app.scss'
import search from './assets/search.png'
import logo from './assets/logo.png'

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
        <section>
          <img src={logo} alt="Imagem de uma logo ilustrando uma loja" />
          <h1>Vai no Atacado</h1>
          <nav>
          <ul>
            <li>Inicio</li>
            <li>Carrinho</li>
            <li>Pedidos</li>
            <li>Ajuda</li>
          </ul>
          </nav>
          <section className='barraDeBusca'>
            <input type='search' name='' id='' placeholder='O que você procura?'/>
            <button>
              <img src={search} alt="Imagem de uma lupa branca" />
            </button>
          </section>
        </section>
      </header>
      <div>
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
    </main>
  )
}