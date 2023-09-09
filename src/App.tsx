import { useRef } from "react";
import { HlsPlayer } from "./components/package/HlsPlayer";
import { ControllerRefType } from "./@types/HlsPlayerType";
const App = () => {
  const controllerRef = useRef<ControllerRefType>({
    changeSpeed: () => {},
    play: () => {},
  });
  const right = () => <p>hello</p>;
  const left = () => <p>bye</p>;


  const onPlay = () => {
    console.log("onplay");
  };
  const theme = {
    colors: {
      primary: "yellow",
      videoBg: "#000",
    },
  };

  return (
    <>
      <HlsPlayer
        src="https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"
        controls={false}
        loop={true}
        muted={false}
        controllerRef={controllerRef}
        topRightContainer={right()}
        topLeftContainer={left()}

        onPlay={onPlay}
        customTheme={theme}
        poster="https://static.namava.ir/Content/Upload/Images/ad00cc89-74fe-4264-9210-9571d4c6cb42.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900"
      />
      {/* <button

        onClick={() => {
          controllerRef.current.changeSpeed(4);
        }}
      >
        speed X 4
      </button> */}

    </>
  );
};

export default App;
