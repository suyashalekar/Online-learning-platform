import React, { useEffect, useState } from 'react';
import '../Home.css';
import { useStateValue } from '../StateProvider';
import firebaseApp from '../firebase';
import Product from './Product';
import SideBar from './SideBar';
function Home() {
  const [{ basket, course, user }, dispatch] = useStateValue();
  const [itemList, setItemList] = useState([]);
  const [testProducts, setTestProducts] = useState([
    {
      id: 1,
      title: 'Beginner Full Stack Web Development: HTML,',
      price: 322,
      image: 'https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg',
      rating: 4,
    },
    {
      id: 2,
      title: 'Beginner Full Stack Web Development: HTML,',
      price: 322,
      image: 'https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg',
      rating: 4,
    },
    {
      id: 3,
      title: 'Beginner Full Stack Web Development: HTML,',
      price: 322,
      image: 'https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg',
      rating: 4,
    },
    {
      id: 3,
      title: 'Beginner Full Stack Web Development: HTML,',
      price: 322,
      image: 'https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg',
      rating: 4,
    },
    {
      id: 3,
      title: 'Beginner Full Stack Web Development: HTML,',
      price: 322,
      image: 'https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg',
      rating: 4,
    },
    {
      id: 3,
      title: 'Beginner Full Stack Web Development: HTML,',
      price: 322,
      image: 'https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg',
      rating: 4,
    },
  ]);

  useEffect(() => {
    const courseRef = firebaseApp.database().ref('course');
    courseRef.on('value', (snapshot) => {
      const course_from_db = snapshot.child('item').val();
      // console.log('this is courseRef from Home componenet', course_from_db);

      const itemList = [];
      for (let id in course_from_db) {
        itemList.push(course_from_db[id]);
      }

      setItemList(itemList);
    });
  });

  return (
    <div className="home">
      <div className="home__left__container">
        <SideBar />
      </div>

      <div className="home__right__container">
        <div className="home__container">
          <img className="home__image" src="https://img-b.udemycdn.com/browse_components/billboard/ct-on-phone-big.jpg?secure=T_00HlpGq2OOkNIaqIWqNQ%3D%3D%2C1612633275" alt="" />
        </div>

        <div className="home__test">
          <h4>Recommendation</h4>
          <div className="home__test__inner">
            {itemList.map((block) => (
              <Product id={block.id} title={block.title} price={block.price} image={block.image} rating={block.rating} />
            ))}
          </div>
        </div>
      </div>

      {/*//~  ACtual code */}
      {/* <div className="test">
                    {testProducts.map((block) => (
                         <Product id={block.id} title={block.title} price={block.price} image={block.image} rating={block.rating} />
                    ))}
               </div> */}

      {/* PRODUCTS LIST  */}
      <div>{/* <Product id="1" title="Beginner Full Stack Web Development: HTML," price={322} image="https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg" rating={2} />
                    <Product id="2" title="The Complete 2021 Web Development BootCamp" price={754} image="https://img-b.udemycdn.com/course/240x135/822444_a6db.jpg?secure=Zfl39K2-y9f0CLh5wU6ttQ%3D%3D%2C1612522512" rating={2} />
                    <Product id="3" title="The Full Stack Web Development  Bootcamp 2021" price={1112} image="https://img-a.udemycdn.com/course/240x135/364426_2991_5.jpg?Hk50A3cFLyAfJmvWu1ZqvQqEHiyqesjBk1iSrqjNZbqK59UgjbY0SeGx1piOp9wDSnWa0EdC6JQb0ZIwRdTWAFqHvKG6cjZ26KDaFjYnDVPxjhjNJve7Tj2FHTyueKM" rating={2} /> */}</div>

      <div>
        {/* <Product id="4" title="The Full Stack Web Development  Bootcamp 2019" price={999.99} image="https://img-a.udemycdn.com/course/240x135/625204_436a_3.jpg?ackumfyGCySr4uXiW_MjvhV3xFVZXAoJKX0EnSmiMlIoqsmxCdRNfaauF7o6Oj2Isb7Dl0_vy7HwYroPN4knCNg9nQUh0PLT-IrqHhRYA87LWc3rVuJTCVLeuDB0hqUhttps://img-a.udemycdn.com/course/240x135/625204_436a_3.jpg?ackumfyGCySr4uXiW_MjvhV3xFVZXAoJKX0EnSmiMlIoqsmxCdRNfaauF7o6Oj2Isb7Dl0_vy7HwYroPN4knCNg9nQUh0PLT-IrqHhRYA87LWc3rVuJTCVLeuDB0hqUhttps://img-a.udemycdn.com/course/240x135/364426_2991_5.jpg?Hk50A3cFLyAfJmvWu1ZqvQqEHiyqesjBk1iSrqjNZbqK59UgjbY0SeGx1piOp9wDSnWa0EdC6JQb0ZIwRdTWAFqHvKG6cjZ26KDaFjYnDVPxjhjNJve7Tj2FHTyueKM" rating={2} />

                    <Product id="5" title="The Result-Oriented Web Developer Course" price={399} image="https://img-a.udemycdn.com/course/240x135/943306_6275_7.jpg?aIn3z-RvaC9XylpmHLFCeSRTq3wabQnmUwtysSv81jXmKLDkXU8DpaIoisY6sDKXAtjziLM2ZTSp7wkP79ggIhWEbxbdc1dYtZYjxBHSWM05qdKofxZcOr0ebsl24SQ" rating={2} />

                    <Product id="6" title="React and Typescript: Build a Portfolio Project" price={421} image="https://img-a.udemycdn.com/course/240x135/606096_3182.jpg?Ghm1d8RJtd5c9FD2_YRbWqUSyqgZRx3WGpzb9ClgLjhWX-EVSVBJH7tzsj_vBbUVzlrJPYvGRklZ2PO7nIFXqvYuJ8PhnxoNUciQ36Iv2prEBw00RGx9gGXz6oJZ" rating={2} /> */}
      </div>
      <div className="test__container">{/* <Product id="7" title="Beginner Full Stack Web Development: HTML," price={429.99} image="https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg" rating={3} />
                    <Product id="8" title="The Complete 2021 Web Development BootCamp" price={503} image="https://img-b.udemycdn.com/course/240x135/822444_a6db.jpg?secure=Zfl39K2-y9f0CLh5wU6ttQ%3D%3D%2C1612522512" rating={2} />
                    <Product id="9" title="The Full Stack Web Development  Bootcamp 2021" price={333} image="https://img-a.udemycdn.com/course/240x135/364426_2991_5.jpg?Hk50A3cFLyAfJmvWu1ZqvQqEHiyqesjBk1iSrqjNZbqK59UgjbY0SeGx1piOp9wDSnWa0EdC6JQb0ZIwRdTWAFqHvKG6cjZ26KDaFjYnDVPxjhjNJve7Tj2FHTyueKM" rating={1} /> */}</div>
      <div className="test__container">
        {/* <Product id="10" title="The Full Stack Web Development  Bootcamp 2019" price={532} image="https://img-a.udemycdn.com/course/240x135/625204_436a_3.jpg?ackumfyGCySr4uXiW_MjvhV3xFVZXAoJKX0EnSmiMlIoqsmxCdRNfaauF7o6Oj2Isb7Dl0_vy7HwYroPN4knCNg9nQUh0PLT-IrqHhRYA87LWc3rVuJTCVLeuDB0hqUhttps://img-a.udemycdn.com/course/240x135/625204_436a_3.jpg?ackumfyGCySr4uXiW_MjvhV3xFVZXAoJKX0EnSmiMlIoqsmxCdRNfaauF7o6Oj2Isb7Dl0_vy7HwYroPN4knCNg9nQUh0PLT-IrqHhRYA87LWc3rVuJTCVLeuDB0hqUhttps://img-a.udemycdn.com/course/240x135/364426_2991_5.jpg?Hk50A3cFLyAfJmvWu1ZqvQqEHiyqesjBk1iSrqjNZbqK59UgjbY0SeGx1piOp9wDSnWa0EdC6JQb0ZIwRdTWAFqHvKG6cjZ26KDaFjYnDVPxjhjNJve7Tj2FHTyueKM" rating={5} />

                    <Product id="11" title="The Result-Oriented Web Developer Course" price={821} image="https://img-a.udemycdn.com/course/240x135/943306_6275_7.jpg?aIn3z-RvaC9XylpmHLFCeSRTq3wabQnmUwtysSv81jXmKLDkXU8DpaIoisY6sDKXAtjziLM2ZTSp7wkP79ggIhWEbxbdc1dYtZYjxBHSWM05qdKofxZcOr0ebsl24SQ" rating={2} />

                    <Product id="12" title="React and Typescript: Build a Portfolio Project" price={146} image="https://img-a.udemycdn.com/course/240x135/606096_3182.jpg?Ghm1d8RJtd5c9FD2_YRbWqUSyqgZRx3WGpzb9ClgLjhWX-EVSVBJH7tzsj_vBbUVzlrJPYvGRklZ2PO7nIFXqvYuJ8PhnxoNUciQ36Iv2prEBw00RGx9gGXz6oJZ" rating={3} /> */}
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="home__row">
                    <Product id="1" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={332.3} image="https://img-a.udemycdn.com/course/240x135/1636374_fc95_3.jpg?EPNfvOTF82NDUCoemH4mcKDlVLI9BhmzcQ6BGUe5d3RqGhGpDj1Ka3xjr8hlyWwp0c0C8kQXVSNbPOm7L8tdBToqT_DuJ1dJO9xEqe9HA4qynSL5D_tmDKdhJo-xCg" rating={4} />

                    <Product id="2" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={129.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={2} />
               </div> */
}

{
  /* <div className="home__row">
                    <Product id="3" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={5} />
                    <Product id="4" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={1} />
                    <Product id="5" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" rating={1} />
               </div> */
}

{
  /* <div className="home__row">
                    <Product id="6" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={2} />
               </div> */
}
