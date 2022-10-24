console.log(`Conectado`)

const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "darkblue",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]

    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [
            {
                code: "ligtgray",
                img: "./img/air.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]

    },
    {
        id: 3,
        title: "Air Blazer",
        price: 109,
        colors: [
            {
                code: "green",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]

    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]

    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    }
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizese = document.querySelectorAll(".size")

menuItems.forEach ( (item, index) => {
        item.addEventListener("click", ()=> {
        wrapper.style.transforn = `transtex(${-100 * index}vw)`
        choosenProduct = products[index]
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach( (color, index) => {
            color.style.backgroundcolor = choosenProduct.colors[index].code
        })
        // console.log(choosenProduct)
    })

} )

currentProductColors.forEach((color, index) => {
color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.color[index].img
    //console.log(currentProductImg.src, choosenProduct.colors(index).img)
})})

currentProductSizes.forEach( (size) => {
    size.addEventListener("click", () =>{
        currentProductSizes.forEach( (size) => {
            size.style.backgrouncolor = "white"
            size.style.color = "black"
        })
        size.style.backgroundcolor = "black"
        size.style.color = "white"
    })
})
const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () =>{
    payment.style.display = "flex"
})

close.addEventListener("click", () =>{
    payment.style.display = "none"
})