import { Spinner } from 'react-bootstrap';

export const LoadingScreen = () => {
  return (
    <div className="loading-screen d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status" variant="primary" />
    </div>
  )
};

export default LoadingScreen;
