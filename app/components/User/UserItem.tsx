import styles from './user.module.css'

export const UserItem = ({ username }: { username: string }) => {

    return (
        <div className={styles.user}>
            <p>{username}</p>
        </div>
    )
}