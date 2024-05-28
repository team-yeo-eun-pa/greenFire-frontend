import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/common/Layout";
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import CustomComponents from "./components/common/CustomComponents";
import UserPageLayout from "./layouts/UserPageLayout";
import MyPageMain from "./pages/member/MyPageMain";
import Error from "./pages/error/Error";
import AdminPageLayout from "./layouts/AdminPageLayout";
import AdminMain from "./pages/admin/AdminMain";
import SellerPageLayout from "./layouts/SellerPageLayout";
import MyStoreMain from "./pages/seller/MyStoreMain";
import ChallengeMain from "./pages/challenge/ChallengeMain";
import ProductMain from "./pages/product/ProductMain";
import SignupForm from "./components/form/SignupForm";
import Wishlist from "./pages/product/Wishlist";
import Signup from "./pages/member/Signup";
import ProductRegist from "./pages/seller/ProductRegist";
import ProductManagement from "./pages/seller/ProductManagement";
import ProductEdit from "./pages/seller/ProductEdit";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/ex" element={<CustomComponents/>}/>
                        <Route path="/challenge" element={<ChallengeMain/>}>

                        </Route>
                        <Route path="/product" element={<ProductMain/>}>

                        </Route>
                        <Route path="/wish" element={<Wishlist/>}>

                        </Route>
                        <Route path="/members">
                            <Route path="signup" element={<Signup/>}/>
                            <Route path="mypage" element={<UserPageLayout/>}>
                                <Route index element={<Navigate to="/member/mypage/main" replace/>}/>
                                <Route path="main" element={<MyPageMain/>}/>
                            </Route>
                        </Route>
                        <Route path="/seller">
                            <Route path="mystore" element={<SellerPageLayout/>}>
                                <Route index element={<Navigate to="/seller/mystore/main" replace/>}/>
                                <Route path="main" element={<MyStoreMain/>}/>
                                <Route path="product" element={<ProductManagement/>}/>
                                <Route path="regist" element={<ProductRegist/>}/>
                                <Route path="edit" element={<ProductEdit/>}/>
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
