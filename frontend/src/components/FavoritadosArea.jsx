import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function FavoritadosArea() {
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
      const novosFavoritos = prev.filter((fav) => fav.id !== acomodacao.id);
      if (novosFavoritos.length === prev.length) {
        // Adiciona ao favoritos se não estiver
        novosFavoritos.push(acomodacao);
      }

      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
      window.dispatchEvent(new Event("favoritosAtualizados")); // Dispara evento
      return novosFavoritos;
    });
  }

  return (
    <div className="my-[20px] w-full flex justify-center">
      <div className="w-[80vw]">
        <h2 className="text-[30px] font-medium mb-[10px]">Espaços Favoritos</h2>
        <p className="text-[20px]">
          {favoritos.length === 0
            ? "Suas acomodações favoritas aparecerão aqui."
            : ""}
        </p>
        <div className="w-full h-auto relative">
          <div className="flex overflow-x-auto space-x-4">
            {favoritos.map((fav) => (
              <div
                key={fav.id}
                className="flex-shrink-0 w-full max-w-[200px] h-auto flex flex-col rounded-lg relative"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorito(fav);
                  }}
                  className="absolute top-2 right-2 bg-[#F6F3F3] z-20 text-[#2752BA] px-3 py-1 rounded-full cursor-pointer text-[30px] opacity-85 hover:opacity-100"
                >
                  {favoritos.some((fav) => fav.id === fav.id) ? "★" : "☆"}
                </button>

                <div
                  className="flex justify-center"
                  onClick={() => onSeeDetailsClick(fav)}
                >
                  <div
                    className="w-full relative cursor-pointer"
                    style={{ paddingTop: "100%" }}
                  >
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px] border-transparent"
                      src={`http://localhost:8000/images/${fav.id}/${fav["imagem-capa"]}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute z-20 bg-[#2752BA] w-[2px] h-[90%] bottom-0 left-0"></div>
                  <div className="p-[15px] text-[18px]">
                    <p
                      className="font-medium overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer"
                      onClick={() => onSeeDetailsClick(fav)}
                      title={fav.nome}
                    >
                      {fav.nome}
                    </p>
                    <p className="text-[15px] text-[#8A8A8A] overflow-hidden text-ellipsis whitespace-nowrap">
                      {`${fav.localizacao.cidade}, ${fav.localizacao.estado}`}
                    </p>
                    <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      R${fav.preco_noite}{" "}
                      <span className="font-normal">noite</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritadosArea;
