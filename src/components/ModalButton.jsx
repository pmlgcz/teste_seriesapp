import { useState } from 'react';
import Modal from 'react-modal';
import "./ModalButton.css"; 

  Modal.setAppElement("#root");

    export default function ModalButton() {
        const [modalAberto, SetModalAberto] = useState(false);

        function openModal() {
        SetModalAberto(true);
       }

       function closeModal () {
        SetModalAberto(false);
       }

        return (
           
            <div className='container-modal'>
              <button onClick={openModal}>Ver mais </button> 
               <Modal 
                 isOpen={modalAberto}
                 onRequestClose={closeModal}
                 contentLabel="Example Modal"
                 overlayClassName='modal-overlay'
                 className='modal-content'
                 >  
                 <h2>Mais informações sobre a {NomeDaSerie}</h2>
                 <hr></hr>
                 <p>
                     {sinopse}
                 </p>






                 <button onClick={closeModal}>Fechar </button>

               </Modal>




            </div>

        
     )




}
