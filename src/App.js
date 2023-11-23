import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login.components';

function App() {
  return (
    <div className='App'>
      <div className='auth-wrapper'>
        <div className='auth-inner'>
      <form>
        <h3>Welcome to OhioIDU</h3>
        <div className="mb-3">
          <label>Login</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Glory to Ohio
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="https://www.youtube.com/watch?v=Zt-Ql9ZE2XI">password?</a>
        </p>
      </form>
      </div>
      </div>
    </div>
  );
}

export default App;
