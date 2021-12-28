import Brooklyn from '../images/Brooklyn.png'
import Dallas from '../images/Dallas.png'
import Lakers from '../images/Lakers.png'
import Okland from '../images/Okland.png'
import GBrooklyn from '../images/gorraNets.png'
import GDallas from '../images/gorraDallas.png'
import GLakers from '../images/gorraLaker.png'
import GOkland from '../images/gorraOkland.png'



const productos = [
    {id: 1, 
    title: 'Camiseta Okkland', 
    price: 35, 
    image: Okland, 
    descripcion: "Camiseta de Okkland", 
    categorie: "camisetas",
    stock: 3 
},
    {id: 2, 
    title: 'Camiseta Dallas', 
    price: 39, 
    image: Dallas, 
    descripcion: "Camiseta de Dallas", 
    categorie: "camisetas",
    stock: 12
},
    {id: 3, 
    title: 'Camiseta Lakers', 
    price: 45, 
    image: Lakers, 
    descripcion: "Camiseta de Lakers", 
    categorie: "camisetas",
    stock: 15
},
    {id: 4, 
        title: 'Camiseta Brooklyn', 
    price: 45, 
    image: Brooklyn, 
    descripcion: "Camiseta de Brooklyn", 
    categorie: "camisetas",
    stock: 12
},
    {id: 5, 
        title: 'Gorra Okkland', 
    price: 15, 
    image: GOkland, 
    descripcion: "Gorra de Okkland", 
    categorie: "gorras",
    stock: 10
},
    {id: 6, 
        title: 'Gorra Dallas', 
    price: 20, 
    image: GDallas, 
    descripcion: "Gorra de Dallas", 
    categorie: "gorras",
    stock: 5
},
    {id: 7, 
        title: 'Gorra Lakers', 
    price: 30, 
    image: GLakers, 
    descripcion: "Gorra de Lakers", 
    categorie: "gorras",
    stock: 3
},
    {id: 8, 
        title: 'Gorra Brooklyn', 
    price: 30, 
    image: GBrooklyn,
     descripcion: "Gorra de Brooklyn", 
    categorie: "gorras",
    stock: 7
}
];

export const getFetch = new Promise((respuesta)=>{
    setTimeout(()=>{
        respuesta(productos)
    }, 3000)
}) 