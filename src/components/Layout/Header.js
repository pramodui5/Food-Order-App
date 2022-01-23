import {Fragment} from 'react';

import classes from './Header.module.css';
import bannerImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>        
            <header className={classes.header}>
                <a href="#" className={classes.logo}>ReactMeals</a>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div>
                <img src={bannerImage} className={classes['main-banner']} alt="Delicious food" />
            </div>
        </Fragment>
    )
}

export default Header;
