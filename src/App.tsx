import './App.css';
import { SearchInput } from './components/SearchInput';

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <h1 className="app__title">🏆 Sports Team Search</h1>
                <p className="app__subtitle">Search for your favorite team and view their recent games</p>
            </header>

            <SearchInput />

            <main className="app__main">
            </main>
        </div>
    );
}

export default App;
