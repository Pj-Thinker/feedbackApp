import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from '../../context/FeedbackContext';
import './App.css';
import Header from '../Header/Header';
import FeedbackList from '../Feedbak/FeedbackList';
import FeedbackStats from '../Feedbak/FeedbackStats';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import AboutPage from '../../pages/AboutPage';
import AboutIconLink from '../AboutIcon/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
