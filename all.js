document.querySelectorAll('.accordion__button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling

    button.classList.toggle('accordion__button--active')

    if (button.classList.contains('accordion__button--active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
    }
    else {
      accordionContent.style.maxHeight = 0
    }
  })
})

function showCreatorCalculator() {
  const showCalculator = document.getElementById("calculator-show")
  if (showCalculator.style.display === "none") {
    showCalculator.style.display = "block"
  } else {
    showCalculator.style.display = "block"
  }
}


var filtroTeclas = function(event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

Vue.createApp({

  data() {
    return {
      isUser1: true,
      redes: [
        {
          name: "Youtube", icon: "fa-youtube", selected: false,
        },
        {
          name: "Instagram", icon: "fa-instagram", selected: false,
        },
        {
          name: "TikTok", icon: "fa-tiktok", selected: false,
        },
        {
          name: "Twitter", icon: "fa-twitter", selected: false,
        },
      ],
      size: 0,
      posts: 0,
      descriptions: [
        "1K - 5K",
        "5K - 10K",
        "10K - 30K",
        "30K - 50K",
        "50K - 80K",
        "80K - 100K",
        "100K - 150K",
        "150K - 350K",
        "350K - 550K",
        "550K - 800K",
        "800K - 1M",
        "1M - 5M",
        "5M+",
      ],
      ranges: [

        [
          1000, 1000, 5000, 9000, 14000, 20000, 25000, 25000, 25000, 25000, 35000, 35000, 35000 // youtube
        ],
        [
          2500, 3500, 4500, 5000, 9000, 10000, 15000, 20000, 23000, 25000, 30000, 40000, 60000 // instagram
        ],
        [
          1000, 3000, 4000, 5000, 7500, 9000, 12000, 15000, 15000, 20000, 30000, 35000, 45000 // Tiktok
        ],
        [
          1000, 1000, 1000, 1000, 2500, 4500, 5500, 7500, 9500, 12500, 12500, 15000, 20000 // Twitter
        ]
        
      ]
    }
  },

  mounted() {

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

var rellax = new Rellax('.rellax', {
  speed: -0.4,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: true
});
