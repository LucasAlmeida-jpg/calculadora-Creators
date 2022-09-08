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


  function showCreatorCalculator(){
    const showCalculator = document.getElementById("calculator-show")
    if(showCalculator.style.display==="none"){
      showCalculator.style.display = "block"
    } else{
      showCalculator.style.display = "block"
    }
  }

  const
	range = document.getElementById('range'),
	rangeV = document.getElementById('rangeV'),
	setValue = ()=>{
		const
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
		rangeV.innerHTML = `<span>${range.value}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


$(document).ready(function(){
  $(".social-card").on("click", function(){          
    $(".social-card").each(function(){               
      $(this).removeClass("selected");    
    })
    $(this).addClass("selected");        
    console.log($(this).prop("id"));          
  })       
})


