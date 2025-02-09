import './styles.scss'
import {useEffect, useState} from "react";
import {Spinner} from "../../assets/spinner";

const SignIn = ({setIsSignedIn}) => {
  const [temp, setTemp] = useState("")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogginingIn, setIsLogginingIn] = useState(false)
  const token = localStorage.getItem('token')
  if (!!token) setIsSignedIn(true)

  useEffect(() => {
    if (!!username && !!password) {
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: username,             //"mor_2314"
          password: password             //"83r5^_"
        })
        // body: JSON.stringify({                 //for debug any log/pass
        //   username: "mor_2314",
        //   password: "83r5^_"
        // }),
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text()
            throw new Error(`HTTP ${res.status}: ${text}`);
          }
          return res.json();
        })
        .then(json => {
          localStorage.setItem('token', json.token)
          setIsSignedIn(!!json.token)
        })
        .catch(err => {
          console.error("Error:", err);
          const errorMessage = err.message.split(': ')[1];
          alert(errorMessage);
          window.location.reload();
        });
    }
  }, [username, password]);
  const handleContinue = () => {
    if (!username) {
      setUsername(temp)
      setTemp('')
    } else {
      setPassword(temp)
    }
    setTemp('')
    setIsLogginingIn(true)
  }
  const handleKeyDown = (event) => {
    if (temp.length > 3 &&
      event.key === 'Enter') {
      handleContinue()
    }
  };
  return (
    isLogginingIn && !!password ? <Spinner/> :
      <div className="sign-in">
        <h1>Sign In</h1>
        <div className={'form'}>
          <input
            className="sign-in__input"
            type={!!username ? "password" : "text"}
            placeholder={!username ? "Username" : "Password"}
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="sign-in__button"
            onClick={() => {
              handleContinue()
            }}
          >Continue
          </button>
        </div>
      </div>
  )
}
export default SignIn