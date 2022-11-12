import React from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <a href="#">
                        <p>
                            Labour
                            <span>Work App</span>
                        </p>
                    </a>
                </div>
                <div className={styles.button}>
                    <button>Get Job</button>
                </div>
            </header>

        </>
    );
}

export default Header
