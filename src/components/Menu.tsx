import { useContext } from "react";
import { NameContext } from "../App";

function Menu(data:any){

    let {name} = JSON.parse(useContext(NameContext));

    console.log('Props',data)
    let {menus,color} = data; ///object destructuring
    console.log('Menus',menus) //props.menus
    console.log('Color',color)

    const menuElements = menus.map((menuItem:any)=>{ return <span className="menu-link">{menuItem}</span>});

    return <> {menuElements} <h3>{name} in Menu</h3></>
}

export default Menu;