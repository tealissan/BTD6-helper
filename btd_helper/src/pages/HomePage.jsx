import { Header } from "../components/Header";
import monkeys from "../../backend/BTD6_Helper_Statistic.json";
import "./Homepage.css";
export function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="home-page">
        <div className="monkey-grid">
          {monkeys.map((monkey) => {
            return (
              <>
                <div key={monkey.Monkey} className="monkey-card">
                  <div className="monkey-image-container">
                    <img
                      className="monkey-image"
                      src="../../public/images/DartMonkey.webp"
                    />
                  </div>
                  <div className="monkey-name">{monkey.Monkey}</div>
                  <div className="monkey-type">{monkey.Type}</div>
                  {/* <div className="monkey-build">{monkey.Best Build}</div> */}
                  <div className="monkey-description">{monkey.Description}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
