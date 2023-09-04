import { useRef } from "react";
import { HlsPlayer } from "./components/HlsPlayer";
import { ControllerRefType } from "./@types/HlsPlayerType";
const App = () => {
  const controllerRef = useRef<ControllerRefType>({
    changeSpeed: () => {},
  });

  return (
    <>
      <HlsPlayer
        controllerRef={controllerRef}
        customTheme={{
          colors: {
            primary: "yellow",
            videoBg: "#000",
          },
        }}
      />
      <button
        onClick={() => {
          controllerRef.current.changeSpeed(4);
        }}
      >
        vlkdnviosnvsdnviosdv
      </button>
    </>
  );
};

export default App;
