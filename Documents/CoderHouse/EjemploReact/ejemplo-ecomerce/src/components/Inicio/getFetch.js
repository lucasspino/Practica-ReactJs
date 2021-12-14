import Brooklyn from '../images/Brooklyn.png'
import Dallas from '../images/Dallas.png'
import Lakers from '../images/Lakers.png'
import Okland from '../images/Okland.png'



const productos = [
    {id: 1, title: 'Okkland', price: '35 u$d', image: Okland, descripcion: "Camiseta de Okkland"  },
    {id: 2, title: 'Dallas', price: '39 u$d', image: Dallas, descripcion: "Camiseta de Dallas"},
    {id: 3, title: 'Lakers', price: '45 u$d', image: Lakers, descripcion: "Camiseta de Lakers"},
    {id: 4, title: 'Brooklyn', price: '45 u$d', image: Brooklyn, descripcion: "Camiseta de Brooklyn"}
];

export const getFetch = new Promise((respuesta)=>{
    setTimeout(()=>{
        respuesta(productos)
    }, 3000)
}) 