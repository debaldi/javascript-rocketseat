const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

const modalWrapperId = document.getElementById('modal-wrapper-id')

buttonOpenModal.onclick = function() {
    modalWrapper
        .classList
        .remove('invisible')
}

document.addEventListener('keydown', function(event){
    
    const isEscKey = event.key === "Escape"
    
    const isInvisibleClass = modalWrapperId.classList.contains('invisible')

    if(isInvisibleClass == false){        
        if(isEscKey){
            modalWrapper.classList.add('invisible')
            console.log(event.key)
        }
    }
})