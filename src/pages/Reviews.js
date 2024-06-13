import React, { useEffect, useState } from 'react';
import '../style.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReviewsAPICalls } from "../apis/ReviewAPICalls";
import ReportButton from "../components/items/ReportButton";

function Reviews() {
    const { productCode } = useParams();
    const dispatch = useDispatch();
    const { reviews } = useSelector(state => state.ReviewReducer);

    useEffect(() => {
        dispatch(ReviewsAPICalls({ productCode: 1 }));
    }, [dispatch, productCode]);

    return (
        <div className="reviews-page">
            <header className="page-header">
                <h1>Product Reviews</h1>
            </header>
            <div className="review-list">
                {reviews && reviews.map(review => (
                    <div className="review-item" key={review.reviewCode}>
                        <div className="review-content">
                            <div className="review-header">
                                <h3 className="review-title">{review.reviewTitle}</h3>
                                <div className="review-meta">
                                    <span className="review-author">{review.memberNickname}</span>
                                    <span className="review-date">{review.reviewDate}</span>
                                </div>
                            </div>
                            <p className="review-text">{review.reviewContent}</p>
                            {/* 리뷰 데이터를 ReportButton으로 전달합니다. */}
                            <ReportButton memberCode={review.memberCode} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
