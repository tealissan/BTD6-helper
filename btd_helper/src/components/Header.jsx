// import { NavLink } from "react-router";
import "./Header.css";
export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <img className="logo" src="images/logo.gif" />
          <p className="title">Bloons Tower Defense Guide</p>
        </div>
        <div className="right-section">
          <div className="homepage-section">
            <>
              <span className="homepage-text">Homepage</span>
            </>
          </div>
          <div className="type-section">
            <>
              <span className="type-text">Types</span>
            </>
          </div>
          <div className="monkeyknowledge-section">
            <>
              <span className="monkeyknowledge-text">Monkey Knowledge</span>
            </>
          </div>
          <div className="credits-section">
            <>
              <span className="credits-text">Credits</span>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
