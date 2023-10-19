const modalView1 = document.querySelectorAll('.services_modal-1'),
      modalView2 = document.querySelectorAll('.services_modal-2'),
      modalView3 = document.querySelectorAll('.services_modal-3'),
      modalBtn1 = document.querySelectorAll('.button-modal-1'),
      modalBtn2 = document.querySelectorAll('.button-modal-2'),
      modalBtn3 = document.querySelectorAll('.button-modal-3'),
      modalCloses = document.querySelectorAll('.services_modal-close');

let modal_1 = function(modalClick){
    modalView1[modalClick].classList.add('active-modal');   
}
let modal_2 = function(modalClick){
    modalView2[modalClick].classList.add('active-modal');   
}
let modal_3 = function(modalClick){
    modalView3[modalClick].classList.add('active-modal');   
}
modalBtn1.forEach((modalBtn1, i) =>{
    modalBtn1.addEventListener('click', () =>{
        modal_1(i)
    })
})
modalBtn2.forEach((modalBtn2, i) =>{
    modalBtn2.addEventListener('click', () =>{
        modal_2(i)
    })
})
modalBtn3.forEach((modalBtn3, i) =>{
    modalBtn3.addEventListener('click', () =>{
        modal_3(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modalView1.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
        modalView2.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
        modalView3.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


