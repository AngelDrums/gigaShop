import { CartWidget } from './CartWidget'
export const NavBar = ()=>{
    return <>
        <h2>GigaShop</h2>
        <ul>
            <li><a href="#"></a>Cámaras</li>
            <li><a href="#"></a>Sistemas</li>
            <li><a href="#"></a>Sonoff</li>
        </ul>
        <CartWidget/>
    </>;
}