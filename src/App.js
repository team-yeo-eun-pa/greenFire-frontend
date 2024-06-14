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
import SellerPageLayout from "./layouts/SellerPageLayout";
import MyStoreList from "./pages/seller/MyStoreList";
import ChallengeMain from "./pages/challenge/ChallengeMain";
import ProductMain from "./pages/product/ProductMain";
import Wishlist from "./pages/product/Wishlist";
import InquiryMain from "./pages/Inquiry/InquiryMain";
import Signup from "./pages/member/Signup";
import ProductRegist from "./pages/seller/ProductRegist";
import ProductManagement from "./pages/seller/ProductManagement";
import ProductEdit from "./pages/seller/ProductEdit";
import LoginModal from "./components/items/LoginModal";
import MemberProfile from "./pages/member/MemberProfile";
import AdminMemberView from "./pages/admin/AdminMemberView";
import InquiryRegist from "./pages/Inquiry/InquiryRegist";
import StoreProfile from "./pages/seller/StoreProfile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminReport from "./pages/admin/AdminReport";
import {CheckoutPage} from "./pages/payment/CheckoutPage";
import {FailPage} from "./pages/payment/FailPage";
import {SuccessPage} from "./pages/payment/SuccessPage";
import ReportPage from "./pages/admin/ReportPage";
import ProductDetail from "./pages/product/ProductDetail";
import Notices from "./pages/admin/Notices";
import Notice from "./pages/admin/Notice";
import ApplySeller from "./pages/member/ApplySeller";
import ApplyDetail from "./pages/member/ApplyDetail";
import ApplyRegist from "./pages/member/ApplyRegist";
import {ToastContainer} from "react-toastify";
import MemberOrderList from "./pages/order/MemberOrderList";
import MemberOrderDetails from "./pages/order/MemberOrderDetails";
import AdminCreateNotice from "./pages/admin/AdminCreateNotice";
import InquiryListView from "./pages/Inquiry/InquiryListView";
import ApplyList from "./pages/admin/AdminApplyList";
import AdminApplyDetail from "./pages/admin/AdminApplyDetail";
import OrderApprovalHandler from "./pages/order/OrderApprovalHandler";
import StoreOrderList from "./pages/order/StoreOrderList";
import OrderShippingHandler from "./pages/order/OrderShippingHandler";
import OrderRegistration from "./pages/order/OrderRegistration";
import StoreOrderDetails from "./pages/order/StoreOrderDetails";
import AdminUpdateNotice from "./pages/admin/AdminUpdateNotice";
import AdminMain from "./pages/admin/AdminMain";
import VerifySuccess from "./pages/verification/VerifySuccess";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";
import InquiryDetail from "./pages/Inquiry/InquiryDetail";



