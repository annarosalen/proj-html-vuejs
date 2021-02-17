var header= new Vue({
  el: "#navbar-header",
  data: {
    search: "",
    cart: "#",
    login: "#",
    logo: "img/dark-logo.png",
    indexMenu: 0,
    menu: [
      {
        text: "Home",
        link: "#",
        dropdown:[
          {
            droptext: "Opzione 1",
            droplink: "#",
          },
          {
            droptext: "Opzione 2",
            droplink: "#",
          },
          {
            droptext: "Opzione 3",
            droplink: "#",
          }
        ]
      },
      {
        text: "Pages",
        link: "#",
        dropdown:[
          {
            droptext: "Opzione 1",
            droplink: "#",
          },
          {
            droptext: "Opzione 2",
            droplink: "#",
          },
          {
            droptext: "Opzione 3",
            droplink: "#",
          }
        ]
      },
      {
        text: "Courses",
        link: "#",
        dropdown:[
          {
            droptext: "Opzione 1",
            droplink: "#",
          },
          {
            droptext: "Opzione 2",
            droplink: "#",
          },
          {
            droptext: "Opzione 3",
            droplink: "#",
          }
        ]
      },
      {
        text: "Features",
        link: "#",
        dropdown:[
          {
            droptext: "Opzione 1",
            droplink: "#",
          },
          {
            droptext: "Opzione 2",
            droplink: "#",
          },
          {
            droptext: "Opzione 3",
            droplink: "#",
          }
        ]
      },
      {
        text: "Blog",
        link: "#",
        dropdown:[
          {
            droptext: "Opzione 1",
            droplink: "#",
          },
          {
            droptext: "Opzione 2",
            droplink: "#",
          },
          {
            droptext: "Opzione 3",
            droplink: "#",
          }
        ]
      },
      {
        text: "Shop",
        link: "#",
        dropdown:[
          {
            droptext: "Opzione 1",
            droplink: "#",
          },
          {
            droptext: "Opzione 2",
            droplink: "#",
          },
          {
            droptext: "Opzione 3",
            droplink: "#",
          }
        ]
      }
    ]
  },

  mounted: function(){
    // al caricamento della pagina il dropdown non è visibile
    this.indexMenu = "";
  },

  methods: {

    // al click mostra dropdown
    showDrop:function(index){
      this.indexMenu = index;
    },

    // mouseleave nascondi dropdown
    hideDrop: function(){
      this.indexMenu = "";
    }

  }

});

// **************************************************************
// inserimento caraousel dinamico da finire
new Vue({
  el:"#courses",
  data: {
    indexCard: 0,
    cards: [
      {
        img: "img/course02.jpg",
        price: "$40.00",
        title: "Learning to Write as a Professional Author",
        lessons: "20 Lessons",
        students: "50 Students"
      },
      {
        img: "img/course01.jpg",
        price: "$0.00",
        title: "Customer-centric Info-Tech Strategies",
        lessons: "24 Lessons",
        students: "769 Students"
      },
      {
        img: "img/course03.jpg",
        price: "$19.00",
        title: "Open Programming Courses for Everyone: Python",
        lessons: "17 Lessons",
        students: "62 Students"
      },
      {
        img: "img/course05.jpg",
        price: "$40.00",
        title: "Learning to Write as a Professional Author",
        lessons: "20 Lessons",
        students: "50 Students"
      },
      {
        img: "img/course06.jpg",
        price: "$40.00",
        title: "Learning to Write as a Professional Author",
        lessons: "20 Lessons",
        students: "50 Students"
      },
    ]
  },

  methods: {
    
    scrollRight: function(){
      let carousel = this.$refs['carousel'];

      carousel.scrollLeft += carousel.offsetWidth;

    },

    scrollLeft: function(){
      let carousel = this.$refs['carousel'];

      carousel.scrollLeft -= carousel.offsetWidth;

    }
  }
});

// **************************************************************
var footer= new Vue({
  el:"#footer",
  data: {
    contact: {
      address: "382 NE 191st St # 87394 Miami, FL 33179 - 33899",
      telephone: "+1(305)547-99(9am - 5pm EST, Monday - Friday)",
      email: "support@maxcoach.com"
    },
    firstcolumn: [
      {
        text: "Start here",
        link:"#"
      },
      {
        text: "Blog",
        link:"#"
      },
      {
        text: "About us",
        link:"#"
      }
    ],
    secondcolumn:[
      {
        text: "Success story",
        link: "#"
      },
      {
        text: "Courses",
        link: "#"
      },
      {
        text: "Contact us",
        link: "#"
      }
    ],
    thirdcolumn:[
      {
        text: "Membership",
        link: "#"
      },
      {
        text: "Purchase guide",
        link: "#"
      },
      {
        text: "Privacy policy",
        link: "#"
      },
      {
        text: "Terms of service",
        link: "#"
      }
    ],
    social:[
      {
        icon:"fa fa-facebook-official",
        link:"#"
      },
      {
        icon:"fa fa-twitter",
        link:"#"
      },
      {
        icon:"fa fa-instagram",
        link:"#"
      },
      {
        icon:"fa fa-linkedin-square",
        link:"#"
      }
    ]
  }
})
