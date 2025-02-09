import {splash} from "../../assets/img";
import "./styles.scss"

const Splash = ({setIsSplashLoaded, isTimeToHide}) => {
  const load = () => {
    setIsSplashLoaded(true)
  }
  return (
  <div>
    <img className={`splash${isTimeToHide ? " hidden" : ""}`} src={splash} alt="Index" onLoad={() => load()} />
  </div>
  )
}
export default Splash;