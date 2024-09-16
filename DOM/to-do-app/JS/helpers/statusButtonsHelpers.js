function getButtonLabel(status) {
  switch (status) {
    case "created":
      return "Start";
    case "started":
      return "Stop";
    default:
      return "";
  }
}

function getTaskNewStatus(status) {
  switch (status) {
    case "created":
      return "started";
    case "started":
      return "completed";
    default:
      return;
  }
}

export { getButtonLabel, getTaskNewStatus };
