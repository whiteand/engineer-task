/**
 * Adds necessary handlers in order to perform wysiwyg behavior
 *
 * @throws {Error} throws error if one of the parameters has not function addEventListener
 * @throws {Error} If browser has not execCommand function
 *
 * @param {{
 *   editArea: HTMLDivElement,
 *   h1Button: HTMLButtonElement,
 *   h2Button: HTMLButtonElement,
 *   boldButton: HTMLButtonElement,
 *   italicButton: HTMLButtonElement,
 * }} param0
 */
function addWysiwygBehavior({
  editArea,
  h1Button,
  h2Button,
  boldButton,
  italicButton,
}) {
  if (typeof document.execCommand !== "function") {
    throw new Error(
      `This browser has not execCommand functionality on which current implementation relies`
    );
  }

  editArea.contentEditable = true;

  h1Button.addEventListener("click", () => {
    document.execCommand("FormatBlock", null, "h1");

    for (const header of editArea.getElementsByTagName("h1")) {
      header.classList.add("header1-text");
    }
  });
  h2Button.addEventListener("click", () => {
    document.execCommand("FormatBlock", null, "h2");

    for (const header of editArea.getElementsByTagName("h2")) {
      header.classList.add("header2-text");
    }
  });
  italicButton.addEventListener("click", () => {
    document.execCommand("Italic", false, null);
  });
  boldButton.addEventListener("click", () => {
    document.execCommand("Bold", false, null);
  });
}
