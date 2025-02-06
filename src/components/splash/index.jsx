import {splash} from "../../assets/img";
import "./styles.scss"

const Splash = ({setIsSplashShown, setIsSplashLoaded}) => {
  const load = () => {
    setIsSplashLoaded(true)
  }
  return (
  <div>
    <img className="splash" src={splash} alt="Index" onLoad={() => load()} />
  </div>
  )
}
export default Splash;