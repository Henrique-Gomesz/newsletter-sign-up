import { useEffect, useState } from "react";
import { DesktopForm } from "./components/screens/desktop/form/form";
import { DesktopSucess } from "./components/sucess/desktop-sucess";
import { MobileForm } from "./components/screens/mobile/form/form";

function App() {
  const [email, setEmail] = useState("");
  const [showSucessMessage, setShowSucessMessage] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the window width when the viewport is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSucessMessage = () => {
    setShowSucessMessage(!showSucessMessage);
  };

  const handleEmail = (newValue: string) => {
    setEmail(newValue);
  };

  const shouldRenderDesktop = () => {
    if (windowWidth > 900) return true;
    return false;
  };

  const renderDesktop = () => {
    return (
      <>
        <DesktopForm email={email} handleEmail={handleEmail} />
      </>
    );
  };

  const renderMobile = () => {
    return (
      <>
        {" "}
        <MobileForm />{" "}
      </>
    );
  };

  return (
    <div>
      {showSucessMessage ? (
        <DesktopSucess
          handleShowSucessMessage={handleSucessMessage}
          email={email}
        />
      ) : (
        <>{shouldRenderDesktop() ? renderDesktop() : renderMobile()}</>
      )}
    </div>
  );
}

export default App;
