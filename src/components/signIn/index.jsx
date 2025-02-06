import './styles.scss'
import {useEffect, useState} from "react";

const SignIn = ({setIsSignedIn}) => {
  const [temp, setTemp] = useState("")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isEnteringPassword, setIsEnteringPassword] = useState(false)
  const [token, setToken] = useState('')
  useEffect(() => {
    if (!!token) setIsSignedIn(true)
  }, [token]);
  useEffect(() => {
    if (!!username && !!password) {
      fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        // body:JSON.stringify({
        //   username: username,             //"mor_2314"
        //   password: password             //"83r5^_"
        // })
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_"
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text()
            throw new Error(`HTTP ${res.status}: ${text}`);
          }
          return res.json();
        })
        .then(json => {
          console.log(json, json.token)
          setToken(json.token)
        })
        .catch(err => {
          console.error("Error:", err);
          const errorMessage = err.message.split(': ')[1];
          console.log('Error message:', errorMessage);
          alert(errorMessage);
          window.location.reload();
        });
        }
  }, [username, password]);
  const handleContinue = () => {
    if (!username) {
      setUsername(temp)
      setTemp('')
      setIsEnteringPassword(true)
    } else {
      setPassword(temp)
    }
    setTemp('')
  }
  const handleKeyDown = (event) => {
    if (temp.length > 3 &&
        event.key === 'Enter') {
      handleContinue()
    }
  };
  return (
    <div className={'sign-in'}>
      <h1>Sign In</h1>
      <div className={'form'}>
        <input
          className={'sign-in__input'}
          type={isEnteringPassword ? "password" : "text"} // Міняємо тип інпуту для пароля
          placeholder={!isEnteringPassword ? "Username" : "Password"}
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={'sign-in__button'}
          onClick={() => {handleContinue()}}
        >Continue
        </button>
      </div>
    </div>
  )
}
export default SignIn