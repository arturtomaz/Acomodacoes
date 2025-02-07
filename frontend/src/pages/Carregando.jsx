function Carregando() {
  return (
    <div className="bg-[#2752BA] text-center w-screen h-screen flex items-center ">
      <div className="w-full flex flex-col items-center p-[20px] text-[#F6F3F3]">
        <img
          className="mb-[10px] w-[20vw]"
          src="../public/Logotipo.png"
          alt=""
        />
        <h1 className="text-[clamp(30px,4vw,60px)] leading-[40px] mb-[20px]">
          Acomodações
        </h1>
        <h2 className="text-[clamp(15px,2vw,25px)] mb-[20px]">
          As melhores opções de hospedagem na palma da sua mão.
        </h2>
        <div
          className="loading-icon"
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              border: "4px solid #ccc",
              borderTop: "4px solid #F28B20",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
      </div>
    </div>
  );
}

export default Carregando;
