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

export { getButtonLabel };
