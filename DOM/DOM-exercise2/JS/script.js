function createPlanElement() {
  const newPlanValue = document.getElementById("newPlanInput").value;

  if (!newPlanValue.trim().length) {
    document.getElementById("newPlanInput").value = "";
    return;
  }
  const planItem = document.createElement("li");
  planItem.textContent = newPlanValue;
  document.getElementById("plansList").appendChild(planItem);
  document.getElementById("newPlanInput").value = "";
}

document.getElementById("addButton").addEventListener("click", () => {
  createPlanElement();
});

document.getElementById("newPlanInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createPlanElement();
  }
});
