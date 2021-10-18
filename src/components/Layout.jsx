import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";

const Layout = ({ children, playerScore }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const showModalHandler = () => {
    setToggleModal(true);
  };

  const hideModalHandler = () => {
    setToggleModal(false);
  };

  return (
    <>
      <Modal onHideModal={hideModalHandler} toggleModal={toggleModal} />
      <div className="grid grid-rows-layout min-h-screen">
        <Header playerScore={playerScore} />
        <main className="container flex justify-center items-center ">
          {children}
        </main>
        <Footer onShowModal={showModalHandler} />
      </div>
    </>
  );
};

export default Layout;
