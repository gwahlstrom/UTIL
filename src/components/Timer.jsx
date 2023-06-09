import styles from "./Timer.module.scss";

function Timer() {
    return ( <>
    <div className={styles.container}>
        <div className={styles.timerGrabber}>
            <div className={styles.emptyGrabberDiv}></div>
            <img className={styles.grabberIcon} src="/images/grip-horizontal.svg" alt="" />
            <div className={styles.closeIconContainer}>
            <img className={styles.closeIcon} src="/images/x.svg" alt="" />
            </div>
        </div>
        <div className={styles.timerDisplay}>
            <h2>00:00</h2>
        </div>
        <div className={styles.buttonContainer}>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
        </div>
        </> );
}

export default Timer;