import Header from "../../components/Header";
import background from "../../assets/background.png"
import './styles.css'

function Home() {
  return (
    <div className="App">
        <Header/>
        <div className="conteudo">
          <img 
          src={background} 
          className="backgroundImg" 
          alt="Logo GitHub"
          />
          <div className="info">
            <div>
              <input 
              name="usuario" 
              placeholder="@username"
              >

              </input>
              <button>Buscar</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
