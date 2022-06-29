import styles from './Cards.module.css';

const ThankYouCard = (props) => {
    return (
        <div className={ `${styles.card} ${styles['thank-you-card']}`}>
            <div>
                <img src='images/illustration-thank-you.svg' alt='star icon'/>
            </div>
            <div className={styles['selected-result']}>You Selected {props.selection} out of 5</div>
            <h1>Thank You!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    );
};

export default ThankYouCard;