const options = { year: "numeric" };

document.querySelector("#currentdate").textContent =
  new Date().toLocaleDateString("en-US", options);

document.getElementById("modified").innerHTML = document.lastModified;
