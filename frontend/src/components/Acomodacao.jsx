import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Acomodacao({ acomodacao }) {
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  useEffect(() => {
    const atualizarFavoritos = () => {
      setFavoritos(JSON.parse(localStorage.getItem("favoritos")) || []);
    };
    window.addEventListener("favoritosAtualizados", atualizarFavoritos);
    return () =>
      window.removeEventListener("favoritosAtualizados", atualizarFavoritos);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function onSeeDetailsClick(acomodacao) {
    navigate(`/acomodacoes/${acomodacao.id}`);
  }

  function toggleFavorito(acomodacao) {
    setFavoritos((prev) => {
      const jaFavorito = prev.some((fav) => fav.id === acomodacao.id);
      const novosFavoritos = jaFavorito
        ? prev.filter((fav) => fav.id !== acomodacao.id) // Remove se já for favorito
        : [...prev, acomodacao]; // Adiciona se não for favorito

      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
      window.dispatchEvent(new Event("favoritosAtualizados")); // Dispara evento
      return novosFavoritos;
    });
  }
  return (
    <div
      key={acomodacao.id}
      className="w-full h-auto flex flex-col rounded-lg relative"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorito(acomodacao);
        }}
        className="absolute top-2 right-2 bg-[#F6F3F3] z-20 text-[#2752BA] px-3 py-1 rounded-full cursor-pointer text-[30px] opacity-85 hover:opacity-100"
      >
        {favoritos.some((fav) => fav.id === acomodacao.id) ? "★" : "☆"}
      </button>

      <div
        className="flex justify-center"
        onClick={() => onSeeDetailsClick(acomodacao)}
      >
        <div
          className="w-full relative cursor-pointer"
          style={{ paddingTop: "100%" }}
        >
          <img
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px] border-transparent"
            src={`http://localhost:8000/images/${acomodacao.id}/${acomodacao["imagem-capa"]}`}
            alt=""
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-20 bg-[#2752BA] w-[2px] h-[90%] bottom-0 left-0"></div>
        <div className="p-[15px] text-[18px]">
          <p
            className="font-medium overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer"
            onClick={() => onSeeDetailsClick(acomodacao)}
            title={acomodacao.nome}
          >
            {acomodacao.nome}
          </p>
          <p
            className="text-[15px] text-[#8A8A8A] overflow-hidden text-ellipsis whitespace-nowrap"
            title={`${acomodacao.localizacao.cidade}, ${acomodacao.localizacao.estado}`}
          >
            {`${acomodacao.localizacao.cidade}, ${acomodacao.localizacao.estado}`}
          </p>
          <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            R${acomodacao.preco_noite}{" "}
            <span className="font-normal">noite</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Acomodacao;
