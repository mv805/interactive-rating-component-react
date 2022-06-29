import { useState } from 'react';
import styles from './App.module.css';
import RatingCard from './RatingCard';
import ThankYouCard from './ThankYouCard';

function App() {

  const [selectedRating, setSelectedRating] = useState('');

  if (selectedRating !== '') {
    console.log('chosen:', selectedRating);
    return (
      <div className={ styles.App }>
        <div>
          <ThankYouCard selection={ selectedRating } />
        </div>
        <div className={ styles.attribution }>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/mv805">Matt Villa</a><span>V 1.0.0</span>
        </div>
      </div>

    );
  }

  return (
    <div className={ styles.App }>
      <div>
        <RatingCard selectedNumber={ (selection) => {
          setSelectedRating(selection);
        } } />
      </div>
      <div className={ styles.attribution }>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/mv805">Matt Villa</a><span>V 1.0.0</span>
      </div>
    </div>
  );
}

export default App;
