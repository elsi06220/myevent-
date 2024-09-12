import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="978490493124-e45k5uqc26o011c17atuieu0cco10oao.apps.googleusercontent.com">
      <div className="min-h-screen p-4">
        <div className="absolute top-4 right-2">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;