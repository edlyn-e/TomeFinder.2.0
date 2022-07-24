import SearchForm from "./components/SearchForm";
import styles from "./App.module.scss";
import logo from "./logo.png";

function App() {
    return (
        <div className={styles.App}>
            <img
                src={logo}
                alt="tomefinder logo"
                className={styles.App__logo}
            />
            <div>
                <header className={styles.App__header}>
                    <h2>TOME FINDER</h2>
                </header>
                <SearchForm />
            </div>
        </div>
    );
}

export default App;
