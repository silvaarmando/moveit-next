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
        <p>Leve 1</p>
      </div>
    </div>
  )
}