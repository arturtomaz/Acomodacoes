import FooterItem from "./FooterItem";

function FooterArea() {
  return (
    <div className="w-full">
      <div className="bg-[#2752BA] flex justify-center items-center p-[30px] text-[#F6F3F3]">
        <div className="footerItemsArea w-[80vw] flex justify-around flex-wrap gap-[20px]">
          <FooterItem
            title="Atendimento"
            items={[
              "Central de Ajuda",
              "Opções de Cancelamento",
              "Reportar um Problema",
            ]}
          />
          <FooterItem
            title="Hospedagem"
            items={[
              "Anucie seu Espaço",
              "Recursos para Anfitriões",
              "Fórum da Comunidade",
              "Hospedagem Responsável",
            ]}
          />
          <FooterItem
            title="Outros Recursos"
            items={["Sobre Nós", "Newsroom", "Carreiras", "Investidores"]}
          />
        </div>
      </div>
      <div className="bg-[#F6F3F3] text-[12px] p-[5px] flex justify-center text-center">
        <h1>
          Acomodações © 2025. Todos os direitos são reservados. Desenvolvido por{" "}
          <a
            className="cursor-pointer hover:underline"
            href="https://linkedin.com/in/arturtomaz"
            target="_blank"
          >
            Artur Tribeck
          </a>{" "}
          em React.
        </h1>
      </div>
    </div>
  );
}

export default FooterArea;
