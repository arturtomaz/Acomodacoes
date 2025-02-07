import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Header from "../components/Header";
import Pesquisa from "../components/Pesquisa";
import Carregando from "../pages/Carregando";
import Comodidades from "../components/Comodidades";
import FooterArea from "../components/FooterArea";
import ImagemDetailsArea from "../components/ImagemDetailsArea";

function AcomodacaoDetails() {
  const { id } = useParams();
  const [acomodacao, setAcomodacao] = useState(null);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);
    const tempoMinimo = 300;
    const inicioRequisicao = Date.now();
    api
      .get(`/acomodacoes/${id}`)
      .then((response) => {
        const tempoDecorrido = Date.now() - inicioRequisicao;
        const tempoRestante = Math.max(0, tempoMinimo - tempoDecorrido);

        setTimeout(() => {
          setAcomodacao(response.data);
          setCarregando(false);
        }, tempoRestante);
        console.log("Dados da acomodação:", response.data);
      })
      // , alert("Erro ao buscar acomodação. Tente recarregar a página.", error)
      .catch((error) => {
        console.error("Erro ao buscar acomodação:", error),
          alert("Erro ao buscar acomodação. Tente recarregar a página.", error);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <Carregando />;

  return (
    <div>
      <Header container={`w-[80vw] md:w-[70vw]`} />
      <Pesquisa />
      <div className="w-full min-h-[250px] flex items-center flex-col pb-[50px]">
        <div className="w-[80vw] md:w-[70vw]">
          {/* Área das imagens */}
          <div className="flex gap-[1vw] mb-[30px]">
            {/* Imagem grande */}
            <div className="w-[50%]">
              <ImagemDetailsArea
                setImagemSelecionada={setImagemSelecionada}
                acomodacao={acomodacao}
                endereco={acomodacao["imagem-capa"]}
              />
            </div>
            {/* Imagens laterais */}
            <div className="w-[50%] grid grid-cols-2 gap-[1vw]">
              {acomodacao["imagens"].map((nomeImagem, index) => (
                <ImagemDetailsArea
                  setImagemSelecionada={setImagemSelecionada}
                  acomodacao={acomodacao}
                  endereco={nomeImagem}
                  key={index}
                />
              ))}
            </div>
            {/* Imagem Ampliada */}
            {imagemSelecionada && (
              <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-black opacity-80"
                  onClick={() => {
                    setImagemSelecionada(null);
                    document.querySelector("body").style.overflowY = "auto";
                  }}
                ></div>
                <img
                  src={`${
                    import.meta.env.VITE_API_URL || "http://localhost:8000"
                  }/images/${acomodacao.id}/${imagemSelecionada}`}
                  alt="Imagem ampliada"
                  className="relative max-w-[90%] max-h-[90%] rounded-[20px] z-50"
                />
              </div>
            )}
          </div>
          <span className="block bg-[#2752BA] h-[2px] w-full mb-[10px]"></span>

          {/* Área das informações */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-[20px]">
            <div className="col-span-3">
              <div className="mb-[20px]">
                <h1 className="text-[40px] font-medium" title={acomodacao.nome}>
                  {acomodacao.nome}
                </h1>
                <p className="text-[#8A8A8A]">
                  {`${acomodacao.localizacao.cidade}, ${acomodacao.localizacao.estado}`}
                </p>
              </div>
              <div className="flex justify-between shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#F6F3F3] px-[10px] py-[10px] rounded-[20px] mb-[20px]">
                <p>
                  <span className="font-semibold">Anfitriã(o):</span>{" "}
                  <span className="text-[#8A8A8A]">
                    {acomodacao["nome-anfitriao"]}
                  </span>
                </p>
                <p className="font-semibold">{acomodacao.estrelas} ★</p>
              </div>
              <div className="mb-[20px]">
                Descrição:{" "}
                <span className="text-[#8A8A8A]">{acomodacao.descricao}</span>
              </div>

              {/* Área das Comodidades - ainda não está ligada ao json, é igual para todos */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <Comodidades nomeImagem="bed.png" texto="3 camas" />
                <Comodidades
                  nomeImagem="pet-friendly.png"
                  texto="Pet-Friendly"
                />
                <Comodidades nomeImagem="bathtub.png" texto="1 banheiro" />
                <Comodidades nomeImagem="wifi.png" texto="Wi-Fi privativo" />
                <Comodidades nomeImagem="pool.png" texto="Piscina" />
                <Comodidades nomeImagem="beach.png" texto="Acesso à praia" />
              </div>
            </div>

            {/* Área Reserva */}
            <div className="col-span-2 shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#F6F3F3] p-[15px] rounded-[20px]">
              {/* Selecionar Data */}
              {/* Sistema de datas a ser implementado */}
              <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#F6F3F3] px-[15px] py-[10px] rounded-[20px] mb-[20px]">
                <div className="flex justify-between pb-[5px]">
                  <p>Check-in</p>
                  <p className="text-[#8A8A8A]">02/03/2025</p>
                </div>

                <div className="h-[1px] bg-[#E8E8E8]"></div>

                <div className="flex justify-between pt-[5px]">
                  <p>Check-out</p>
                  <p className="text-[#8A8A8A]">04/03/2025</p>
                </div>
              </div>

              {/* Selecionar Hóspedes */}
              <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#F6F3F3] px-[15px] py-[5px] rounded-[20px] mb-[20px]">
                <div className="flex justify-between">
                  <label className="cursor-pointer block" htmlFor="numHospedes">
                    N° de Hóspedes
                  </label>
                  <select
                    className="text-[#8A8A8A]"
                    name="numHospedes"
                    id="numHospedes"
                  >
                    {Array.from({ length: acomodacao.hospedes }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Valores */}
              <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#F6F3F3] px-[15px] py-[10px] rounded-[20px] mb-[20px]">
                <div className="flex justify-between pb-[5px]">
                  <p>Valor por noite</p>
                  <p className="text-[#8A8A8A]">
                    R${acomodacao.preco_noite.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                <div className="flex justify-between pt-[5px]">
                  <p>N° de noites</p>
                  <p className="text-[#8A8A8A]">2</p>
                </div>

                <div className="flex justify-between pt-[5px]">
                  <p>Taxa de serviço</p>
                  <p className="text-[#8A8A8A]">
                    R${acomodacao.taxa_servico.toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </div>

              {/* Total */}
              <div>
                <div className="text-[30px] font-medium flex flex-wrap justify-between mb-[10px]">
                  <p>Total</p>
                  {/* Vezes 2 porque o número de dias está fixo em 2 enquanto eu não implementei o sistema de datas */}
                  <p>
                    R$
                    {(2 * acomodacao.preco_noite + acomodacao.taxa_servico)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </div>
                <button className="text-[20px] w-full bg-[#2752BA] text-[#F6F3F3] px-[10px] py-[8px] rounded-[20px] cursor-pointer hover:bg-[#3061D1]">
                  Reservar agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterArea />
    </div>
  );
}

export default AcomodacaoDetails;
