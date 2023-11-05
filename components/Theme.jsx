"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";

export default function Theme(props) {
  const { children } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#f67a18',
            contrastText: '#fff',
          },
          success: {
            main: '#0DA78B',
            contrastText: '#fff',
          }
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}