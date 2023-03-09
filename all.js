
const app = Vue.createApp({
  data() {
    return {
      networks: [],
      valueEstimated: '',
      quantity: '',
      type: '',
      name: '',
      email: '',
      showCalculator: false,
      visible: true,
      showUp: true,
      isUser1: true,
      typeSelected: [],
      socialSelected: [],
      selectedTypes: [],
      redes: [
        {
          name: "Youtube", icon: "fa-youtube", selected: false, visible: true, contents: [{name:"Inserção", select: false}, {name:"Shorts", select:false}, {name:"Colab", select: false}, {name:"Impulsionamento", select:false}, {name:"Live", select:false}], selectedTypes: []
        },
        {
          name: "Instagram", icon: "fa-instagram", selected: false, visible: true, contents: [{name:"Carrossel vídeo", select: false}, {name:"Reels", select: false}, {name:"Stories", select: false}, {name:"Feed foto", select: false}, {name:"Feed vídeo", select: false}, {name:"Colab", select: false}, {name:"Impulsionamento", select: false}, {name:"Live", select:false}], selectedTypes: []
        },
        {
          name: "TikTok", icon: "fa-tiktok", selected: false, visible: true, contents: [{name:"Vídeo", select:false}, {name:"Colab", select:false}, {name:"Live", select:false}, {name:"Impulsionamento", select:false},], selectedTypes: []
        },
        {
          name: "Twitter", icon: "fa-twitter", selected: false, visible: true, contents: [{name:"Feed foto", select:false}, {name:"Feed vídeo", select:false}, {name:"Colab", select:false}, {name:"Impulsionamento", select:false}, {name:"Texto", select:false},], selectedTypes: []
        },
        {
          name: "Newsletter", icon: "fa fa-file-o", selected: false, visible: false, contents: [{name:"Texto", select:false}, {name:"Imagem",select:false}], selectedTypes: []
        },
        {
          name: "Proprio", icon: "fa fa-user-o", selected: false, visible: false, contents: [{name:"Mentoria",select:false}, {name:"Aula", select:false}, {name:"Uso de Imagem",select:false}, {name:"Locução", select:false}, {name:"Produto", select:false},], selectedTypes: []
        },
        {
          name: "LinkedIn", icon: "fa-linkedin", selected: false, visible: false, contents: [{name:"Vídeo", select:false}, {name:"Foto",select:false}, {name:"Texto",select:false}, {name:"Colab",select:false}, {name:"Impulsionamento",select:false}], selectedTypes: []
        },
        {
          name: "WhatsApp", icon: "fa-whatsapp", selected: false, visible: false, contents: [ {name:"Foto", select:false}, {name:"Vídeo",select:false}, {name:"Texto",select:false}, {name:"Banner",select:false},], selectedTypes: []
        },
        {
          name: "Facebook", icon: "fa-facebook", selected: false, visible: false, contents: [{name:"Feed foto", select:false}, "Feed vídeo", "Colab", "Impulsionamento", "Live", "Stories", "Texto",], selectedTypes: []
        },
        {
          name: "Pinterest", icon: "fa-pinterest", selected: false, visible: false, contents: [{name:"Texto", select: false}, {name:"Imagem", select: false}], selectedTypes: []
        },
        {
          name: "Podcast", icon: "fa-microphone", selected: false, visible: false, contents: [{name:"Audio", select:false}], selectedTypes: []
        },
        {
          name: "Outros", icon: "fa-regular fa-paper-plane", selected: false, visible: false, contents: [{name:"Texto", select:false}, {name:"Imagem",select:false}], selectedTypes: []
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
      ]
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
    },


  },
  methods: {
    toggleCalculator() {
      this.showCalculator = true;
    },

    toggleItens(visible) {
      for (let i = 4; i < this.redes.length; i++) {
        this.redes[i].visible = visible;
      }
    },
  

    socialName(nome, contents, selected) {
      this.socialSelected = nome;
      this.typeSelected = contents;
      this.selectedTypes = selected;
    },

    confirmSelection(send) {
      const selected = this.typeSelected.filter((index) => this.selectedTypes[index])
      const index = this.redes.findIndex((elemento) => elemento.name === send);
      this.redes[index].selectedTypes = selected;
    },

    selectedCountNotification(rede) {
      if (rede && rede.selectedTypes) {
        return rede.selectedTypes.filter(index => index).length;
      } else {
        return 0;
      }
    },

    unselectAll() {
      this.selectedTypes = []
    },

    sendSimulation() {
      var selectedsNetworks = this.redes.filter(network => network.selected === true).map(network => { 
        return {name: network.name,contents: network.contents.filter(content => content.select === true).map(content => content.name)}
      });

      var data = {
        size: this.descriptions[this.size],
        posts: this.posts,
        networks: selectedsNetworks,
        value: [this.valueEstimated * 0.5, this.valueEstimated * 1.5],
        email: this.email,
        type: this.type,
        name: this.name
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
