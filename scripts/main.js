/**
 * We use class names only because I do not want to add anything to index.html. And I can avoid this.
 * But surely I'd like to use id's.
 */
addWysiwygBehavior({
  editArea: document.getElementsByClassName("edit-area")[0],
  h1Button: document.getElementsByClassName("head-1")[0],
  h2Button: document.getElementsByClassName("head-2")[0],
  boldButton: document.getElementsByClassName("bold")[0],
  italicButton: document.getElementsByClassName("italic")[0],
});
