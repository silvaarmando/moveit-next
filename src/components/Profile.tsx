import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <div
      className={ styles.profileContainer }
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZTREdQwnwKGcMMvW2mEaF-vEaRykRVBu1A&usqp=CAU"
        alt="Francisco Armando"
      />

      <div>
        <strong>Francisco Armando</strong>
        <p>
          <img
            src="icons/level.svg"
            alt="level"
          />
          Level { level }
        </p>
      </div>
    </div>
  );
}