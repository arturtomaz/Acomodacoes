function ImagemDetailsArea({ acomodacao, endereco, setImagemSelecionada}) {
  return (
    <img
      onClick={() => setImagemSelecionada(endereco)}
      className="aspect-square object-cover rounded-[20%] cursor-pointer hover:brightness-75"
      src={`http://localhost:8000/images/${acomodacao.id}/${endereco}`}
      alt=""
    />
  );
}

export default ImagemDetailsArea;
