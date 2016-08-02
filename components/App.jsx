import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  const repoLink = 'https://github.com/sc0ttwad3/sc0ttwad3.github.com';
  const tempLink = "";
  
  return (
    <div>
      <h1>sc0ttwad3</h1>
      <a href={repoLink}>https://sc0ttwad3.com</a>
      <nav>
        {generateMapMenu()}
      </nav>
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
        <a href="https://www.sc0ttwad3.com" className="extended-link">
          Customization by <span className="link-style">Scott Wade</span>
        </a>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
