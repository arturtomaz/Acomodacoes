import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function showAcomodacoes() {
    navigate("/acomodacoes");
  }
  return (
    <div className="bg-[#2752BA] text-center w-screen h-[100vh] flex items-center text-[#F6F3F3]]">
      <div className="w-full flex flex-col items-center p-[20px] pb-[50px] text-[#F6F3F3]">
        <img className="mb-[10px] w-[30vw]" src="Logotipo.png" alt="" />
        <h1 className="text-[clamp(30px,4vw,60px)] leading-[40px] mb-[20px]">
          Bem-vindo ao Acomodações
        </h1>
        <h2 className="text-[20px] mb-[50px]">
          As melhores opções de hospedagem na palma da sua mão.
        </h2>
        <button
          onClick={showAcomodacoes}
          className="text-[20px] font-semibold bg-[#F28B20] hover:bg-[#E07C10] px-[20px] py-[8px] cursor-pointer rounded-[20px]"
        >
          Comece sua Jornada!
        </button>
      </div>
    </div>
  );
}

export default Home;
