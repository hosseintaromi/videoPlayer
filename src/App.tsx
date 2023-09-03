import { HlsPlayer } from "./components/HlsPlayer";
const App = () => (
  <div>
    <HlsPlayer
      customTheme={{
        colors: {
          primary: "yellow",
        },
      }}
    />
  </div>
);

export default App;
