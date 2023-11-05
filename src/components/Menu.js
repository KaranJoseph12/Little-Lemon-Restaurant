import React from 'react'
import delivery from "../images/delivery.jpg"

const Menu = () => {
  const foodItems = [
    { 
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
      description:
        "The Famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: "https://i.ibb.co/317GqZv/Bruchetta.png",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: "https://i.ibb.co/sm6MfcH/desert.jpg",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  
  ];
  return (
    <div className='menu-container'> 
      <div className="menu-header">
        <h2>This Week's Specials</h2>
        <button>Order Online</button>
      </div>

      {/* Menu cards */}
      <div className='cards'>
        {
          foodItems.map(foodItems => <div key={foodItems.id} className='menu-items'>
             <img src={foodItems.image} alt="" />
             <div className='menu-content'>
                  <div className='heading'>
                    <h3>{foodItems.title}</h3>
                    <p>{foodItems.price}</p>
                  </div>
              <p>{foodItems.description}</p>
              <button className='orderbtn'>Order a Delivery        <img 
              src={delivery} alt="orderLogo" /></button>
      
             </div>
          </div>)
        }
      </div>

    </div>
  )
}

export default Menu