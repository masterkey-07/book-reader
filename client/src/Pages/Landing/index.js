import { LandingForm } from "./style";

const Landing = ({ setTitle }) => {
  setTitle("Leitor de Livros da Ana");
  return (
    <LandingForm>
      Bem Vinda! <br />
      Aqui você encontrará (intermináveis) obras que seu Namoradinho escreve de
      vez em nunca. <br />
      Então vai lá e escolha uma!
      <br />
      <br />
      Ah é, Saiba que eu Te Amo Muito! <br />
      Meu Amor da Minha Vida!
    </LandingForm>
  );
};

export default Landing;
