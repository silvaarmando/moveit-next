import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div
      className={styles.challengeBoxContainer}
    >
      { hasActiveChallenge ? (
        <div
          className={styles.challengeActive}
        >
          <header>Ganhe 400 xp</header>

          <main>
            <img
              src="icons/body.svg"
              alt="Body"
            />
            <strong>New Challenge</strong>
            <p>Do 50 sit-ups</p>
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