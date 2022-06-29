
import { useState } from 'react';
import styles from './RatingBar.module.css';

const RatingBar = (props) => {

    const [currentSelection, setCurrentSelection] = useState('');

    const setActiveButtonClass = (number) => {
        if (currentSelection === number) {
            return `${ styles['button-active'] }`;
        } else {
            return '';
        }
    };

    const setRatingSelection = (e) => {
        setCurrentSelection(e.target.innerText);
        props.setSelection(e.target.innerText);
    };

    return (
        <div className={ styles.bar }>
            <ul>
                <li><button
                    className={ setActiveButtonClass('1') }
                    onClick={ (e) => {
                        setRatingSelection(e);
                    } }>1</button></li>
                <li><button
                    className={ setActiveButtonClass('2') }
                    onClick={ (e) => {
                        setRatingSelection(e);
                    } }>2</button></li>
                <li><button
                    className={ setActiveButtonClass('3') }
                    onClick={ (e) => {
                        setRatingSelection(e);
                    } }>3</button></li>
                <li><button
                    className={ setActiveButtonClass('4') }
                    onClick={ (e) => {
                        setRatingSelection(e);
                    } }>4</button></li>
                <li><button
                    className={ setActiveButtonClass('5') }
                    onClick={ (e) => {
                        setRatingSelection(e);
                    } }>5</button></li>
            </ul>
        </div>
    );
};

export default RatingBar;