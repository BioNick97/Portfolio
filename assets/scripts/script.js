function toggleExpand(element) {
  element.classList.toggle('expanded');
  const layer = element.querySelector('.layer');
  layer.style.height = element.classList.contains('expanded') ? 'auto' : '100px';
}

function openTab(tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function openModal(element) {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modalContent');
  const layerContent = element.querySelector('.layer').innerHTML;

  modalContent.innerHTML = layerContent;
  modal.style.display = 'block';

  // Show the description in the modal
  const modalLayer = modalContent.querySelector('.layer');
  modalLayer.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}
