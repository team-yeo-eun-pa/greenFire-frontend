import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/Layout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Main/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
