import React, { useEffect, useState } from 'react';
import '../Category.css';
// import '../Home.css';
import Product from './Product';
import firebase from '../firebase';
import { useStateValue } from '../StateProvider';
import SubCategory from './SubCategory';

function Category() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [webDevlopment, setWebDevlopment] = useState([]);
  const [fullStack, setFullStack] = useState([]);
  const [android, setAndroid] = useState([]);

  const [list, setList] = useState([]);

  useEffect(() => {
    const categoryRef = firebase.database().ref('category');

    categoryRef.on('value', (snapshot) => {
      const listOfWebDevelopment = snapshot.child('webdevelopment').val();
      const listOfFullStack = snapshot.child('fullstack').val();
      const listOfAndroid = snapshot.child('android').val();

      const itemListWebDevelopment = [];
      const itemListFullStack = [];
      const itemListAndroid = [];

      for (let id in listOfWebDevelopment) {
        itemListWebDevelopment.push(listOfWebDevelopment[id]);
      }

      for (let id in listOfFullStack) {
        itemListFullStack.push(listOfFullStack[id]);
      }

      for (let id in listOfAndroid) {
        itemListAndroid.push(listOfAndroid[id]);
      }
      // console.log('web development', itemListWebDevelopment);
      setWebDevlopment(itemListWebDevelopment);
      setFullStack(itemListFullStack);
      setAndroid(itemListAndroid);
    });
  });

  return (
    <div className=" category">
      <div className="category__container">
        <h4>Web Developement</h4>
        <div className="category__cardDiv">
          {webDevlopment.map((block) => (
            <Product id={block.id} title={block.title} price={block.price} image={block.image} rating={block.rating} />
          ))}
        </div>
      </div>
      <div className="category__container">
        <h4>Full Stack Development</h4>
        <div className="category__cardDiv">
          {fullStack.map((block) => (
            <Product id={block.id} title={block.title} price={block.price} image={block.image} rating={block.rating} />
          ))}
        </div>
      </div>
      <div className="category__container">
        <h4>Android Development</h4>
        <div className="category__cardDiv">
          {android.map((block) => (
            <Product id={block.id} title={block.title} price={block.price} image={block.image} rating={block.rating} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
// {list.map((item) => {
//   return <SubCategory props={item} />;
// })}

// useEffect(() => {
//   const categoryRef = firebase.database().ref('category');
//   if (user) {
//     categoryRef.on('value', (snapshot) => {
//       const listOfCategory = snapshot.val();
//       // console.log(listOfCategory);
//       const itemList = [];
//       for (let id in listOfCategory) {
//         itemList.push(listOfCategory[id]);
//       }
//       console.log(itemList);
//       setList(itemList);
//     });
//   }
// });
