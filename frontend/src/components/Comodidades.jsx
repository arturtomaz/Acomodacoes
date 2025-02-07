function Comodidades({ nomeImagem, texto }) {
  return (
    <div className="col-span-1">
      <div className="flex items-center">
        <img
          className="w-[50px] mr-[30px]"
          src={`/icons/${nomeImagem}`}
          alt=""
        />
        <p className="text-[16px]">{texto}</p>
      </div>
    </div>
  );
}

export default Comodidades;
