import React, { useEffect, useState } from 'react';
import '../Checkout.css';
import { useStateValue } from '../StateProvider';
import Basket from './Basket';
import CheckoutProduct from './CheckoutProduct';
import firebaseApp from '../firebase';
import Subtotal from './Subtotal';
import firebase from '../firebase';
import OrderHistory from './OrderHistory';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//   !style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardGrid: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
  },
}));

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [itemList, setItemList] = useState([]);
  const [name, setName] = useState('Guest');
  const classes = useStyles();
  // console.log(user);

  useEffect(() => {
    const ref = firebase.database().ref('history');
    ref.on('value', (snapshot) => {
      if (user) {
        const item = snapshot.child(user.uid).child('item').val();
        const name = snapshot.child(user.uid).child('detail').child('name').val();
        // console.log('snapshot', snapshot.child(user.uid).child('item').val());
        const itemList = [];
        for (let id in item) {
          itemList.push(item[id]);
        }
        // console.log('this is list itemlist', itemList);
        // console.log('this is list item basket ', basket);
        setItemList(itemList);
        // setItemList(itemList);

        // !for setting up the user
        if (name) {
          setName(name);
        } else {
          setName(user.email);
        }
      }
    });

    // useEffect(() => {
    //      const ref = firebase.database().ref('history');
    //      ref.on('value', (snapshot) => {
    //           if (user) {
    //                const name = snapshot.child(user.uid).child('detail').child('name').val();

    //                if (name) {

    //                     setName(name);
    //                } else {

    //                     setName(user.email);
    //                }
    //           }
    //      });
    // });
  }); //!add =  https://www.operationroi.com/wp-content/uploads/2019/06/how-to-advertise-on-amazon-oproi-operationroi.jpg
  return (
    <div className="checkout">
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} className={classes.cardGrid}>
            {/* check Out left  */}
            <div className="checkout__left">
              <img className="checkout__ad" src="https://img-b.udemycdn.com/browse_components/billboard/ct-on-phone-big.jpg?secure=T_00HlpGq2OOkNIaqIWqNQ%3D%3D%2C1612633275" alt="" />

              <div className="checkout__title">
                <h3> Hello ,{user ? name : 'Guest'}</h3>
                <h2>Your cart</h2>
              </div>
              <div className="checkout__leftBasket">
                {basket.map((basket) => (
                  <CheckoutProduct id={basket.id} title={basket.title} image={basket.image} price={basket.price} rating={basket.rating} />
                ))}
              </div>
              {/* check Out left  */}
            </div>
          </Grid>

          <Grid item xs={12} md={6} className={classes.cardGrid}>
            {/* check Out right  */}
            <div className="checkout__right">
              <Subtotal />

              <div className="checkout__rightHistory">
                <h2>Your Course list</h2>
                {/* Order History */}
                {itemList.map((i) => (
                  <OrderHistory id={i.id} title={i.title} image={i.image} price={i.price} rating={i.rating} />
                ))}
              </div>
            </div>
            {/* check Out right  */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Checkout;

// ! 8.00 12-02-2021
// return (
//      <div className="checkout">
//        {/* check Out left  */}
//        <div className="checkout__left">
//          <img className="checkout__ad" src="https://img-b.udemycdn.com/browse_components/billboard/ct-on-phone-big.jpg?secure=T_00HlpGq2OOkNIaqIWqNQ%3D%3D%2C1612633275" alt="" />

//          <div className="checkout__title">
//            <h3> Hello ,{user ? name : 'Guest'}</h3>
//            <h2>Your cart</h2>
//          </div>
//          <div className="checkout__leftBasket">
//            {basket.map((basket) => (
//              <CheckoutProduct id={basket.id} title={basket.title} image={basket.image} price={basket.price} rating={basket.rating} />
//            ))}
//          </div>
//        </div>
//        {/* check Out right  */}
//        <div className="checkout__right">
//          <Subtotal />

//          <div className="checkout__rightHistory">
//            <h2>Your Course list</h2>
//            {/* Order History */}
//            {itemList.map((i) => (
//              <OrderHistory id={i.id} title={i.title} image={i.image} price={i.price} rating={i.rating} />
//            ))}
//          </div>
//        </div>
//      </div>
//    );

{
  /* {basket.map((basket) => (
                              <Basket title={basket.title} image={basket.image} price={basket.price} rating={basket.rating} />
                         ))} */
}
// const useEffectProduct = () => {
//      const ref = firebase.database().ref('history');
//      ref.on('value', (snapshot) => {
//           const item = snapshot.child(user.uid).child('item').val();
//           // console.log('snapshot', snapshot.child(user.uid).child('item').val());

//           for (let id in item) {
//                itemList.push(item[id]);
//           }
//           console.log('this is list itemlist', itemList);
//           console.log('this is list item basket ', basket);
//           setItemList(itemList);
//      });
// };
// useEffectProduct();
