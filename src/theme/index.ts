export type ThemeType = {
  colors: {
    primary: string;
  };
};

export const theme: ThemeType = {
  colors: {
    primary: "hotpink",
  },
};

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
