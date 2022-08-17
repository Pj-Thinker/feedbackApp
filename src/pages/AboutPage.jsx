import Card from '../components/shared/card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>aBOUT THIS PROJECT</h1>
        <p>this is a react app to leave feedback for a product</p>
        <p>version: 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;