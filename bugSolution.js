```javascript
import { useLocation, useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    // Navigate back to the parent route
    navigate(-1);
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleGoBack}>Go back home</button>
    </div>
  );
}
```