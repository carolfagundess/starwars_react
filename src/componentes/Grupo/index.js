import Personagem from "../Personagem";
import "./Grupo.css";

//recebemos props como parametro
const Grupo = (props) => {
  return props.personagens.length > 0 ? (
    <section
      className="grupo"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: props.corSecundaria,
      }}
    >
      <input
        onChange={(eveto) => props.mudarCor(eveto.target.value, props.nome)}
        value={props.corPrimaria}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="personagens">
        {props.personagens.map((personagem) => (
          <Personagem
            key={personagem.nome}
            id={personagem.id}
            nome={personagem.nome}
            imagem={personagem.imagem}
            ator={personagem.ator}
            corDeFundo={props.corPrimaria}
            aoDeletar={props.aoDeletar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Grupo;
