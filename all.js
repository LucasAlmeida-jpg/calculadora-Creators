
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
      index: 0,
      redes: [
        {
          name: "Youtube", icon: "fa-youtube", selected: false, visible: true,
          contents: [{ name: "Shorts", select: false, socialValue: [1000, 4500, 6500, 9500, 12500, 18000, 18000] }], selectedTypes: []
        },
        {
          name: "Instagram", icon: "fa-instagram", selected: false, visible: true,
          contents: [
            { name: "Feed", select: false, socialValue: [1000, 2500, 5500, 9000, 20000, 30000, 35000] },
            { name: "Reels", select: false, socialValue: [1500, 5000, 8000, 14000, 25000, 35000, 45000] },
            { name: "Stories", select: false, socialValue: [1000, 2500, 4000, 7000, 14000, 15000, 25000] },
            { name: "Feed vídeo", select: false, socialValue: [1000, 2500, 4000, 7000, 14000, 15000, 25000] }
          ],
          selectedTypes: []
        },
        {
          name: "TikTok", icon: "fa-tiktok", selected: false, visible: true,
          contents: [
            { name: "Vídeo", select: false, socialValue: [1500, 5000, 10000, 15000, 30000, 35000, 45000] }
          ], selectedTypes: []
        },
        {
          name: "Twitter", icon: "fa-twitter", selected: false, visible: true,
          contents: [
            // { name: "Twitter", select: false },
            { name: "Feed vídeo", select: false, socialValue: [1000, 2000, 7000, 10000, 15000, 15000, 20000] }
          ], selectedTypes: []
        },
        {
          name: "LinkedIn", icon: "fa-linkedin", selected: false, visible: false,
          contents: [
            { name: "Vídeo", select: false },
            { name: "Foto", select: false },
            { name: "Texto", select: false },
            { name: "Colab", select: false },
            { name: "Impulsionamento", select: false }], selectedTypes: []
        },
        // {
        //   name: "Newsletter", icon: "fa fa-file-o", selected: false, visible: false, contents: [{name:"Texto", select:false}, {name:"Imagem",select:false}], selectedTypes: [],
        // },
        // {
        //   name: "Proprio", icon: "fa fa-user-o", selected: false, visible: false, contents: [{name:"Mentoria",select:false}, {name:"Aula", select:false}, {name:"Uso de Imagem",select:false}, {name:"Locução", select:false}, {name:"Produto", select:false},], selectedTypes: []
        // },
        // {
        //   name: "WhatsApp", icon: "fa-whatsapp", selected: false, visible: false, contents: [ {name:"Foto", select:false}, {name:"Vídeo",select:false}, {name:"Texto",select:false}, {name:"Banner",select:false},], selectedTypes: []
        // },
        // {
        //   name: "Facebook", icon: "fa-facebook", selected: false, visible: false, contents: [{name:"Feed foto", select:false}, "Feed vídeo", "Colab", "Impulsionamento", "Live", "Stories", "Texto",], selectedTypes: []
        // },
        // {
        //   name: "Pinterest", icon: "fa-pinterest", selected: false, visible: false, contents: [{name:"Texto", select: false}, {name:"Imagem", select: false}], selectedTypes: []
        // },
        // {
        //   name: "Podcast", icon: "fa-microphone", selected: false, visible: false, contents: [{name:"Audio", select:false}], selectedTypes: []
        // },
        // {
        //   name: "Outros", icon: "fa-regular fa-paper-plane", selected: false, visible: false, contents: [{name:"Texto", select:false}, {name:"Imagem",select:false}], selectedTypes: []
        // },
      ],
      selectedRedes: [],
      size: 0,
      posts: 0,
      descriptions: [
        "1K - 10K",
        "11K - 50K",
        "51K - 100K",
        "101K - 500K",
        "501K - 1M",
        "1,1M - 10M",
        "Super - 10M+",
      ],
    }
  },

  computed: {
    estimate() {
      let size = this.size;
      let value = 0;
      let posts = this.posts;
      for (let i = 0; i < this.redes.length; i++) {
        if (this.redes[i].selected) {
          this.redes[i].contents.forEach(element => {
            if (element.select) {
              element.socialValue?.forEach(function (elemento, indice) {
                console.log(elemento, posts);
                if (indice == size) {
                  value += elemento * posts;
                }
              });
            }
          });
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
      // const selected = this.typeSelected.filter((index) => this.selectedTypes[index])
      let rede = this.redes
      let index = rede.findIndex(obj => obj.name === send);
      // this.redes[index].selectedTypes = selected;
      this.selectedTypes.forEach(function (elemento, indice) {
        rede[index].contents[indice].select = true
      });
      this.redes = rede
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
        return { name: network.name, contents: network.contents.filter(content => content.select === true).map(content => content.name) }
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
        url: 'https://creators.llc/api/v1/calculator/send-simulation',
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
