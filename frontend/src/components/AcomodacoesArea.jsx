import { useNavigate, useSearchParams } from "react-router-dom";
import Acomodacao from "./Acomodacao";

function AcomodacoesArea({ acomodacoes }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const cidadePesquisa = searchParams.get("cidade")?.trim(); // Remove espaços extras

  function compararStrings(str1, str2) {
    const normaliza = (str) =>
      str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    return normaliza(str1) === normaliza(str2);
  }

  return (
    <div className="w-full min-h-[250px] flex justify-center pb-[50px]">
      <div className="w-[80vw]">
        <div>
          <h2 className="text-[30px] font-medium">
            Hospedagens Disponíveis
          </h2>
        </div>
        {cidadePesquisa &&
        !acomodacoes.some((acomodacao) =>
          compararStrings(acomodacao.localizacao.cidade, cidadePesquisa)
        ) ? (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-[15px] font-semibold text-[18px]">
              Não temos acomodações disponíveis para{" "}
              <span className="italic">{cidadePesquisa}</span>.
            </div>
            <button
              onClick={() => navigate("/acomodacoes")}
              className="text-[#F6F3F3] bg-[#2752BA] px-[10px] py-[5px] cursor-pointer rounded-[20px] hover:bg-[#3061D1]"
            >
              Limpar pesquisa
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-[20px] mb-[10px] text-[#8A8A8A]">
              {cidadePesquisa ? `Exibindo resultados para: ${cidadePesquisa}` : null}
            </h2>
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
              {acomodacoes
                .filter(
                  (acomodacao) =>
                    !cidadePesquisa ||
                    compararStrings(
                      acomodacao.localizacao.cidade,
                      cidadePesquisa
                    ) // Use a função de comparação
                )
                .map((acomodacao) => (
                  <Acomodacao key={acomodacao.id} acomodacao={acomodacao} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AcomodacoesArea;
