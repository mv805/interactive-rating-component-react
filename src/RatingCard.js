import { useState } from 'react';
import RatingBar from './RatingBar';
import styles from './Cards.module.css';

const RatingCard = (props) => {

    const [selectedRating, setSelectedRating] = useState('');

    const setSelectionNumber = (selectedNumber) => {
        setSelectedRating(selectedNumber);
    };

    const submitHandler = () => {
        if(selectedRating !== ''){
            props.selectedNumber(selectedRating);
        }
    };

    return (
        <div className={ `${styles.card} ${styles['rating-card']}`}>
            <div className={styles['star-icon']}>
                <img src='images/icon-star.svg' alt='star icon'/>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <RatingBar setSelection={setSelectionNumber}/>
            <button 
            className={ styles['submit-button'] }
            onClick={submitHandler}
            >Submit</button>
        </div>
    );
};

export default RatingCard;