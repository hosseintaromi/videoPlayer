import { useVideoHls } from "../hooks/useVideoHls";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeType, theme } from "../theme";

const Text = styled.p(({ theme }) => ({
  color: theme.colors.primary,
}));

export const HlsPlayer = ({ customTheme }: { customTheme?: ThemeType }) => {
  const src = "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8";
  const { videoRef, isSupportedPlatform } = useVideoHls({
    src,
  });

  return (
    <ThemeProvider theme={customTheme ? customTheme : theme}>
      {isSupportedPlatform ? (
        <video
          playsInline
          ref={videoRef}
          id="main-video"
          className="m-video videoBackground"
          controls={true}
        />
      ) : (
        <video
          playsInline
          ref={videoRef}
          src={src}
          id="main-video"
          className="m-video videoBackground"
          controls={true}
        />
      )}
    </ThemeProvider>
  );
};
