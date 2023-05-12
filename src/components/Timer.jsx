import styles from "./Timer.module.scss";

function Timer() {
    return ( <><div className={styles.container}>
        <div className={styles.timerInput}>
            <input type="text" placeholder="00.00"/>
        </div>
        <div className={styles.buttonContainer}>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
        </div></> );
}

export default Timer;