import React from 'react';

function Basket({ id, title, image, price, rating }) {
     return (
          <div className="product">
               <div className="product__info">
                    {/* //!this is product info */}
                    <p>{title}</p>
                    <p className="product__price">
                         <small>₹</small>
                         <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                         {Array(rating)
                              .fill()
                              .map((_, i) => (
                                   <p>🎇</p>
                              ))}
                    </div>
               </div>
               <img src={image} alt="" />

               <button>Add to basket</button>
          </div>
     );
}

export default Basket;

// function Product({ id, title, image, price, rating }) {
//  const [{ basket }, dispatch] = useStateValue();
//  console.log(basket);
//  const addToBasket = () => {
//       dispatch({
//            type: 'ADD_TO_BASKET',
//            item: {
//                 id: id,
//                 title: title,
//                 image: image,
//                 price: price,
//                 rating: rating,
//            },
//       });
//  };

//  return (
//       <div className="product">
//            <div className="product__info">
//                 {/* //!this is product info */}
//                 <p>{title}</p>
//                 <p className="product__price">
//                      <small>₹</small>
//                      <strong>{price}</strong>
//                 </p>
//                 <div className="product__rating">
//                      {Array(rating)
//                           .fill()
//                           .map((_, i) => (
//                                <p>🎇</p>
//                           ))}
//                 </div>
//            </div>
//            <img src={image} alt="" />

//            <button onClick={addToBasket}>Add to basket</button>
//       </div>
//  );
// }
