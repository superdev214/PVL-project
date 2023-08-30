import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import Modal from "react-modal";
const AddCartModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: "none",
      borderRadius: "25px",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={true}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <button onClick={closeModal}>close</button> */}
      <div
        className="w-full h-full"
        style={{
          background:
            " linear-gradient(180deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #3B3B3B",
        }}
      >
        <div
          className="flex justify-center items-center text-center sm:block"
          style={{
            background: `linear-gradient(180deg, rgba(123, 97, 255, 0.2) 0%, rgba(255, 255, 255, 0)`,
          }}
        >
          <div
            className=" inline-block text-left rounded-[25px] overflow-hidden align-bottom transition-all transform
        shadow-2xl  sm:align-middle  sm:w-full border-2 border-dashed border-[#7B61FF]"
          >
            <div className="items-center w-full mr-auto ml-auto  max-w-7xl ">
              <div className="md:flex md:justify-between lg:gap-x-[30px]">
                <div className="order-first md:order-last">
                  <img
                    src="/assets/account/netflix icon.svg"
                    alt="noIMG"
                    className="w-[270px] h-[260px] object-cover m-auto"
                  />
                </div>
                <div className="my-auto mr-auto ml-auto max-w-2xl">
                  <div className="flex flex-col items-center pt-6 pb-6 px-4">
                    <p className="text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                      Added To Cart!
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-center text-gray-200">
                      Cart Total: $ 10.00
                    </p>
                    <div className="w-full mt-6">
                      <a href="/proceed">
                        <motion.button
                          whileHover={{ scale: 1.05, color: "#f8e112" }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={classNames({
                            "h-[50px] text-base": true,
                            "px-[50px] w-full lg:text-lg text-white rounded-[25px] border-2 mx-auto border-[#A259FF] text-center font-work font-semibold leading-[22px] my-auto bg-white": true,
                          })}
                          style={{
                            background:
                              "linear-gradient(149deg, #A259FF 0%, #FF6250 100%)",
                          }}
                        >
                          Proceed To Checkout
                        </motion.button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCartModal;
