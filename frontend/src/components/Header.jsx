import { useNavigate } from "react-router-dom";

function Header({container}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Cabeçalho */}
      <div className="bg-[#2752BA] w-full flex justify-center h-[100px]">
        <div className={`${container} flex justify-between items-center py-[10px] text-[#F6F3F3]`}>
          <div onClick={() => navigate("/acomodacoes")} className="flex items-center cursor-pointer hover:opacity-90">
            <img className="h-[45px] mr-[5px]" src="/Logotipo.png" alt="" />
            <h1
              className="text-[30px]"
            >
              Acomodações
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
