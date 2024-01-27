import { useState } from 'react'
import Preloader from "./components/Preloader.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">title</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Title</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">description</i>
                <input id="description" type="tel" className="validate" />
                <label htmlFor="description">Content</label>
              </div>
            </div>
          </form>
        </div>
      <Preloader />
      <ul class="collection">
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
      </ul>
    </div>
  )
}

export default App
