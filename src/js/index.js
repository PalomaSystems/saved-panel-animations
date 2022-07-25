import { Modal } from "bootstrap";

window.savedPanel = function () {
  createSavedPanel()

  const savedPanelDiv = document.getElementById("savedPanel");
  const modal = initModal(savedPanelDiv);
  backdrop();

  setTimeout(function () {
    modal.hide();
    setTimeout(() => {
      savedPanelDiv.remove();
    }, 500);
  }, 1000);
};
export const savedPanel = () => {
  createSavedPanel()

  const savedPanelDiv = document.querySelector(".savedPanel");
  const modal = initModal(savedPanelDiv);
  backdrop();

  setTimeout(function () {
    modal.hide();
    setTimeout(() => {
      savedPanelDiv.remove();
    }, 500);
  }, 1000);
};
export const deletedPanel = () => {
  createDeletedPanel()

  const deletedPanelDiv = document.getElementById("deletedPanel");
  const modal = initModal(deletedPanelDiv);
  backdrop();

  setTimeout(function () {
    modal.hide();
    setTimeout(() => {
      deletedPanelDiv.remove();
    }, 500);
  }, 1000);
};
const createSavedPanel = () => {
  var elem = document.createElement("div");
  elem.classList.add("modal", "fade", "savedPanel");
  elem.id = "savedPanel";
  elem.setAttribute("tabindex", "-1");
  elem.setAttribute("role", "dialog");
  elem.setAttribute("aria-labelledby", "savedPanelLabel");
  elem.innerHTML = `
    <div class="modal-dialog" role="document">
      <div class="modal-content savedPanel contentModal">
        <div class="modal-body text-center">
          <p>
            Saved Successful!
          </p>
        </div>
      </div>
    </div>`;
  document.body.appendChild(elem);
}
const createDeletedPanel = () => {
  var elem = document.createElement("div");
  elem.classList.add("modal", "fade", "deletedPanel");
  elem.id = "deletedPanel";
  elem.setAttribute("tabindex", "-1");
  elem.setAttribute("role", "dialog");
  elem.setAttribute("aria-labelledby", "deletedPanelLabel");
  elem.innerHTML = `
    <div class="modal-dialog" role="document">
      <div class="modal-content deletedPanel contentModal">
        <div class="modal-body text-center">
          <p>
            Deleted Successful!
          </p>
        </div>
      </div>
    </div>`;
  document.body.appendChild(elem);
}

function backdrop() {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  modalBackdrop.classList.remove("modal-backdrop");
}

function initModal(panelDiv) {
  const modal = new Modal(panelDiv, {
    backdrop: true,
    keyboard: true,
  });
  modal.show();
  return modal;
}

