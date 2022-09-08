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

Vue.createApp({

  data() {
    return {
      redes: [
        {
          name: "Youtube", icon: "fa-youtube", selected: false, 
        },
        {
          name: "Instagram", icon: "fa-instagram", selected: true, 
        },
        {
          name: "TikTok", icon: "fa-tiktok", selected: true, 
        },
        {
          name: "Twitter", icon: "fa-twitter", selected: false, 
        },
      ],
      size: 0,
      posts: 1,
      descriptions: [
        "1k - 10k",
        "10k - 50k",
        "50k - 100k",
        "100k - 500k",
        "500k - 1M",
        "1M - 10M",
        "a1M - 10M",
        "b10k - 50k",
        "c50k - 100k",
        "d100k - 500k",
        "e500k - 1M",
        "f1M - 10M",
        "g1M - 10M",
      ],
      ranges: [
        [
          1000, 1000, 5000, 9000, 14000, 20000, 25000, 25000, 25000, 25000, 35000, 35000, 35000 // youtube
        ],
        [
          2500, 3500, 4500, 5000, 9000, 10000, 15000, 20000, 23000, 25000, 30000, 40000, 60000 // instagram
        ],
        [
          2500, 3500, 4500, 5000, 9000, 10000, 15000, 20000, 23000, 25000, 30000, 40000, 60000
        ],
        [
          2500, 3500, 4500, 5000, 9000, 10000, 15000, 20000, 23000, 25000, 30000, 40000, 60000
        ]
      ]
    }
  },

  mounted() {
    //
  },

  computed: {
    
    estimate() {
      let value = 0;

      for (let i = 0; i < this.redes.length; i++) {
        if (this.redes[i].selected) {
          value += this.ranges[i][this.size] * this.posts;
        }
      }

      return value;
    }
  }

}).mount('#calc');


