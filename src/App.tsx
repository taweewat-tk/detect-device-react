import logo from "./logo.svg";
import "./App.css";
import {
  isAndroid,
  isChrome,
  isDesktop,
  isEdge,
  isFirefox,
  isIE,
  isIOS,
  isMacOs,
  isMobile,
  isOpera,
  isTablet,
  isWindows,
  isWinPhone,
} from "react-device-detect";

function App() {
  const detectDevice = () => {
    if (isMobile) {
      return "Mobile";
    } else if (isDesktop) {
      return "Desktop";
    } else if (isTablet) {
      return "Tablet";
    }
  };
  const detectBrowser = () => {
    if (isChrome) {
      return "Chrome";
    } else if (isFirefox) {
      return "Firefox";
    } else if (isIE) {
      return "IE";
    } else if (isOpera) {
      return "Opera";
    } else if (isEdge) {
      return "Edge";
    }
  };
  const detectDeviceOS = () => {
    if (isIOS) {
      return "IOS";
    } else if (isAndroid) {
      return "Android";
    } else if (isWindows) {
      return "Window";
    } else if (isMacOs) {
      return "MacOS";
    } else if (isWinPhone) {
      return "Window phone";
    } else {
      return "Another os";
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Device: {detectDevice()}</div>
        <div>Browser: {detectBrowser()}</div>
        <div>OS: {detectDeviceOS()}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
