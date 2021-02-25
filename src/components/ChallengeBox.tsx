import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <div
      className={styles.challengeBoxContainer}
    >
      { activeChallenge ? (
        <div
          className={styles.challengeActive}
        >
          <header>Ganhe { activeChallenge.amount } xp</header>

          <main>
            <img
              src={ `icons/${activeChallenge.type}.svg` }
              alt="Body"
            />
            <strong>New Challenge</strong>
            <p> { activeChallenge.description } </p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Failed
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Succeeded
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber um desafio.
          </strong>
          <p>
            <img
              src="icons/level-up.svg"
              alt="Level up"
            />
            Avance de Level Completando Desafios.
          </p>
        </div>
      )}
    </div>
  )
}