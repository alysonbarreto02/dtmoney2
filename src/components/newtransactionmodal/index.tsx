import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/fechar.svg';
import outcomeImg from "../../assets/saidas.svg";
import incomeImg from "../../assets/entradas.svg";


interface NewTransactionModalProps{
    isopen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isopen, onRequestClose}: NewTransactionModalProps){
    return(
    <Modal isOpen={isopen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
 >

<button type='button' onClick={onRequestClose} className="react-modal-close">
    <img src={closeImg} alt="Fechar" />
</button>

     <Container>
     <h2>Cadastrar transação</h2>

    <input 
        placeholder='Título' 
    />

    <input type="number"
        placeholder='Valor' 
    />

    <TransactionTypeContainer>
        <button type='button'>
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
        </button>

        <button type='button'>
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
        </button>
    </TransactionTypeContainer>

    <input 
    placeholder='Categoria' 
    />

    <button type='submit'>
        Cadastrar
    </button>

     </Container>
    </Modal>

    )
}