function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer hideProgressBar={true}
                                position="top-center"
                                autoClose={3000}
                                closeOnClick
                                pauseOnHover
                                draggable/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/" element={<Layout/>}>

                        {/*<Route path="/ex" element={<CustomComponents/>}/>*/}

                        {/* 공지사항 ------------------------------------------------ */}
                        <Route path="/notice" element={<Notices/>}/>
                        <Route path="/notice/detail" element={<Notice/>}/>
                        <Route path="/notice/edit-notice" element={<AdminUpdateNotice/>}/>


                        {/* 챌린지 -------------------------------------------------- */}
                        <Route path="/challenge" element={<ChallengeMain/>}/>





                        <Route path="/product" element={<ProductMain/>}>
                            {/* 초록불 스토어 --------------------------------------------- */}
                            <Route path="reviews" element={<Reviews/>}/>
                            <Route path="review-detail" element={<ReviewDetail/>}/>


                            <Route path="product" element={<ProductMain/>}></Route>
                            <Route path="product/:productCode" element={<ProductDetail/>}/>

                            <Route path="wish" element={<Wishlist/>}/>


                            {/* 주문 및 결제 --------------------------------------------- */}
                            <Route path="order">
                                <Route index element={<OrderRegistration/>}/>
                            </Route>

                            <Route path="payment">
                                <Route index element={<CheckoutPage/>}/>
                                <Route path="fail" element={<FailPage/>}/>
                                <Route path="success" element={<SuccessPage/>}/>
                            </Route>


                            {/* 인증확인 ------------------------------------------------- */}
                            <Route path="verify-email/:result" element={<VerifySuccess/>}/>


                            {/* 회원 ------------------------------------------------- */}
                            <Route path="members">
                                <Route path="signup"
                                       element={<ProtectedRoute loginCheck={false}><Signup/></ProtectedRoute>}/>
                                <Route path="login"
                                       element={<ProtectedRoute loginCheck={false}><LoginModal/></ProtectedRoute>}/>
                                <Route path="mypage"
                                       element={<ProtectedRoute loginCheck={true}> <UserPageLayout/> </ProtectedRoute>}>
                                    <Route index element={<Navigate to="/members/mypage/profile" replace/>}/>
                                    <Route path="main" element={<MyPageMain/>}/>
                                    <Route path="profile" element={<MemberProfile/>}/>
                                    <Route path="order-list" element={<MemberOrderList/>}/>
                                    <Route path="order-list/:orderCode" element={<MemberOrderDetails/>}/>
                                    <Route path="report" element={<ReportPage/>}/>

                                    <Route path="apply">
                                        <Route index element={<ApplySeller/>}/>
                                        <Route path="regist" element={<ApplyRegist/>}/>
                                        <Route path="detail/:sellerCode" element={<ApplyDetail/>}/>
                                    </Route>

                                    <Route path="inquiry">
                                        <Route index element={<InquiryMain/>}/>
                                        <Route path="regist" element={<InquiryRegist/>}/>
                                        <Route path="detail" element={<InquiryDetail/>}/>

                                    </Route>

                                </Route>

                            </Route> {/* member end*/}


                            {/* 판매자 ------------------------------------------------- */}
                            <Route path="seller">
                                <Route path="mystore" element={<SellerPageLayout/>}>
                                    <Route index element={<Navigate to="/seller/mystore/main" replace/>}/>
                                    {/*<Route path="main" element={<MyStoreMain/>} />*/}
                                    <Route path="main" element={<MyStoreList/>}/>
                                    <Route path=":sellerCode" element={<StoreProfile/>}/>
                                    <Route path="product" element={<ProductManagement/>}/>
                                    <Route path="regist" element={<ProductRegist/>}/>
                                    <Route path=":storeCode/order-list" element={<StoreOrderList/>}/>
                                    <Route path=":storeCode/order-list/:orderCode" element={<StoreOrderDetails/>}/>
                                    <Route path=":storeCode/order-approval-handler" element={<OrderApprovalHandler/>}/>
                                    <Route path=":storeCode/order-shipping-handler" element={<OrderShippingHandler/>}/>
                                    <Route path="edit" element={<ProductEdit/>}/>
                                </Route>
                            </Route> {/* seller end*/}


                            {/* 관리자 ------------------------------------------------- */}
                            <Route path="admin">
                                <Route path="dashboard" element={<AdminPageLayout/>}>
                                    <Route index element={<Navigate to="/admin/dashboard/main" replace/>}/>
                                    <Route path="notice-create" element={<AdminCreateNotice/>}/>
                                    <Route path="notice-update" element={<AdminUpdateNotice/>}/>
                                    <Route path="members" element={<AdminMemberView/>}/>
                                    <Route path="category" element={<AdminCategory/>}/>
                                    <Route path="reports" element={<AdminReport/>}/>
                                    <Route path="main" element={<AdminMain/>}/>
                                    <Route path="applies">
                                        <Route index element={<ApplyList/>}/>
                                        <Route path=":sellerCode" element={<AdminApplyDetail/>}/>
                                    </Route>
                                </Route>
                            </Route> {/* admin end*/}

                        </Route> {/* Layout end*/}
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
);
}

export default App;