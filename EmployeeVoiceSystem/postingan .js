function openModal(imageUrl) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
  
    modal.style.display = 'block';
    modalImg.src = imageUrl;
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  