import { LandingForm } from "./style";

const Landing = ({ setTitle }) => {
  setTitle("Leitor de Livros (Intermináveis)");
  return (
    <LandingForm>
      Bem Vind@s! <br />
      Aqui você encontrará obras que eu escrevi (ou um dia vou escrever...).
      <br />
      Então vai lá e escolha uma!
      <br />
      <br />
      Ah é, espero que gostem e obrigado por ler! <br />
    </LandingForm>
  );
};

export default Landing;
