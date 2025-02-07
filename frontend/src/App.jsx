import { useEffect, useState } from "react";
import "./App.css";
import AcomodacoesArea from "./components/AcomodacoesArea";
import api from "./services/api";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import FavoritadosArea from './components/FavoritadosArea'
import FooterArea from "./components/FooterArea";

function App() {
  const [acomodacoes, setAcomodacoes] = useState([]);
  async function fetchAcomodacoes() {
    try {
      const response = await api.get("/acomodacoes");
      const data = response.data;
      setAcomodacoes(Array.isArray(data) ? data : data.acomodacoes || []);
    } catch (error) {
      alert('Erro ao buscar acomodações.')
      console.error("Erro ao buscar acomodações:", error);
    }
  }
  useEffect(() => {
    fetchAcomodacoes();
  }, []);
  return (
    <div className="">
      <Header container={"w-[80vw]"} />
      <Pesquisa />
      <AcomodacoesArea acomodacoes={acomodacoes} />
      <FavoritadosArea />
      <FooterArea />
    </div>
  );
}

export default App;
