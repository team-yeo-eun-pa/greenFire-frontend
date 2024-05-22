import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/common/Layout";
import './style.css';
import Signup from "./pages/member/Signup";
import CustomComponents from "./components/common/CustomComponents";
import UserPageLayout from "./layouts/UserPageLayout";
import MyPageMain from "./pages/member/MyPageMain";
import Error from "./pages/error/Error";
import AdminPageLayout from "./layouts/AdminPageLayout";
import AdminMain from "./pages/admin/AdminMain";
import SellerPageLayout from "./layouts/SellerPageLayout";
import MyStoreMain from "./pages/seller/MyStoreMain";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/ex" element={<CustomComponents/>}/>
                        <Route path="/member">
                            <Route path="mypage" element={<UserPageLayout/>}>
                                <Route index element={<Navigate to="/member/mypage/main" replace/>}/>
                                <Route path="main" element={<MyPageMain/>}/>
                            </Route>
                        </Route>
                        <Route path="/seller">
                            <Route path="mystore" element={<SellerPageLayout/>}>
                                <Route index element={<Navigate to="/seller/mystore/main" replace/>}/>
                                <Route path="main" element={<MyStoreMain/>}/>
                            </Route>
                        </Route>
                        <Route path="/admin">
                            <Route path="dashboard" element={<AdminPageLayout/>}>
                                <Route index element={<Navigate to="/admin/dashboard/main" replace/>}/>
                                <Route path="main" element={<AdminMain/>}/>
                            </Route>
                        </Route>
                    </Route> {/* Layout end*/}
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
