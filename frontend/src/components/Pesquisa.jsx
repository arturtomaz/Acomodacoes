import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pesquisa() {
  const navigate = useNavigate();
  const [cidade, setCidade] = useState("");

  function onSearchLocationClick() {
    if (!cidade.trim()) return;

    const query = new URLSearchParams();
    query.set("cidade", cidade);
    navigate(`/acomodacoes?${query.toString()}`);
  }
  return (
    <div className="flex justify-center my-[20px]">
      <div className="relative">
        <input
          className="w-[350px] max-w-[80vw] h-[40px] pr-10 pl-4 bg-[#F6F3F3] rounded-full border border-[#2752BA] focus:outline-none focus:ring-2 focus:ring-[#2752BA]"
          type="text"
          placeholder="Buscar cidade..."
          value={cidade}
          onKeyDown={(e) => e.key === "Enter" && onSearchLocationClick()}
          onChange={(e) => setCidade(e.target.value)}
        />
        {cidade && (
          <button
            onClick={() => {
              setCidade("");
              navigate("/acomodacoes");
            }}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#2752BA] hover:text-[#3061D1] cursor-pointer"
          >
            <X size={18} />
          </button>
        )}
        <Search
          onClick={onSearchLocationClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2752BA] hover:text-[#3061D1] cursor-pointer"
          size={20}
        />
        
      </div>
    </div>
  );
}

export default Pesquisa;
