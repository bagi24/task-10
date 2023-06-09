// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={require("./images/Profile_Picture.jpg")}
          alt="Profile"
          className="profile-image"
        />
        <h1 className="header-title">Welcome to My Portfolio</h1>
      </header>
      <main>
        <section className="section">
          <h2>About Me</h2>
          <p className="section-text">
            I am web developer with experience in React and JavaScript.
          </p>
        </section>
        <section className="section">
          <h2>Projects</h2>
          <p className="section-text">Here are some of my recent projects:</p>
          <ul className="project-list">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section className="section">
          <h2>Contact</h2>
          <p className="section-text">
            You can reach me bagrat.injgia24@gmail.com
          </p>
        </section>
      </main>
      <footer>
        <p className="footer-text"> &copy; 2023 My Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;
