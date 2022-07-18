
 $(window).scroll(function () {
  let $element = $('.pinkSale');
  let $element2 = $('#PartnerLogos');
  let offset = $element.offset().top;
  let offset2 = $element2.offset().top
  let $element3 = $('.BoxesRoadmapContainer');
  let offset3 = $element3.offset().top

      
      if(($(this).scrollTop()>offset-400)&&(($(this).scrollTop()<offset))){
        $element.css('opacity', '0.7')
      }
      else{$element.css('opacity', '0.4')}


      if(($(this).scrollTop()>offset2-400)&&(($(this).scrollTop()<offset2))){
        $element2.css('opacity', '1')
      }
      else{$element2.css('opacity', '0.7')}

      if (($(this).scrollTop() > 3500) && ($(this).scrollTop() < 3900)){
        $('.B-1').css('background', '#384D70');
        $('.BfN-1').css('opacity', '0.1');
        $('.BfN-1').css('background', '#FFFFFF');
        $('.N-1').css('opacity', '0.7');
        $('.N-1').css('color', 'black');
        $('.DoB-1').css('opacity', '1');
        $('.BC-1').css('opacity', '1');

      }
      else{
        $('.B-1').css('background', 'rgba(56, 77, 112, 0.2)');
        $('.BfN-1').css('opacity', '0.2');
        $('.BfN-1').css('background', '#384D70');
        $('.N-1').css('opacity', '1');
        $('.N-1').css('color', 'white');
        $('.DoB-1').css('opacity', '0.5');
        $('.BC-1').css('opacity', '0.5');
        }
        if (($(this).scrollTop() > 3600) && ($(this).scrollTop() < 4100)){
          $('.B-2').css('background', '#384D70');
          $('.BfN-2').css('opacity', '0.1');
          $('.BfN-2').css('background', '#FFFFFF');
          $('.N-2').css('opacity', '0.7');
          $('.N-2').css('color', 'black');
          $('.DoB-2').css('opacity', '1');
          $('.BC-2').css('opacity', '1');
  
        }
        else{
          $('.B-2').css('background', 'rgba(56, 77, 112, 0.2)');
          $('.BfN-2').css('opacity', '0.2');
          $('.BfN-2').css('background', '#384D70');
          $('.N-2').css('opacity', '1');
          $('.N-2').css('color', 'white');
          $('.DoB-2').css('opacity', '0.5');
          $('.BC-2').css('opacity', '0.5');
          }
          if (($(this).scrollTop() > 3900) && ($(this).scrollTop() < 4400)){
            $('.B-3').css('background', '#384D70');
            $('.BfN-3').css('opacity', '0.1');
            $('.BfN-3').css('background', '#FFFFFF');
            $('.N-3').css('opacity', '0.7');
            $('.N-3').css('color', 'black');
            $('.DoB-3').css('opacity', '1');
            $('.BC-3').css('opacity', '1');
    
          }
          else{
            $('.B-3').css('background', 'rgba(56, 77, 112, 0.2)');
            $('.BfN-3').css('opacity', '0.2');
            $('.BfN-3').css('background', '#384D70');
            $('.N-3').css('opacity', '1');
            $('.N-3').css('color', 'white');
            $('.DoB-3').css('opacity', '0.5');
            $('.BC-3').css('opacity', '0.5');
            }
            if (($(this).scrollTop() > 4100) && ($(this).scrollTop() < 4600)){
              $('.B-4').css('background', '#384D70');
              $('.BfN-4').css('opacity', '0.1');
              $('.BfN-4').css('background', '#FFFFFF');
              $('.N-4').css('opacity', '0.7');
              $('.N-4').css('color', 'black');
              $('.DoB-4').css('opacity', '1');
              $('.BC-4').css('opacity', '1');
      
            }
            else{
              $('.B-4').css('background', 'rgba(56, 77, 112, 0.2)');
              $('.BfN-4').css('opacity', '0.2');
              $('.BfN-4').css('background', '#384D70');
              $('.N-4').css('opacity', '1');
              $('.N-4').css('color', 'white');
              $('.DoB-4').css('opacity', '0.5');
              $('.BC-4').css('opacity', '0.5');
              }
              if (($(this).scrollTop() > 4400) && ($(this).scrollTop() < 4900)){
                $('.B-5').css('background', '#384D70');
                $('.BfN-5').css('opacity', '0.1');
                $('.BfN-5').css('background', '#FFFFFF');
                $('.N-5').css('opacity', '0.7');
                $('.N-5').css('color', 'black');
                $('.DoB-5').css('opacity', '1');
                $('.BC-5').css('opacity', '1');
        
              }
              else{
                $('.B-5').css('background', 'rgba(56, 77, 112, 0.2)');
                $('.BfN-5').css('opacity', '0.2');
                $('.BfN-5').css('background', '#384D70');
                $('.N-5').css('opacity', '1');
                $('.N-5').css('color', 'white');
                $('.DoB-5').css('opacity', '0.5');
                $('.BC-5').css('opacity', '0.5');
                }

    if (($(this).scrollTop() > 3700) && ($(this).scrollTop() < 4850)){
        $('.dotOnRoad').css('position', 'fixed'); 
        $('.dotOnRoad').css('top', '285px'); 

    } else {
        $('.dotOnRoad').css('position', 'absolute');
    }
    if ($(this).scrollTop() > 4850) {
        $('.dotOnRoad').css('position', 'absolute'); 
        $('.dotOnRoad').css('top', '1400px'); 
    }
    
  });
 

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls


