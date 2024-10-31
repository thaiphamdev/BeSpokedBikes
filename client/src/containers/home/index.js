import React from 'react';
import './home.css';
import '../../common.css'

const HomePage = () => {
  return (
    <div className="PageContainer">
      <div className="Heading">
        <h1>My Simple React Home Page</h1>
      </div>
      <main>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
      </main>
    </div>
  );
}

export default HomePage;