import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./AllRoutes/Routes/Routes";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
