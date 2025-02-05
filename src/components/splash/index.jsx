import {splash} from "../../assets/img";
import "./styles.scss"

const Splash = ({setIsSplashShown, setIsSplashLoaded}) => {
  console.log('splash worked')
  const load = () => {
    setIsSplashLoaded(true)
    console.log('spl shown')
  }
  return (
  <div>
    <img className="splash" src={splash} alt="Index" onLoad={() => load()} />
  </div>
  )
}
export default Splash;