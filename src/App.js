import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/Layout";
import './style.css';
import Signup from "./pages/member/Signup";
import CustomComponents from "./common/CustomComponents";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/ex" element={<CustomComponents/>}/>
                <Route path="/member">
                    <Route path="signup" element={<Signup/>}></Route>
                </Route>
                    </Route> {/* Layout end*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
