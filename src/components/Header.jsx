import React, { useEffect, useState } from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonOutline from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import firebase from '../firebase';
import ListIcon from '@material-ui/icons/List';
function Header() {
  const [{ basket, user, wishlist }, dispatch] = useStateValue();
  const [name, setName] = useState('Guest');

  useEffect(() => {
    const ref = firebase.database().ref('history');
    ref.on('value', (snapshot) => {
      if (user) {
        const name = snapshot.child(user.uid).child('detail').child('name').val();
        // console.log('I am a user', user);
        if (name) {
          setName(name);
        } else {
          setName(user.email);
        }
      }
    });
  });
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
    setName('Guest');
  };
  //http://pngimg.com/uploads/amazon/amazon_PNG11.png
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="" />
      </Link>
     
        <a href="https://listview-demo.web.app/" className="header__corona__container">
           <img className="header__corona__logo" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTUuOTc0IDQ5NS45NzQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDk1Ljk3NCA0OTUuOTc0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxnIGlkPSJYTUxJRF80MjdfIj48Zz48cGF0aCBkPSJtNDgzLjQxMSAyNTAuOTc3YzguNDMgMS42NiAxMy45MiA5LjgzIDEyLjI3IDE4LjI1bC02LjE1IDMxLjMyYy0xLjcgOC42Ny0xMC4zIDE0LjIzLTE4Ljk4IDEyLjEtOC4xMy0xLjk5LTEzLjA2LTEwLjMtMTEuNDUtMTguNTFsLjE3LS44NC00MC41NCAxLjg1Yy0xLjIyLjA1LTIuMjguODYtMi42NiAyLjAzLTMuOTYgMTEuOTYtOS4xNyAyMy4zNi0xNS40OCAzNC4wMi0uNjQgMS4wOC0uNTQgMi40NS4yNyAzLjQxbDE3LjkzIDIxLjNjMy41Ni0zLjM5IDguMjEtNS4xNSAxMi45MS01LjE1IDMuOTYgMCA3Ljk2IDEuMjUgMTEuMzUgMy44NSA4LjIxIDYuMjggOS43NyAxOC4wMyAzLjQ5IDI2LjI1bC01LjIgNi43OWMtNi4xIDcuOTgtMTcuNDcgMTAuMTItMjUuNzUgNC40MS03LjEzLTQuOTEtOS43MS0xMy43NC03LjEzLTIxLjQxbC0yNS44My0xMS4zNWMtMS4xNy0uNTEtMi41Mi0uMjEtMy4zNy43My0xMS45NiAxMy4xMy0yNS44OCAyNC40My00MS4zIDMzLjQ1LTEuMDYuNjItMS42MyAxLjgyLTEuNDMgMy4wM2w2LjYxIDQwLjMyIDUuNzItMi4yOWM4LjIxLTMuMjggMTcuNTUuOTIgMjAuNDggOS4zNyAyLjc0IDcuOTEtMS41NiAxNi41Ni05LjMzIDE5LjY2bC0yOS4yMyAxMS43Yy04LjIgMy4yOC0xNy41NC0uOTItMjAuNDctOS4zNy0yLjc0LTcuOTEgMS41Ni0xNi41NiA5LjMzLTE5LjY3bC43OS0uMzEtMjMuNTgtMzMuMDRjLS43MS0xLTEuOTYtMS40NC0zLjE1LTEuMTMtMTQuMDkgMy42NS0yOC44NyA1LjYxLTQ0LjExIDUuNjEtMTIuMDYgMC0yMy44Mi0xLjIzLTM1LjE5LTMuNTUtMS4yLS4yNC0yLjQzLjI3LTMuMDkgMS4zbC0yMy41OSAzNy4wMS44My4zYzcuNjggMi44IDEyLjQ0IDEwLjA1IDEyLjQ0IDE3Ljc3IDAgMi4xNi0uMzcgNC4zNS0xLjE1IDYuNDkgMCAxMS4wNy04LjUxIDE3LjAzLTE4LjkxIDEzLjIzbC0yOC45OS0xMC41N2MtOS43LTMuNTMtMTQuNzYtMTQuMTgtMTEuNDEtMjMuOTEgMy40NC0xMC4wMyAxNC44Ny0xNS4wOSAyNC44My0xMS40NmwuNjcuMjQgNC44LTQzLjM3Yy4xNC0xLjIyLS41LTIuMzgtMS41OS0yLjk1LTE4LjM2LTkuNDgtMzQuODMtMjIuMTEtNDguNy0zNy4xOC0uODQtLjkxLTIuMTUtMS4yMS0zLjI5LS43NGwtMzUuMzggMTQuNTFjNCA3LjQ4IDEuNzUgMTYuOTYtNS41NSAyMS43Ni03LjYyIDUuMDEtMTcuOTEgMi42OC0yMy4xMS00LjhsLTkuMDYtMTMuMDVjLTUuMDctNy4yOS0zLjg5LTE3LjQ1IDMuMDktMjIuOTUgNy40NC01Ljg2IDE4LjA1LTQuMzQgMjMuNjIgMy4wM2wyNC45Mi0yOC4xNmMuODMtLjk0Ljk3LTIuMy4zNi0zLjM5LTEwLjIzLTE4LjQ0LTE3LjIzLTM4LjkyLTIwLjI0LTYwLjY3LS4xNy0xLjIyLTEuMDYtMi4yMS0yLjI1LTIuNDhsLTM5LjgyLTkuMi0uMDQgNC42N2MtLjA0IDQuNjctMS45NiA4LjktNS4wNSAxMS45NS0zLjA4IDMuMDYtNy4zMiA0Ljk0LTEyIDQuOTQtOS4zIDAtMTYuODMtNy41OS0xNi43NC0xNi44OWwuMjYtMjguOTNjLjA4LTkuNDYgNy45LTE3LjQzIDE3LjM1LTE3LjE4IDkuMTcuMjQgMTYuNDkgNy43OCAxNi40NCAxNi45OGwzOS41My05LjI3YzEuMi0uMjggMi4wOS0xLjI3IDIuMjUtMi40OSAzLjEtMjMgMTAuNjctNDQuNTkgMjEuOC02My44Ny42Mi0xLjA4LjUxLTIuNDMtLjMtMy4zOWwtMTguODUtMjIuMTQtMS42NCAyLjE2Yy01LjA4IDYuNzItMTQuNzggNy44OS0yMS4zMyAyLjQ0LTYuMTQtNS4xMi02Ljg5LTE0LjMtMi4wNy0yMC42N2wxMi41Ni0xNi42YzIuOTItMy44NSA3LjM1LTUuODggMTEuODQtNS44OCAzLjExIDAgNi4yNS45OCA4LjkzIDMgNi4yMSA0LjY5IDcuNjcgMTMuMzEgMy41NyAxOS43N2wyNi4zNiAxMS40YzEuMTYuNSAyLjUuMiAzLjM2LS43MyAxMi40NC0xMy42NCAyNy4wMS0yNS4zIDQzLjE5LTM0LjQ3IDEuMDYtLjYxIDEuNjUtMS44IDEuNDctMy4wMWwtNi4wNy00MC40MS01Ljc2IDIuMjJjLTguMjQgMy4xNy0xNy41My0xLjE2LTIwLjM0LTkuNjQtMi42NC03Ljk1IDEuNzgtMTYuNTQgOS41OS0xOS41NGwyOS4zOC0xMS4zYzguMjUtMy4xNyAxNy41MyAxLjE1IDIwLjM0IDkuNjQgMi42NCA3Ljk0LTEuNzcgMTYuNTMtOS41OSAxOS41NGwtLjc5LjMgMjMuMTIgMzMuMzRjLjcgMS4wMSAxLjk0IDEuNDcgMy4xMyAxLjE4IDEzLjQyLTMuMjkgMjcuNDMtNS4wMyA0MS44Ni01LjAzaC4wMmMxLjI2IDAgMi4zOS0uNzcgMi44MS0xLjk2bDcuNjYtMjEuNDJjLTguODctMi43OC0xNC43OC0xMS41My0xMy42NS0yMS4wNyAxLjI5LTEwLjgxIDExLjY0LTE4LjQ5IDIyLjQ1LTE3LjEzbDEwLjUyIDEuMzJjMTAuNzIgMS4zNSAxOC43NiAxMC45NSAxNy41OSAyMS43LS45MiA4LjM3LTYuOTQgMTQuODktMTQuNTggMTYuODlsMi42NiAyMy4yMmMuMTQgMS4yNSAxLjA3IDIuMjcgMi4zMSAyLjU0IDE3Ljc4IDMuOTEgMzQuNTUgMTAuNTIgNDkuODUgMTkuMzcgMS4wNy42MSAyLjM5LjUyIDMuMzQtLjI2bDMxLjczLTI1Ljc1LTQuODItMy44M2MtNi45My01LjUtNy45MS0xNS42OS0yLjAzLTIyLjQyIDUuNS02LjMxIDE1LjE1LTYuODcgMjEuNy0xLjY2bDI0LjY1IDE5LjU3YzYuOTMgNS40OSA3LjkxIDE1LjY5IDIuMDMgMjIuNDItNS41IDYuMy0xNS4xNSA2Ljg2LTIxLjcgMS42NmwtLjY3LS41My0xNi45OSAzNi44OWMtLjUyIDEuMTEtLjI4IDIuNDIuNTggMy4zIDExLjk2IDEyLjI1IDIyLjE0IDI2LjI1IDMwLjEyIDQxLjU3LjU4IDEuMTEgMS43OSAxLjc0IDMuMDMgMS41N2wyNC4wOS0zLjM3Yy0zLjU0LTkuODggMS43MS0yMC44MyAxMS44MS0yNC4xNCA5LjYzLTMuMTYgMjAuMDEgMi4xOSAyMy41NSAxMS42OWw1LjU1IDE0Ljg4YzMuNSA5LjQxLS43IDIwLjE4LTkuOSAyNC4xOC04LjgyIDMuODMtMTguNzcuMzctMjMuNTEtNy40NWwtMTkuOTkgMTMuNTZjLTEuMDUuNzEtMS41MiAyLjAxLTEuMTggMy4yMyA0LjExIDE0LjkgNi4zMSAzMC41OCA2LjMxIDQ2Ljc4IDAgMi43MS0uMDYgNS40LS4xOSA4LjA3LS4wNSAxLjIzLjY0IDIuMzYgMS43NiAyLjg1bDM3LjQ4IDE2LjM3IDEuMTgtNi4wNWMxLjY2LTguNDMgOS44My0xMy45MiAxOC4yNS0xMi4yN3oiIGZpbGw9IiNmNzk1OTUiLz48L2c+PC9nPjxlbGxpcHNlIGN4PSIzMjUuNzMxIiBjeT0iMTU1LjY3NyIgZmlsbD0iI2VlNjE2MSIgcng9IjI0Ljc1NiIgcnk9IjIwLjY5OSIvPjxjaXJjbGUgY3g9IjIzNi4zOTQiIGN5PSIyODQuNTc4IiBmaWxsPSIjZWU2MTYxIiByPSIyNy4wNTkiLz48Y2lyY2xlIGN4PSIzNDEuODUxIiBjeT0iMjcwLjQ4MSIgZmlsbD0iI2Y5YjFiMSIgcj0iMTkuMzc0Ii8+PGNpcmNsZSBjeD0iMjcwLjI5OSIgY3k9IjM2NS4wMjkiIGZpbGw9IiNmOWIxYjEiIHI9IjE4LjgzNiIvPjxnPjxwYXRoIGQ9Im0xNDIuOTU1IDIzMy42MDljMC02Ny40MDggMzIuMTU3LTEyNy4zMTkgODEuOTQ2LTE2NS4yMjgtNS44MTMuODItMTEuNTUyIDEuOTI4LTE3LjE3IDMuMzA2LTEuMTkuMjktMi40My0uMTctMy4xMy0xLjE4bC0yMy4xMi0zMy4zNC43OS0uM2M3LjgyLTMuMDEgMTIuMjMtMTEuNiA5LjU5LTE5LjU0LTIuODEtOC40OS0xMi4wOS0xMi44MS0yMC4zNC05LjY0bC0yOS4zOCAxMS4zYy03LjgxIDMtMTIuMjMgMTEuNTktOS41OSAxOS41NCAyLjgxIDguNDggMTIuMSAxMi44MSAyMC4zNCA5LjY0bDUuNzYtMi4yMiA2LjA3IDQwLjQxYy4xOCAxLjIxLS40MSAyLjQtMS40NyAzLjAxLTE2LjE4IDkuMTctMzAuNzUgMjAuODMtNDMuMTkgMzQuNDctLjg2LjkzLTIuMiAxLjIzLTMuMzYuNzNsLTI2LjM2LTExLjRjNC4xLTYuNDYgMi42NC0xNS4wOC0zLjU3LTE5Ljc3LTIuNjgtMi4wMi01LjgyLTMtOC45My0zLTQuNDkgMC04LjkyIDIuMDMtMTEuODQgNS44OGwtMTIuNTYgMTYuNmMtNC44MiA2LjM3LTQuMDcgMTUuNTUgMi4wNyAyMC42NyA2LjU1IDUuNDUgMTYuMjUgNC4yOCAyMS4zMy0yLjQ0bDEuNjQtMi4xNiAxOC44NSAyMi4xNGMuODEuOTYuOTIgMi4zMS4zIDMuMzktMTEuMTMgMTkuMjgtMTguNyA0MC44Ny0yMS44IDYzLjg3LS4xNiAxLjIyLTEuMDUgMi4yMS0yLjI1IDIuNDlsLTM5LjUzIDkuMjdjLjA1LTkuMi03LjI3LTE2Ljc0LTE2LjQ0LTE2Ljk4LTkuNDUtLjI1LTE3LjI3IDcuNzItMTcuMzUgMTcuMThsLS4yNiAyOC45M2MtLjA5IDkuMyA3LjQ0IDE2Ljg5IDE2Ljc0IDE2Ljg5IDQuNjggMCA4LjkyLTEuODggMTItNC45NCAzLjA5LTMuMDUgNS4wMS03LjI4IDUuMDUtMTEuOTVsLjA0LTQuNjcgMzkuODIgOS4yYzEuMTkuMjcgMi4wOCAxLjI2IDIuMjUgMi40OCAzLjAxIDIxLjc1IDEwLjAxIDQyLjIzIDIwLjI0IDYwLjY3LjYxIDEuMDkuNDcgMi40NS0uMzYgMy4zOWwtMjQuOTIgMjguMTZjLTUuNTctNy4zNy0xNi4xOC04Ljg5LTIzLjYyLTMuMDMtNi45OCA1LjUtOC4xNiAxNS42Ni0zLjA5IDIyLjk1bDkuMDYgMTMuMDVjNS4yIDcuNDggMTUuNDkgOS44MSAyMy4xMSA0LjggNy4zLTQuOCA5LjU1LTE0LjI4IDUuNTUtMjEuNzZsMzUuMzgtMTQuNTFjMS4xNC0uNDcgMi40NS0uMTcgMy4yOS43NCAxMy44NyAxNS4wNyAzMC4zNCAyNy43IDQ4LjcgMzcuMTggMS4wOS41NyAxLjczIDEuNzMgMS41OSAyLjk1bC00LjggNDMuMzctLjY3LS4yNGMtOS45Ni0zLjYzLTIxLjM5IDEuNDMtMjQuODMgMTEuNDYtMy4zNSA5LjczIDEuNzEgMjAuMzggMTEuNDEgMjMuOTFsMjguOTkgMTAuNTdjMTAuNCAzLjggMTguOTEtMi4xNiAxOC45MS0xMy4yMy43OC0yLjE0IDEuMTUtNC4zMyAxLjE1LTYuNDkgMC03LjcyLTQuNzYtMTQuOTctMTIuNDQtMTcuNzdsLS44My0uMyAyMy41OS0zNy4wMWMuNjYtMS4wMyAxLjg5LTEuNTQgMy4wOS0xLjMgMTEuMzcgMi4zMiAyMy4xMyAzLjU1IDM1LjE5IDMuNTUgMS40MTkgMCAyLjg2MS0uMDE4IDQuMjcyLS4wNTEtNjUuOTI3LTM0Ljc2NS0xMTAuOTA4LTEwMy45ODUtMTEwLjkwOC0xODMuNjk3eiIgZmlsbD0iI2YzN2M3YyIvPjwvZz48Y2lyY2xlIGN4PSIxNTIuNDM4IiBjeT0iMzE5Ljk3MiIgZmlsbD0iI2VlNjE2MSIgcj0iMTkuNjIyIi8+PGc+PHBhdGggZD0ibTI5Ny42NiAyMzMuNjA5aC02LjYzYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDYuNjNjNC4xNDMgMCA3LjUgMy4zNTggNy41IDcuNXMtMy4zNTcgNy41LTcuNSA3LjV6IiBmaWxsPSIjZjliMWIxIi8+PC9nPjxnPjxwYXRoIGQ9Im0yMDkuMzM0IDM2NC43MDloLTYuODEyYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDYuODEyYzQuMTQzIDAgNy41IDMuMzU4IDcuNSA3LjVzLTMuMzU3IDcuNS03LjUgNy41eiIgZmlsbD0iI2Y5YjFiMSIvPjwvZz48Zz48cGF0aCBkPSJtMTM5LjM3NyAyNTUuNDg3aC02LjU2MmMtNC4xNDMgMC03LjUtMy4zNTgtNy41LTcuNXMzLjM1Ny03LjUgNy41LTcuNWg2LjU2MmM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNlZTYxNjEiLz48L2c+PGc+PHBhdGggZD0ibTI3Mi41ODQgMTI0LjI3aC05LjEzMmMtNC4xNDMgMC03LjUtMy4zNTgtNy41LTcuNXMzLjM1Ny03LjUgNy41LTcuNWg5LjEzMmM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNmOWIxYjEiLz48L2c+PGc+PHBhdGggZD0ibTMzMi41NjEgMzQwLjI5NGgtMTAuMDg0Yy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDEwLjA4NGM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXoiIGZpbGw9IiNlZTYxNjEiLz48L2c+PC9nPjxlbGxpcHNlIGN4PSIxOTEuNTQxIiBjeT0iMTc2LjM3NyIgZmlsbD0iI2VlNjE2MSIgcng9IjUxLjY1NCIgcnk9IjQzLjEzOSIgdHJhbnNmb3JtPSJtYXRyaXgoLjc4NSAtLjYxOSAuNjE5IC43ODUgLTY4LjA3MyAxNTYuNDM3KSIvPjwvZz48L3N2Zz4=" alt="" />
           <p className="header__corona__text">Covid-tracker</p>
         </a>
     
      {/* <Link to="https://listview-demo.web.app/">
        <img className="header__logo" src="" alt="" />
       
      </Link> */}
      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <div onClick={handleAuth}>
          <Link to={!user && '/login'} className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello {user ? name : 'Guest'} </span>
              <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
            </div>
          </Link>
        </div>

        <Link to="/wishlist" className="header__link">
          <div className="header__optionBasket header__personIcon">
            <ListIcon />
            <span className="header__optionLineTwo header__basketCount">{wishlist?.length}</span>
            {/* <span className="header__optionLineOne">Return</span>
                         <span className="header__optionLineTwo"> & Order</span> */}
          </div>
        </Link>

        <Link to="/profile" className="header__link">
          <div className="header__option header__personIcon">
            <PersonOutline />
            {/* <span className="header__optionLineOne">Your</span>
                              <span className="header__optionLineTwo">Prime</span> */}
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket header__personIcon">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
{
  /* <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'} </span> */
}
