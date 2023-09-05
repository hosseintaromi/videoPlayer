import { useRef } from "react";
import { HlsPlayer } from "./components/HlsPlayer";
import { ControllerRefType } from "./@types/HlsPlayerType";
const App = () => {
  const controllerRef = useRef<ControllerRefType>({
    changeSpeed: () => {},
    play: () => {},
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
        speed X 4
      </button>
      <button
        onClick={() => {
          controllerRef.current.play(true);
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          controllerRef.current.play(false);
        }}
      >
        pause
      </button>
    </>
  );
};

export default App;
