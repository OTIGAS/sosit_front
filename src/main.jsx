import ReactDOM from "react-dom/client";
import App from "./App/index";

import { ThemeProvider } from "./Context/Theme/ThemeContext";
import { LanguageProvider } from "./Context/Language/LanguageContext";
import { LoadingProvider } from "./Context/Loading/LoadingContext";
import { ErrorProvider } from "./Context/Error/ErrorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LanguageProvider>
      <LoadingProvider>
        <ErrorProvider>
          <App />
        </ErrorProvider>
      </LoadingProvider>
    </LanguageProvider>
  </ThemeProvider>
);
