import styles from '../styles/Main.module.scss'
import { FiChevronsDown } from "react-icons/fi"

const Main = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.imgSection}>
                    <div className={styles.dummyImg}></div>
                </div>
                <div className={styles.content}>
                    <h2>How to use?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum sequi delectus nobis quam vero, dolore dolorem quo modi molestiae assumenda dolor provident ipsa enim rem maiores ipsum officia harum possimus neque, quisquam nisi. Sunt sed facilis tempora nemo reiciendis placeat alias delectus laborum hic illo libero, commodi animi doloribus!</p>
                    <button><FiChevronsDown /></button>
                </div>
            </main>
        </>
    );
}

export default Main