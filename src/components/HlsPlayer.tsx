import { useVideoHls } from "../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../theme";
import { useCallback, useImperativeHandle } from "react";
import { HlsPlayerPropsType } from "../@types/HlsPlayerType";
/*
ui components
*/
const VideoWrapper = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));
const Video = styled.video(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.videoBg,
}));
const Button = styled.button({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  border: "3px solid #fff",
  borderRadius: "50%",
  color: "white",
  padding: "20px",
  "& > img": {
    width: "30px",
    height: "30px",
  },
});
export const HlsPlayer = ({
  customTheme,
  controllerRef,
}: HlsPlayerPropsType) => {
  const src = "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8";
  const { videoRef, isSupportedPlatform } = useVideoHls({
    src,
  });

  useImperativeHandle(controllerRef, () => ({
    changeSpeed: handelChangeSpeed,
    play: handelPlayAction,
  }));

  const handelPlayAction = (value: boolean) => {
    if (value) videoRef?.current?.play();
    else videoRef?.current?.pause();
  };
  const handelChangeSpeed = (value: number) => {
    if (videoRef?.current?.playbackRate) videoRef.current.playbackRate = value;
  };

  const playClicked = useCallback(() => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={customTheme ? customTheme : theme}>
      <VideoWrapper>
        {isSupportedPlatform ? (
          <Video
            playsInline
            ref={videoRef}
            id="main-video"
            className="m-video videoBackground"
            controls={false}
          />
        ) : (
          <Video
            playsInline
            ref={videoRef}
            src={src}
            id="main-video"
            className="m-video videoBackground"
            controls={false}
          />
        )}
        <Button onClick={playClicked}>
          <img src="/assets/icons/play.svg" alt="" />
        </Button>
      </VideoWrapper>
    </ThemeProvider>
  );
};
