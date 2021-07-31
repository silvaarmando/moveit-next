import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { 
    activeChallenge,
    completeChallenge,
    resetChallenge 
  } = useContext(ChallengesContext);

  const {
    resetCountdown
  } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

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
              onClick={handleChallengeFailed}
            >
              Failed
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completed
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