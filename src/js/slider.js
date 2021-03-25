// const images = document.querySelectorAll('.slider .slider-line img');
// const sliderLine = document.querySelector('.slider-line')
// let count = 0;
// let width;
// function init() {
//     console.log('resize');
//     width = document.querySelector('.slider').offsetWidth; // определем константу -  ширину блоков слайдера
//     sliderLine.style.width = width *images.length +'px'; // задаем стиль ширина блока слайдера как ширина одного слайда умноженная на количество картинок
//     images.forEach(item=>{ //массив проходим по всем фотограиям
//         item.style.width = width +'px'; //каждой задаем ширину как длинна слайдера
//         item.style.height =  'auto'; // задаем  длинны слайдера
//
//     })
//     rollSlider()
// }
//
// window.addEventListener('resize', init) // при изменении размера страницы - запускаем функцию
//
// init();
//
//
// document.querySelector('.slider-next').addEventListener('click',function(){
//     count++;
//     if(count >= images.length ){
//         count = 0;
//
//     }
//     rollSlider()
// })
// document.querySelector('.slider-prev').addEventListener('click',function(){
//     count--;
//     if(count <0 ){
//         count = images.length -1;
//
//     }
//     rollSlider()
// })
//
// function rollSlider() {
//     sliderLine.style.transform = 'translate(-'+count*width+'px)';
// }