// Thumbnail image controls
function currentSlide(N) {
  slideIndex = N;
  showSlides(slideIndex);
}

function showSlides(N) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("SliderDot");
  if (N > slides.length) {slideIndex = 1}
  if (N < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function Answer(N){
//  let block = document.getElementById("firstBlock");

switch(N){
    case 1:
      block = document.getElementById("firstBlock");
      if(block.style.display="none")
      {
        block.style.display="block";
        document.getElementById("Second").style.top="340px";
        document.getElementById("Third").style.top="420px";
        document.getElementById("Four").style.top="500px";  
        document.getElementById("SecondBlock").style.display="none";
        document.getElementById("ThirdBlock").style.display="none";
        document.getElementById("FourBlock").style.display="none";
      }
      
      break;
    case 2:
      block = document.getElementById("SecondBlock");
      if(block.style.display="none")
      {
        block.style.display="block";
        document.getElementById("Third").style.top="420px";
        document.getElementById("Four").style.top="500px";  
        document.getElementById("firstBlock").style.display="none";
        document.getElementById("ThirdBlock").style.display="none";
        document.getElementById("FourBlock").style.display="none";
      }
      break;
    case 3:
      block = document.getElementById("ThirdBlock");
      if(block.style.display="none")
      {
        block.style.display="block";
        document.getElementById("Four").style.top="500px";  
        document.getElementById("SecondBlock").style.display="none";
        document.getElementById("firstBlock").style.display="none";
        document.getElementById("FourBlock").style.display="none";
      }
      break;
    case 4:
      block = document.getElementById("FourBlock");
      if(block.style.display="none")
      {
        block.style.display="block";
        document.getElementById("firstBlock").style.display="none";
        document.getElementById("SecondBlock").style.display="none";
        document.getElementById("ThirdBlock").style.display="none";
      }
      break;
    default:
      break;
  }


  
  
}

function CloseTab(N){
  let block ;
  switch(N){
    case 1:
      block = document.getElementById("firstBlock");
      if(block.style.display="block")
      {
        block.style.display="none";
        document.getElementById("Second").style.top="280px";
        document.getElementById("Third").style.top="360px";
        document.getElementById("Four").style.top="440px";  
      }
      
      break;
    case 2:
      block = document.getElementById("SecondBlock");
      if(block.style.display="block")
      {
        block.style.display="none";
        document.getElementById("Third").style.top="360px";
        document.getElementById("Four").style.top="440px";  
      }
      break;
    case 3:
      block = document.getElementById("ThirdBlock");
      if(block.style.display="block")
      {
        block.style.display="none";
        document.getElementById("Four").style.top="440px";  
      }
      break;
    case 4:
      block = document.getElementById("FourBlock");
      if(block.style.display="block")
      {
        block.style.display="none";
      }
  
      break;
    default:
      break;
  }
}
