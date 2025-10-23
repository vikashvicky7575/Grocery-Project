//BannerImg
import banner1 from '../Assets/BannersImg/banner1.jpg';
import banner2 from '../Assets/BannersImg/banner2.png';

//ProductImg
import tomato from '../Assets/ProductImg/TomatoImg.jpg';
import potato from '../Assets/ProductImg/PotatoImg.jpg';
import onion from '../Assets/ProductImg/OnionImg.jpg';
import drumStick from '../Assets/ProductImg/DrumStickImg.jpg';

export const banners = [
    {
        id: 1,
        src: banner1,
        tagline: "Fresh Fruits EveryDay",
        subtext: "Quality you can trust"
    },
    {
        id: 2,
        src: banner2,
        tagline: "Super Market Products",
        subtext: "Quality For Our policy"
    }

]

export const Products = [
    {
        id: 1,
        name: "Tomato",
        originalPrice: 120,
        price: 89,
        img: tomato,
    },
    {
        id: 2,
        name: "Onion",
        originalPrice: 110,
        price: 78,
        img: onion,
    },
    {
        id: 3,
        name: "Potato",
        originalPrice: 90,
        price: 36,
        img: potato,
    },
    {
        id: 4,
        name: "DrumStick",
        originalPrice: 90,
        price: 50,
        img: drumStick,
    }
]