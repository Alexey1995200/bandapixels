import {useEffect, useState} from "react";
import Splash from "./components/splash";
import SignIn from "./components/signIn";
import ProductList from "./components/productList";

const App = () => {
  const [isSplashShown, setIsSplashShown] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSplashLoaded, setIsSplashLoaded] = useState(false);
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      if (isSplashLoaded) setIsSplashShown(false)
    }, 2500)
    return (() => clearTimeout(splashTimer));
  }, [isSplashLoaded])

  return (
      isSplashShown ?
        <Splash
        setIsSplashShown={setIsSplashShown}
        setIsSplashLoaded={setIsSplashLoaded}
        /> :
          isSignedIn ?
            <ProductList/> :
            <SignIn
              setIsSignedIn={setIsSignedIn}
            />
  )
}
export default App