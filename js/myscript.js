var header= new Vue({
  el: "#navbar-header",
  data: {
    search: "",
    cart: "#",
    login: "#",
    logo: "img/dark-logo.png",
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
            link: "#",
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
            link: "#",
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
  }

});

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
        icon:"fa fa-twitter-square",
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
