import React from 'react';
import { FurnitureList } from '../helpers/MenuList';
import Item from '../components/Item';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className="menuTitle">Our Products</h1>
      <div className="menuList">
        {FurnitureList.map((item, key) => {
          return (
            <Item
              key={key}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
