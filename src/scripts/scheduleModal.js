//Modal Interaction Script
    const modal = document.getElementById('bookingModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');

    function openModal() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore background scrolling
    }

    // Open when sticky button is clicked
    openBtn.addEventListener('click', openModal);

    // Close when "×" button is clicked
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside modal content
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    // Close when pressing the 'Escape' key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  