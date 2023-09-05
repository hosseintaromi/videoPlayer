import { RefObject } from "react";
import { ThemeType } from "../theme";

export type ControllerRefType = {
  changeSpeed: (value: number) => void;
  play: (value: boolean) => void;
};

export type HlsPlayerPropsType = {
  customTheme?: ThemeType;
  controllerRef?: RefObject<ControllerRefType>;
};
