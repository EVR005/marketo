function moveFormElement(tagname, targetContainerId) {
  const element = document.getElementsByTagName(tagname)[0];
  const targetContainer = document.getElementById(targetContainerId);

  if (element && targetContainer) {
    targetContainer.appendChild(element);
  }
}

moveFormElement("form", "marketoform");
