import {  useState } from "react";
import Modal from "react-modal";
import "./ModalButton.css";
import API from "../axios/config";
Modal.setAppElement("#root");

export default function ListItems({
  img,
  nomeSerie,
  anoSerie,
  id,
  sinopseSerie,
}) {
  //Informação//
  const [modalAberto, SetModalAberto] = useState(false);

  function openModal() {
    SetModalAberto(true);
  }

  function closeModal() {
    SetModalAberto(false);
  }

  //Edição//
    const [modalEditar, SetModalEditar] = useState(false);

    function openModalE() {
      SetModalEditar(true);
    }
  
    function closeModalE() {
      SetModalEditar(false);
    }

  // Deletar //

  function deletar(id) {
    if (!confirm(`Realmente deseja deletar a serie "${nomeSerie}"? `)) {
    } else {
      fetch('https://projetoindividual-pamelam3.onrender.com/proximosLancamentos/${id)')
    {
      method: "DELETE".then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
        });
      });
      alert(`Serie "${nomeSerie}" Serie deletada com sucesso!`);
    }
  }

  // Edição //

  const [titulo, setTitulo] = useState(nomeSerie)
  const [ano, setAno] = useState("")
  const [sinopse, setSinopse] = useState("")
  const [imagem, setImagem] = useState("")


  const updateFilme = async(e) => {
    e.preventDefault();
    await API.put(`/series/${id}`,{
        titulo: titulo,
        imagem: imagem,
        sinopse: sinopse,
        ano: ano,
    })
}

  // ================================
  return (
    <>
      <li id="liHome">
        <img src={img} alt="" />
        <p>
          {nomeSerie}
        </p>


        {/* Modal de INFORMAÇÕES */}

        <div className="container-modal">
          <button onClick={openModal}>Mais informações </button>
          <Modal
            isOpen={modalAberto}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <h2 className="titulo-modal"> {nomeSerie}</h2>
            <hr></hr>

            <div className="infos-modal">
              <img src={img} alt="" />
              <p>{sinopseSerie}</p>
            </div>
            <p className="info-extra">Ano de lançamento: {anoSerie} </p>
            <p className="info-extra">Sinopse: {sinopseSerie} </p>
            <hr></hr>

            <button className="button-close" onClick={closeModal}>
              Fechar{" "}
            </button>
          </Modal>
        </div>


        {/* Modal de EDIÇÃO */}

        <div className="container-modal">
          <button onClick={openModalE}>Editar</button>
          <Modal
            isOpen={modalEditar}
            onRequestClose={closeModalE}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <h2>Editar serie {nomeSerie}</h2>
            <hr/>
            <div className="containereditar">
            <form className="formularioeditar">
              <div>
                <label htmlFor="titulo">Título da serie:</label>
                <input type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="ano">Lnçamento:</label>
                <input
                  type="number"
                  required
                  min={2022}
                  max={2023}
                  maxLength={4}
                  minLength={4}
                  name="ano"
                  placeholder={anoSerie}
                  id="ano"
                  value={ano}
                  onChange={(e)=>setAno(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="sinopse">Sinopse:</label>
                <input
                  type="text"
                  required
                  name="sinopse"
                  placeholder={sinopseSerie}
                  id="sinopse"
                  value={sinopse}
                  onChange={(e)=>setRoteiro(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="imagem">Imagem:</label>
                <input
                  type="text"
                  required
                  name="imagem"
                  placeholder="Insira a URL da imagem"
                  id="imagem"
                  value={imagem}
                  onChange={(e)=>setImagem(e.target.value)}
                />
              </div>
              
            </form>
            </div>
            <hr></hr>
            <button className="btneditar" onClick={updateSerie} value="Editar serie" >Editar serie</button>
            <button className="button-close" onClick={closeModalE}>
              Fechar{" "}
            </button>
          </Modal>
        </div>

        <button onClick={() => deletar(id)}>Excluir</button>
      </li>
    </>
  );
  }
}