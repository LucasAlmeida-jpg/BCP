document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling

        button.classList.toggle('accordion__button--active')

        if(button.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        }
        else {
            accordionContent.style.maxHeight = 0
        }
    })  
})

$(window).scroll(function() {
    var math = $(window).scrollTop() / 750% Math.PI;
    $('#leftgear').css({ transform: 'rotate(' + math + 'rad)' });
    $('#rightgear').css({ transform: 'rotate(-' + math + 'rad)' });
    $('#leftge').css({ transform: 'rotate(-' + math + 'rad)' });
    $('#rightg').css({ transform: 'rotate(-' + math + 'rad)' });
    $('#right').css({ transform: 'rotate(' + math + 'rad)' });
    });


    const toggleButton = document.getElementsByClassName('toggle-button') [0]
    const navbar = document.getElementsByClassName('navbar') [0]
    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('active')

    })

jQuery(document).on("click",".menu-item", function(){
    jQuery(".navbar").removeClass("active");
});





// $(document).ready(function(){
//     $("button").click(function(){
//         $("#ff-next-root").html("Próximo");
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//         $(".ff-back").html("Voltar");
//     });
//   });

