export const MainTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#000000",
          },
          secondary: {
            main: "#8fc4c9",
          },
          info: {
            main: "#10e6b7",
          },
          border: {
            b1: "rgba(0,0,0,0.1)",
            b2: "rgba(225, 225, 225, 0.2)",
          },
          checkCircle: {
            check: "#7de2b9",
            cancel: "#e27d7d",
          },
          favorite: {
            on: "#f73198",
            off: "#5d5d5d",
          },
          cardText: {
            main: "#000000",
          },
        }
      : {
          primary: {
            main: "#ffffff",
          },
          secondary: {
            main: "#2aa5b2",
          },
          info: {
            main: "#0dbd96",
          },
          border: {
            b1: "#dedede",
            b2: "rgba(51, 51, 51, 0.2)",
          },
          checkCircle: {
            check: "#7de2b9",
            cancel: "#e27d7d",
          },
          favorite: {
            on: "#f73198",
            off: "#5d5d5d",
          },
          cardText: {
            main: "#000000",
          },
        }),
  },
});
