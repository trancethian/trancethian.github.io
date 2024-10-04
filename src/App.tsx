import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import RepoList from './components/RepoList/RepoList';

import './App.css';

function App() {
  return (
    <>
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <RepoList />
      </div>
    </>
  );
}

export default App;
