const button = document.getElementById("submit");
const input = document.getElementById("chapterTitle");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listButton = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listButton);
  listButton.textContent = "Delete";
  list.appendChild(listItem);

  listButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
