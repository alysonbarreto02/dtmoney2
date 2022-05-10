import { useState } from 'react';
import Modal from "react-modal";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/newtransactionmodal';

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      
      <NewTransactionModal
      isopen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

