let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let resetButton = document.getElementById("resetButton");

// Store the original order of the list items
let originalOrder = Array.from(lists);

// Function to handle the dragstart event
function handleDragStart(e) {
  let selected = e.target;

  rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  rightBox.addEventListener("drop", function (e) {
    rightBox.appendChild(selected);
    selected = null;
  });

  leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  leftBox.addEventListener("drop", function (e) {
    leftBox.appendChild(selected);
    selected = null;
  });
}

// Attach the dragstart event listener to each list item
for (list of lists) {
  list.addEventListener("dragstart", handleDragStart);
}

// Reset button click event handler
resetButton.addEventListener("click", function () {
  rightBox.innerHTML = "";

  // Move the list items back to the left box in their original state
  for (item of originalOrder) {
    leftBox.appendChild(item);
  }

  // Attach the dragstart event listener to each list item
  for (list of lists) {
    list.addEventListener("dragstart", handleDragStart);
  }
});
