document.addEventListener('DOMContentLoaded', function() {


    const tabs = document.querySelectorAll('.tab-button');
    const floorPlanItems = document.querySelectorAll('.floor-plan-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);


            tabs.forEach(t => t.classList.remove('active'));
            floorPlanItems.forEach(item => item.classList.remove('active'));


            this.classList.add('active');
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });

    const modal = document.getElementById("modal-3d");
    const modalClose = document.querySelector(".modal-close");
    const sketchfabContainer = document.getElementById("sketchfab-container");
    const view3dButtons = document.querySelectorAll(".btn-3d-modal");


    function openModal(embedCode) {

        sketchfabContainer.innerHTML = '';
     
        if (embedCode && embedCode.trim() !== '' && !embedCode.trim().startsWith('<!-- **')) {
             sketchfabContainer.innerHTML = embedCode;
        } else {
           
             sketchfabContainer.innerHTML = '<p style="text-align:center; padding: 20px;">3D Model failed to load or not provided</p>';
        }
        modal.style.display = "block";
    }

  
    function closeModal() {
        modal.style.display = "none";
       
        sketchfabContainer.innerHTML = '';
    }

 
    view3dButtons.forEach(button => {
        button.addEventListener('click', function() {
          
            const embedCode = this.getAttribute('data-sketchfab-embed');
            openModal(embedCode);
        });
    });


    modalClose.addEventListener('click', closeModal);

  
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });


    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

});