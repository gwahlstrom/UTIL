import { useContext, useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import SettingsModal from "./Modals/SettingsModal";
import { myContext } from "./Context";

function Navbar(props) {
  const [navActive, setNavActive] = useState(true);
  const [hoverText, setHoverText] = useState("");
  const [hoverActive, setHoverActive] = useState(false);
  const [showModalSettings, setShowModalSettings] = useState(false);
  const { weatherActive, setWeatherActive, setTimerActive, timerActive} = useContext(myContext)

  const openModalSettings = () => {
    setShowModalSettings(true);
  };

  const navClickHandler = () => {
    setNavActive(!navActive);
  };

  const mouseOver = (e) => {
    setHoverActive(true);
    setHoverText(e);
  };
  const mouseLeave = (e) => {
    setHoverActive(false);
    setHoverText("");
  };
  const weatherClickHandler = () => {
    setWeatherActive(!weatherActive);
  }
  const timerClickHandle = () => {
    setTimerActive(!timerActive);
  }


  return (
    <>
      <div className={navActive ? styles.containerActive : styles.containerInactive}>
        <img className={styles.logo} src="/images/greytransparentlogo.png" alt="UTIL logotype" />
        <div className={styles.widgetsContainer}>
          <ul>
            {hoverActive && hoverText === "Calendar" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/calendar-date-fill.svg"
                alt="add calendar icon"
                name="Calendar"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
              />
            </li>
            {hoverActive && hoverText === "Clock" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/clock-fill.svg"
                alt="add clock icon"
                name="Clock"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
              />
            </li>
            {hoverActive && hoverText === "Weather" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/cloud-sun-fill.svg"
                alt="add weather icon"
                name="Weather"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
                onClick={weatherClickHandler}
              />
            </li>
            {hoverActive && hoverText === "Timer" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/stopwatch-fill.svg"
                alt="add timer icon"
                name="Timer"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
                onClick={timerClickHandle}
              />
            </li>
            {hoverActive && hoverText === "Tasklist" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/list-task.svg"
                alt="add task list icon"
                name="Tasklist"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
              />
            </li>
            {hoverActive && hoverText === "Google Search" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/google.svg"
                alt="add google search bar icon"
                name="Google Search"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
              />
            </li>
            {hoverActive && hoverText === "Favorite Tabs" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/bookmark-check-fill.svg"
                alt="add favorite tabs icon"
                name="Favorite Tabs"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
              />
            </li>
            {hoverActive && hoverText === "Calculator" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/calculator-fill.svg"
                alt="add calculator icon"
                name="Calculator"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
              />
            </li>
            {hoverActive && hoverText === "Settings" ? (
              <p className={styles.hooverBox}>{hoverText}</p>
            ) : (
              <></>
            )}
            <li>
              <img
                src="/images/gear-fill.svg"
                alt="open settings icon"
                name="Settings"
                onMouseOver={(e) => mouseOver(e.target.name)}
                onMouseLeave={(e) => mouseLeave(e.target.name)}
                onClick={openModalSettings}
              />
              {showModalSettings ? <SettingsModal setShowModal={setShowModalSettings} /> : null}
            </li>
          </ul>
        </div>

        <div></div>
      </div>
      <div className={navActive ? styles.buttonContainerActive : styles.buttonContainerInactive}>
        {navActive ? (
          <img
            className={styles.arrowLeft}
            src="/images/chevron-double-left.svg"
            alt="show menu icon"
            onClick={navClickHandler}
          />
        ) : (
          <img
            className={styles.arrowRight}
            src="/images/chevron-double-right.svg"
            alt="show menu icon"
            onClick={navClickHandler}
          />
        )}
      </div>
    </>
  );
}

export default Navbar;
