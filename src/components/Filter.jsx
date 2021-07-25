import React, { useState, useEffect } from 'react';
import '../Filter.css';
import Product from './Product';
import firebase from '../firebase';
function Filter() {
  const [option, setOption] = useState('webdevelopment');
  const [filter, setFilter] = useState([]);
  //   console.log('this is the option = ', option);

  const handelOnClick = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    const categoryRef = firebase.database().ref('category');
    categoryRef.on('value', (snapshot) => {
      const listOfCourse = snapshot.child(`${option}`).val();
      const itemListCourse = [];
      for (let id in listOfCourse) {
        itemListCourse.push(listOfCourse[id]);
      }
      console.log(itemListCourse);
      setFilter(itemListCourse);
    });
  });

  return (
    <div className="filter">
      <select class="form-select" aria-label="Default select example" onChange={handelOnClick}>
        <option selected value="webdevelopment">
          Web Development
        </option>
        <option value="fullstack">Full Stack Developer</option>
        <option value="android">Android Development</option>
      </select>
      <div className="filter__container">
        <div className="filter__cardDiv">
          {filter.map((block) => (
            <Product id={block.id} title={block.title} price={block.price} image={block.image} rating={block.rating} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
{
  /* <label for="cars">Choose a category:</label>
      <div>
        <select name="cars" id="cars">
          <option value="webdevelopment">Web Development</option>
          <option value="fullstack">Full Stack Developer</option>
          <option value="android">Android Development</option>
        </select>
      </div> */
}
// const handelOnClick = (e) => {
//    setOption(e.target.value);
//    const categoryRef = firebase.database().ref('category');
//    categoryRef.on('value', (snapshot) => {
//      const listOfCourse = snapshot.child(`${option}`).val();
//      const itemListCourse = [];
//      for (let id in listOfCourse) {
//        itemListCourse.push(listOfCourse[id]);
//      }
//      console.log(itemListCourse);
//      setFilter(itemListCourse);
//    });
//  };

//  useEffect(() => {
//    const categoryRef = firebase.database().ref('category');
//    categoryRef.on('value', (snapshot) => {
//      const listOfWebDevelopment = snapshot.child('webdevelopment').val();
//      const itemListWebDevelopment = [];
//      for (let id in listOfWebDevelopment) {
//        itemListWebDevelopment.push(listOfWebDevelopment[id]);
//      }
//      console.log(itemListWebDevelopment);
//      setFilter(itemListWebDevelopment);
//    });
//  }, []);
