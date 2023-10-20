function handleModal () {
    const buttonHeader = document.querySelector(".header__button");
    const buttonFaq = document.querySelector(".faq__button");
    const modalController = document.querySelector(".modal__controller");

    buttonHeader.addEventListener("click", function () {
        modalController.showModal();
    })

    buttonFaq.addEventListener("click", function () {
        modalController.showModal();
    })
}

function closeModal () {
    const buttonClose = document.querySelector(".modal__button--close");
    const modalController = document.querySelector(".modal__controller");
    
    buttonClose.addEventListener("click", function () {
        modalController.close();
    })
}

handleModal();
closeModal();