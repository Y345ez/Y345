import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

import { motion } from "framer-motion";
import { supabase } from "../utils/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons/faFaceLaughBeam";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";


import { useState, useEffect, useRef, useCallback } from "react";

const ReviewDiscord = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [quality, setQuality] = useState(0);
  const [service, setService] = useState(0);
  const [recommend, setRecommend] = useState(0);


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: session } = useSession();
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  
  const [showBox, setShowBox] = useState(false);
  
  const iscustomer = showBox;

  const handleCheckboxChange = () => {
    setShowBox(!showBox);
  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true);
      setReviews(data);
    };
    fetchReviews();
  }, []);


  const handleReview = () => {
    if (session) {
      setShowReviewPopup(true);
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleCloseReviewPopup = () => {
    setShowReviewPopup(false);
  };
  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();

  
    if (!content || rating === 0) {
      setIsDialogOpen(true);
      return;
    }

    try {
      await supabase
        .from("reviews")
        .upsert([{ name: session.user?.name || "", content, rating, price, speed, quality, service, recommend, approved: false, iscustomer, image: session.user?.image || "", }]);
      alert(
        "Your review has been submitted for approval. Thank you!\n(Reviews require approval from owner to avoid spams.)"
      );
      setContent("");
      setRating(0);
      setPrice(0);
      setSpeed(0);
      setQuality(0);
      setService(0);
      setRecommend(0);

      handleCloseReviewPopup();
    } catch (error) {
      console.error("Error submitting review:", error.message);
    }
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handlePriceClick = (selectedPrice) => {
    setPrice(selectedPrice);
  };
  const handleRecommendClick = (selectedRecommend) => {
    setRecommend(selectedRecommend);
  };
  const handleQualityClick = (selectedQuality) => {
    setQuality(selectedQuality);
  };
  const handleServiceClick = (selectedService) => {
    setService(selectedService);
  };
  const handleSpeedClick = (selectedSpeed) => {
    setSpeed(selectedSpeed);
  };
  return (
    <>
      <section className="section section--reviews" id="section-reviews">
        <div className="section__container">
          <div className="section__content">
            <div className="section__heading">
            <FontAwesomeIcon className="fas fa-laugh-beam s_fa" icon={faFaceLaughBeam} />
              <h2>Reviews</h2>
            </div>
            {reviews === null || reviews.length === 0 ? (
          <p className="reviews-text">Loading...</p>
        ) : (
          <div className="reviews">
            <div className="reviews__container">
            {reviews?.map((review) => (
              <Card
                key={review.id}
                image={review.image}
                heading={review.name}
                rating={review.rating}
                price={review.iscustomer ? review.price : null}
                service={review.iscustomer ? review.service : null}
                quality={review.iscustomer ? review.quality : null}
                speed={review.iscustomer ? review.speed : null}
                recommend={review.iscustomer ? review.recommend : null}
                description={review.content}
              />
            ))}{" "}
            </div>
            </div>
        )}{" "}

            <div className="section__buttons">
              <a
                onClick={handleReview}
                id="popup"
                className="button button--primary button--large--2"
              >
                <FontAwesomeIcon icon={faCirclePlus} />Submit Review
              </a>
            </div>

            {showLoginPopup && (
              <div id="login__Popup" className="login__Popup">
                <div className="login__Popup__contents">
                  <div className="login__Popup__header sub-heart-h">
                    <h3 className="header-title">
                    <FontAwesomeIcon className="fa-solid fa-arrow-right-from-bracket log-out-fa" icon={faArrowUpFromBracket} rotation={90} />
                      Login
                    </h3>
                    <div className="close close-l fa fa-close" onClick={handleCloseLoginPopup}> <FontAwesomeIcon icon={faClose} /></div>
                  </div>

                  <div className="login__Popup__body">
                    <h3>You must login to continue</h3>
                  </div>
                  <div className="login__Popup__footer">
                    <div className="login__Popup__gro">
                      <a
                        onClick={() => signIn("discord")}
                        className="button button--primary log-in"
                      >
                        Login
                      </a>
                      <a
                        className="button button--primary log-c close-l"
                        onClick={handleCloseLoginPopup}
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showReviewPopup && (
              <div id="reviews__Popup" className="reviews__Popup">
                <div className="reviews__Popup__contents">
                  <div className="reviews__Popup__header sub-heart-h">
                    <h3 className="header-title">
                    <FontAwesomeIcon className="fa-regular fa-heart sub-heart" icon={faHeart} />Submit
                      Review
                    </h3>
                    <div className="close close-l fa fa-close" onClick={handleCloseReviewPopup}> <FontAwesomeIcon icon={faClose} /></div>
                  </div>
                  <div className="reviews__Popup__body">
                    <div className="note note-blurple">
                      Supports markdown, custom discord emojis &amp; mentions
                    </div>
                    <form onSubmit={handleFormSubmit}>
                      <div className="reviews__form">
                      <textarea
                        name="review"
                        id="feedback"
                        className="form-control"
                        placeholder="Great Work! 😉"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        minLength="30"
                        required
                      ></textarea>
                        <label className="label" htmlFor="feedback">
                          Type a review or feedback
                        </label>
                        {content.length < 30 && (
                          <p className="warning-text">Please enter at least 30 characters.</p>
                        )}
                      </div>
                      <div className="mnb">
                        <div className="card">
                          <div className="card-header">Rate My Work &amp; Projects</div>
                          <div className="card-body star-rating">
                            <div className="row star popup-star sub-star">
                              {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                <span
                                  key={ratingValue}
                                  className={`star-r ${ratingValue <= rating ? "active" : ""}`}
                                  onClick={() => handleRatingClick(ratingValue)}
                                >
                                  <FontAwesomeIcon className="fa-star" icon={faStar} />
                                </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkbox">
                        <div className="toggle-pill-dark">
                          <input
                            type="checkbox"
                            id="show"
                            name="show"
                            onChange={handleCheckboxChange}
                          />
                          <label for="show"></label>
                        </div>
                        <label className="customer" htmlFor="show">
                          Iam A Customer
                        </label>
                      </div>
                      {showBox && (
                        <div id="box">
                          <div className="card">
                            <div className="card-header">Price</div>
                            <div className="card-body star-rating">
                              <div
                                className="row star popup-star sub-star"
                              >
                                {[...Array(5)].map((_, index) => {
                                const priceValue = index + 1;
                                return (
                                <span
                                  key={priceValue}
                                  className={`star-r ${priceValue <= price ? "active" : ""}`}
                                  onClick={() => handlePriceClick(priceValue)}
                                >
                                  <FontAwesomeIcon className="fa-star" icon={faStar} />
                                </span>
                                );
                              })}
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">Service</div>
                            <div className="card-body star-rating">
                              <div
                                className="row star popup-star sub-star"
                              >
                                {[...Array(5)].map((_, index) => {
                                const serviceValue = index + 1;
                                return (
                                <span
                                  key={serviceValue}
                                  className={`star-r ${serviceValue <= service ? "active" : ""}`}
                                  onClick={() => handleServiceClick(serviceValue)}
                                >
                                  <FontAwesomeIcon className="fa-star" icon={faStar} />
                                </span>
                                );
                              })}
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">Quality</div>
                            <div className="card-body star-rating">
                              <div
                                className="row star popup-star sub-star"
                                >
                                {[...Array(5)].map((_, index) => {
                                const qualityValue = index + 1;
                                return (
                                <span
                                  key={qualityValue}
                                  className={`star-r ${qualityValue <= quality ? "active" : ""}`}
                                  onClick={() => handleQualityClick(qualityValue)}
                                >
                                  <FontAwesomeIcon className="fa-star" icon={faStar} />
                                </span>
                                );
                              })}
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">Speed</div>
                            <div className="card-body star-rating">
                              <div
                                className="row star popup-star sub-star"
                              >
                               {[...Array(5)].map((_, index) => {
                                const speedValue = index + 1;
                                return (
                                <span
                                  key={speedValue}
                                  className={`star-r ${speedValue <= speed ? "active" : ""}`}
                                  onClick={() => handleSpeedClick(speedValue)}
                                >
                                  <FontAwesomeIcon className="fa-star" icon={faStar} />
                                </span>
                                );
                              })}
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              How likely would you recommend to others
                            </div>
                            <div className="card-body star-rating">
                              <div
                                className="row star popup-star sub-star"
                                id="row-5"
                              >
                                {[...Array(5)].map((_, index) => {
                                const recommendValue = index + 1;
                                return (
                                <span
                                  key={recommendValue}
                                  className={`star-r ${recommendValue <= recommend ? "active" : ""}`}
                                  onClick={() => handleRecommendClick(recommendValue)}
                                >
                                  <FontAwesomeIcon className="fa-star" icon={faStar} />
                                </span>
                                );
                              })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>

                  <div className="reviews__Popup__footer">
                    <div className="reviews__Popup__gro">
                      <a
                        id="submit-but"
                        className="button button--primary log-out"
                        onClick={handleFormSubmit}
                      >
                        Submit
                      </a>
                      <a
                        className="button button--primary log-c close-l"
                        onClick={handleCloseReviewPopup}
                      >
                        Cancel
                      </a>
                    </div>
                    {isDialogOpen && (
                      <div className="dialog-backdrop">
                        <div className="dialog-box">
                          <p>⚠️ Please fill the required details! </p>
                          <button
                            className="primary-btn-red"
                            onClick={() => setIsDialogOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}  
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewDiscord;
