import React, { useState } from 'react';
import './Section2.css'; // Import CSS file for styling

const Section2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Sample game data with titles, platforms, and image paths
  const games = [
    { id: 1, title: 'FIFA 2023', platform: ['PS4', 'PS5', 'X-Box'], image: '/images/fifa23/image1.jpg' },
    { id: 2, title: 'Call Of Duty: Modern War', platform: ['PS4', 'PS5', 'X-Box'], image: '/images/callofduty/image1.jpg' },
    { id: 3, title: 'Uncharted 4: A Thief End', platform: ['PS4'], image: '/images/athiefend/image1.jpg' },
    { id: 4, title: 'Gran Tourismo', platform: ['PS4', 'PS5'], image: '/images/gt/image1.jpg' },
    { id: 5, title: 'Ratchet & Clank', platform: ['PS5'], image: '/images/ratchet/image1.jpg' },
    { id: 6, title: 'Forza Horizon 5', platform: ['X-Box'], image: '/images/fh5/image1.jpg' },
    // Add more game data here
  ];

  // Filter games based on selected category
  const filteredGames = selectedCategory === 'All' ? games : games.filter(game => game.platform.includes(selectedCategory));

  // Render cards in rows of 4
  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < filteredGames.length; i += 4) {
      const rowCards = filteredGames.slice(i, i + 4).map((game, index) => (
        <div key={index} className="col" style={{ marginTop: '10px' }}>
          <div className="card" style={{ width: '300px', height: '368.89px',backgroundColor: 'transparent', marginBottom: '80px' }}>
            <img src={game.image} className="card-img-top" alt={`Game ${i + index + 1}`} style={{ width: '300px', height: '237px' }} />
            <div className="card-body" style={{  backgroundColor: 'transparent',backdropFilter: 'blur(50px)', color: 'white' }}>
              <h5 className="card-title">{game.title}</h5>
              <span className="label">Activision</span>
              <p className="card-text">{getLabels(game.platform)}</p>
            </div>
          </div>
        </div>
      ));
      rows.push(<div key={i} className="row">{rowCards}</div>);
    }
    return rows;
  };
  
  

  // Get labels for each game
  const getLabels = (platforms) => {
    if (platforms.includes('PS4') && platforms.includes('PS5') && platforms.includes('X-Box')) {
      return 'PS4, PS5, X-Box';
    } else if (platforms.includes('PS4') && platforms.includes('PS5')) {
      return 'PS4, PS5';
    } else if (platforms.includes('PS5') && platforms.includes('X-Box')) {
      return 'PS5, X-Box';
    } else if (platforms.includes('PS4') && platforms.includes('X-Box')) {
      return 'PS4, X-Box';
    } else if (platforms.includes('PS4')) {
      return 'PS4';
    } else if (platforms.includes('PS5')) {
      return 'PS5';
    } else if (platforms.includes('X-Box')) {
      return 'X-Box';
    } else {
      return '';
    }
  };

  return (
    <div className="section2-container">
      <h2 className="section2-title">Newly Released Games</h2>
      <div className="category-options">
        <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</button>
        <button className={selectedCategory === 'PS4' ? 'active' : ''} onClick={() => setSelectedCategory('PS4')}>PS4</button>
        <button className={selectedCategory === 'PS5' ? 'active' : ''} onClick={() => setSelectedCategory('PS5')}>PS5</button>
        <button className={selectedCategory === 'X-Box' ? 'active' : ''} onClick={() => setSelectedCategory('X-Box')}>X-Box</button>
      </div>
      <div className="game-cards">
        {renderCards()}
      </div>
    </div>
  );
};

export default Section2;
