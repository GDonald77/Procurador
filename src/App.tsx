import axios from "axios"
import {useState} from 'react'
import './App.css';

type GithubData = {
  name:string;
  bio:string;
  avatar_url:string;

}

function App() {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [avatar_url, setAvatarURL] = useState("Loading...")

  const HandlePesquisa = ()  => {
    axios.get<GithubData>(`https://api.github.com/users/${username}`).then((response) => {
      setName(response.data.name)
      setBio(response.data.bio)
      setAvatarURL(response.data.avatar_url)
    })

  }
  

  

  return (
    <div className="container-geral">
      <div className="container">
        <header className="header-top">Procurador Devedor</header>

        <main>
          <div className="form">
            <h1>Devedor </h1>
            <input type="text" placeholder="Digite o usuario" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={HandlePesquisa}>Consultar</button>
          </div>
          <div className="conteudo">
            <div>
              <img src={avatar_url}/>
              <h1>{name}</h1>
              <h1>{bio}</h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
