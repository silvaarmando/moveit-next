import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div
      className={ styles.profileContainer }
    >
      <img
        src="https://github.com/franciscoarmando63.png"
        alt="Francisco Armando"
      />

      <div>
        <strong>Francisco Armando</strong>
        <p>
          <img
            src="icons/level.svg"
            alt="level"
          />
          Level 1
        </p>
      </div>
    </div>
  )
}