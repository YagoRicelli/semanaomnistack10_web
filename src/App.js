import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude)
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    console.log({github_username,techs,latitude,longitude});

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,
    });

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>

        <strong>Cadatrar</strong>

        <form onSubmit={handleAddDev}>

          <div className="input-block">
            <label htmlFor="github_username">Usuario do git</label>
            <input name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required></input>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
                name="latitude"
                id="latitude"
                onChange={e => setLatitude(e.target.value)}
                required value={latitude}></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" onChange={e => setLongitude(e.target.value)} id="longitude" required value={longitude}></input>
            </div>

          </div>
          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="teste imagem"></img>
              <div className="user-info">
                <strong>Diego fernandes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g"> Acesar perfil</a>

          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="teste imagem"></img>
              <div className="user-info">
                <strong>Diego fernandes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g"> Acesar perfil</a>

          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="teste imagem"></img>
              <div className="user-info">
                <strong>Diego fernandes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g"> Acesar perfil</a>

          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="teste imagem"></img>
              <div className="user-info">
                <strong>Diego fernandes</strong>
                <span>ReactJs, React Native, Node.js</span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g"> Acesar perfil</a>

          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
