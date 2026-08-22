import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [portfolios, setPortfolios] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch("https://cms-practice-pjg3.onrender.com/api/portfolios/")
      .then((response) => response.json())
      .then((data) => {
        setPortfolios(data);
      })
      .catch((error) => {
        console.error("Portfolioの取得に失敗しました:", error);
      });
  }, []);

  const openPortfolio = (id) => {
    setOpenId(id);
  };

  const closePortfolio = () => {
    setOpenId(null);
  };

  return (
    <>
      <div className="portfolio-grid">
        {portfolios.map((portfolio) => (
          <article
            key={portfolio.id}
            className="portfolio-card"
            onClick={() => openPortfolio(portfolio.id)}
          >
            {portfolio.image && (
              <img
                src={`https://cms-practice-pjg3.onrender.com${portfolio.image}`}
                alt={portfolio.title}
              />
            )}

            <header>
              <h3>{portfolio.title}</h3>
            </header>
          </article>
        ))}
      </div>

      {openId !== null && (
        <div className="portfolio-overlay" onClick={closePortfolio}>
          <div
            className="portfolio-modal"
            onClick={(event) => event.stopPropagation()}
          >
            {portfolios
              .filter((portfolio) => portfolio.id === openId)
              .map((portfolio) => (
                <div key={portfolio.id}>
                  {portfolio.image && (
                    <img
                      src={`https://cms-practice-pjg3.onrender.com${portfolio.image}`}
                      alt={portfolio.title}
                    />
                  )}

                  <h2>{portfolio.title}</h2>

                  <p>{portfolio.description}</p>

                  <p className="technologies">
                    {portfolio.technologies}
                  </p>

                  <button onClick={closePortfolio}>
                    閉じる
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;