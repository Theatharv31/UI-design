import React from 'react';
import './Section3.css';

const GameImg = () => {
  return (
    <div className="game-img-container">
      <div className="card-deck">
        {/* Card 1 */}
        <div className="card1">
          <img src="/images/section3/image1.png" className=" img1" alt="Game 1" />
        </div>
        {/* Card 2 */}
        <div className="card"style={{ width: '220px', height: '190px', backgroundColor: '#141414' }}>
          <img src="/images/section3/image2.png" className="card-img-top" alt="Game 2" style={{ width: '220px', height: '190px' }} />
        </div>
        {/* Card 3 */}
        <div className="card" style={{ width: '220px', height: '190px',backgroundColor: '#141414' }}>
          <img src="/images/section3/image3.png" className="card-img-top" alt="Game 3" style={{ width: '220px', height: '190px' }} />
        </div>
        {/* Card 4 */}
        <div className="card"style={{ width: '220px', height: '190px', backgroundColor: '#141414' }}>
          <img src="/images/section3/image4.png" className="card-img-top" alt="Game 4" style={{ width: '220px', height: '190px' }} />
        </div>
      </div>
    </div>
  );
};

const GameInfo = () => {
  return (
    <div className="game-info-container">
      <h2 className="game-title">Mortal Kombat 1</h2>
      <p className="game-content">For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.</p>
      <p className="game-category">Category: Fighting Action-adventure</p>
      <p className="game-listed-date">Listed Date: September 19, 2023</p>
      <p className="game-chain">Chain: Ethereum</p>
      <p className="game-users">Number of users: 439,475</p>
      <button className="play-button">PLAY</button>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="section3-container">
      <GameImg />
      <GameInfo />
    </div>
  );
};

export default Section3;
