import {useEffect, useState} from "react";
import Splash from "./components/splash";
import SignIn from "./components/signIn";
import ProductList from "./components/productList";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem('token'));
  const [isSplashShown, setIsSplashShown] = useState(true);
  const [isSplashLoaded, setIsSplashLoaded] = useState(false);
  const [isTimeToHide, setIsTimeToHide] = useState(false);
  useEffect(() => {
    const hideAfter = 2000
    const totalTime = hideAfter + 500

    const hideTimer = setTimeout(() => setIsTimeToHide(true), hideAfter);
    const splashTimer = setTimeout(() => {
      setIsSplashShown(false)
    }, totalTime);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(splashTimer);
    };
  }, [isSplashLoaded]);
  return (
    isSplashShown ?
      <Splash
        isTimeToHide={isTimeToHide}
        setIsSplashLoaded={setIsSplashLoaded}
      /> :
      !isSignedIn ?
        <SignIn setIsSignedIn={setIsSignedIn}/> : <ProductList/>
  )
}
export default App