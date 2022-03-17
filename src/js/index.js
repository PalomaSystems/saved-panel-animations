import { Modal } from "bootstrap";

window.savedPanel = function () {
  const savedPanel1Div = document.querySelector(".savedPanel1");
  const savedPanel1 = new Modal(savedPanel1Div, {
    backdrop: true,
    keyboard: true,
  });
  savedPanel1.show();
  const modalBackdrop = document.querySelector(".modal-backdrop");
  modalBackdrop.classList.remove("modal-backdrop");
  setTimeout(function () {
    savedPanel1.hide();
  }, 1000);
};
export const savedPanel = () => {
  const savedPanel1Div = document.querySelector(".savedPanel1");
  const savedPanel1 = new Modal(savedPanel1Div, {
    backdrop: true,
    keyboard: true,
  });
  savedPanel1.show();
  const modalBackdrop = document.querySelector(".modal-backdrop");
  modalBackdrop.classList.remove("modal-backdrop");
  setTimeout(function () {
    savedPanel1.hide();
  }, 1000);
};
