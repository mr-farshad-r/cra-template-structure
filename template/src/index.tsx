import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./assets/styles/styles";
import { store } from "./redux/store";
import App from "./App";
import { isDevelopment } from "./helpers/application-mode";
import { logger } from "./helpers/logger";

const ROOT_ELEMENT: Element | null = document.getElementById("root");
if (!ROOT_ELEMENT) throw new Error("Failed to find the root element!");

if (isDevelopment()) logger("DEVELOPMENT", "info", "lg", true);
else logger("PRODUCTION", "danger", "lg", true);

ReactDOM.createRoot(ROOT_ELEMENT).render(
    <Provider store={store}>
        <App />
    </Provider>
);
