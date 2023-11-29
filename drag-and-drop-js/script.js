let containerList = [
  {
    id: "container-1",
    name: "Container 1",
    items: [
      {
        id: "1",
        label: "item1",
      },
      {
        id: "2",
        label: "item2",
      },
      {
        id: "3",
        label: "item3",
      },
    ],
  },
  {
    id: "container-2",
    name: "Container 2",
    items: [
      {
        id: "4",
        label: "item4",
      },
      {
        id: "5",
        label: "item5",
      },
      {
        id: "6",
        label: "item6",
      },
    ],
  },
];

function drawElements() {
  const title = document.createElement("h2");
  title.innerHTML = "Application for drag and drop elements with JavaScript";
  document.body.appendChild(title);

  containerList.map((el) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("id", el.id);
    container.addEventListener("drop", function (event) {
      drop(event, el.id);
    });
    container.addEventListener("dragover", function (event) {
      allowDrop(event);
    });
    document.body.appendChild(container);

    el.items.map((el) => {
      const divItem = document.createElement("div");
      divItem.innerHTML = el.label;
      divItem.setAttribute("id", el.id);
      divItem.classList.add("draggable");
      divItem.setAttribute("draggable", true);
      divItem.addEventListener("dragstart", function (event) {
        drag(event);
      });
      container.appendChild(divItem);
    });
  });
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event, containerId) {
  event.preventDefault();

  let draggedElementId = event.dataTransfer.getData("text");
  let draggedElement = document.getElementById(draggedElementId);

  let destinationContainer = document.getElementById(containerId);
  let sourceContainer = draggedElement.parentElement;

  const sourceContainerId = containerList.findIndex(
    (el) => el.id === sourceContainer.id
  );
  const destinationContainerId = containerList.findIndex(
    (el) => el.id === destinationContainer.id
  );

  let indexForRemovingItem = containerList[sourceContainerId].items.findIndex(
    (el) => el.id === draggedElementId
  );

  if (destinationContainer.classList.contains("container")) {
    destinationContainer.appendChild(draggedElement);

    containerList[sourceContainerId].items.splice(indexForRemovingItem, 1);
    containerList[destinationContainerId].items.push({
      id: draggedElementId,
      label: draggedElement.innerHTML,
    });

  }
  console.log("Container 1:")
  console.table(containerList[0].items);
  console.log("Container 2:")
  console.table(containerList[1].items);
}

drawElements();
