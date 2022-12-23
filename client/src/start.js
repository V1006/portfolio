import { createRoot } from "react-dom/client";
import App from "./app/app";

const root = createRoot(document.querySelector("main"));
root.render(<HelloWorld />);

function HelloWorld() {
    return <App />;
}

/* const root = createRoot(document.querySelector("main"));
try {
    fetch("/api/users/me")
        .then((response) => response.json())
        .then((data) => {
            if (!data) {
                root.render(<Welcome />);
            } else {
                connect();
                root.render(<App />);
            }
        });
} catch (error) {
    console.log(error); */
