var filtroTeclas = function (event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

function showCreatorCalculator() {
  const showCalculator = document.getElementById("calculator-show")
  if (showCalculator.style.display === "none") {
    showCalculator.style.display = "block"
  } else {
    showCalculator.style.display = "block"
  }
}

Vue.createApp({

  data() {
    return {
      visible: true,
      showUp: true,
      isUser1: true,
      typeSelected: "",
      socialSelected: "",
      redes: [
        {
          name: "Youtube", icon: "fa-youtube", selected: false, visible: true, contents: ["Inserção", "Shorts", "Colab", "Impulsionamento", "Live"]
        },
        {
          name: "Instagram", icon: "fa-instagram", selected: false, visible: true, contents: ["Carrossel vídeo", "Reels", "Stories", "Stories", "Feed foto", "Feed vídeo", "Colab", "Impulsionamento", "Live"]
        },
        {
          name: "TikTok", icon: "fa-tiktok", selected: false, visible: true, contents: ["Vídeo", "Colab", "Live", "Impulsionamento",]
        },
        {
          name: "Twitter", icon: "fa-twitter", selected: false, visible: true, contents: ["Feed foto", "Feed vídeo", "Colab", "Impulsionamento", "Texto",]
        },
        {
          name: "Newsletter", icon: "fa fa-file-o", selected: false, visible: false, contents: ["Texto", "Imagem",]
        },
        {
          name: "Proprio", icon: "fa fa-user-o", selected: false, visible: false, contents: ["Mentoria", "Aula", "Uso de Imagem", "Locução", "Produto",]
        },
        {
          name: "LinkedIn", icon: "fa-linkedin", selected: false, visible: false, contents: ["Vídeo", "Foto", "Texto", "Colab", "Impulsionamento",]
        },
        {
          name: "WhatsApp", icon: "fa-whatsapp", selected: false, visible: false, contents: ["Foto", "Vídeo", "Texto", "Banner",]
        },
        {
          name: "Facebook", icon: "fa-facebook", selected: false, visible: false, contents: ["Feed foto", "Feed vídeo", "Colab", "Impulsionamento", "Live", "Stories", "Texto",]
        },
        {
          name: "Pinterest", icon: "fa-pinterest", selected: false, visible: false, contents: ["Texto", "Imagem",]
        },
        {
          name: "Podcast", icon: "fa-microphone", selected: false, visible: false, contents: ["Audio",]
        },
        {
          name: "Outros", icon: "fa-paper-plane", selected: false, visible: false, contents: ["Texto", "Imagem",]
        },
      ],
      selectedRedes: [],
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
        ],

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
        ],

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
        ],
        // [ 
        //   1000, 1000, 4000, 5000, 6000, 7000, 9000, 9000, 10000, 10000, 10000, 10000 // LinkedIn
        // ] 
      ],
      networks:[],
      valueEstimated: '',
      quantity: '',
      type: '',
      nome: '',
      email:''
    }
  },

  computed: {

    estimate() {
      let value = 0;

      for (let i = 0; i < this.redes.length; i++) {
        if (this.redes[i].selected) {
          value += this.ranges[i][this.size] * this.posts;
        }
      }

      this.valueEstimated = value;
      return value;
    }
  },
  methods: {
    toggleItens(visible) {
      for (let i = 4; i < this.redes.length; i++) {
        this.redes[i].visible = visible;
      }
    },
    socialName(nome, contents) {
      this.socialSelected = nome;
      this.typeSelected = contents;
    },

    networksSelect(index){
      this.redes[index].selected = !this.redes[index].selected
      if(this.redes[index].selected){
        this.networks.push(this.redes[index].name);
      } else {
        const indice = this.networks.indexOf(this.redes[index].name);
        if (indice !== -1) {
          this.networks.splice(indice, 1);
        }
      }
    },

    sendSimulation(){
      var data = {
        size: this.descriptions[this.size], 
        posts: this.posts,
        networks: this.networks,
        value: [this.valueEstimated * 0.5, this.valueEstimated * 1.5],
        email: this.email,
        type: this.type
      }

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/v1/calculator/send-simulation',
        data: data
      });

    }
  }

}).mount('#calc');

var rellax = new Rellax('.rellax', {
  speed: -0.7,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: true
});
