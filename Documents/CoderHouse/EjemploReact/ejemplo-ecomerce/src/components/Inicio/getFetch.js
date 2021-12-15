import Brooklyn from '../images/Brooklyn.png'
import Dallas from '../images/Dallas.png'
import Lakers from '../images/Lakers.png'
import Okland from '../images/Okland.png'
import GBrooklyn from '../images/gorraNets.png'
import GDallas from '../images/gorraDallas.png'
import GLakers from '../images/gorraLaker.png'
import GOkland from '../images/gorraOkland.png'



const productos = [
    {id: 1, title: 'Camiseta Okkland', price: '35 u$d', image: Okland, descripcion: "Camiseta de Okkland", categorie: "camisetas" },
    {id: 2, title: 'Camiseta Dallas', price: '39 u$d', image: Dallas, descripcion: "Camiseta de Dallas", categorie: "camisetas"},
    {id: 3, title: 'Camiseta Lakers', price: '45 u$d', image: Lakers, descripcion: "Camiseta de Lakers", categorie: "camisetas"},
    {id: 4, title: 'Camiseta Brooklyn', price: '45 u$d', image: Brooklyn, descripcion: "Camiseta de Brooklyn", categorie: "camisetas"},
    {id: 5, title: 'Gorra Okkland', price: '15 u$d', image: GOkland, descripcion: "Gorra de Okkland", categorie: "gorras"},
    {id: 6, title: 'Gorra Dallas', price: '20 u$d', image: GDallas, descripcion: "Gorra de Dallas", categorie: "gorras"},
    {id: 7, title: 'Gorra Lakers', price: '30 u$d', image: GLakers, descripcion: "Gorra de Lakers", categorie: "gorras"},
    {id: 8, title: 'Gorra Brooklyn', price: '30 u$d', image: GBrooklyn, descripcion: "Gorra de Brooklyn", categorie: "gorras"}
];

export const getFetch = new Promise((respuesta)=>{
    setTimeout(()=>{
        respuesta(productos)
    }, 3000)
}) 