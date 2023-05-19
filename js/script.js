const our_programs = document.querySelector('.main__menu__link_with-arrow'),
    arrow = document.querySelector('.main__menu__arrow'),
    our_programs_block = document.querySelector('.main__our-programs');

our_programs.addEventListener('click', function(){
    arrow.classList.toggle('main__menu__arrow_active');
    our_programs_block.classList.toggle('main__our-programs_active');
});