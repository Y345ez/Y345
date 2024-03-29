import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Navbar from "./navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";

const Star = ({ value }) => {
  // Function to render stars with specified color count
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= count ? "#FFD700" : "#ccc"; // Yellow for filled stars, gray for empty stars
      stars.push(
        <span key={i} className="fa fa-star-o" style={{ color: starColor }}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    }
    return stars;
  };

  return (
    <li>
      {value !== null && value !== 0 ? renderStars(value) : <span></span>}
    </li>
  );
};

const AdminReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPendingReviews();
  }, []);

  const fetchPendingReviews = async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", false);

      if (error) {
        console.error("Error fetching pending reviews:", error.message);
        return;
      }

      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching pending reviews:", error.message);
    }
  };
  const handleApprove = async (id) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .update({ approved: true })
      .eq("id", id);

    setIsLoading(false);
    if (error) {
      console.error("Error updating review:", error.message);
    } else {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === id ? { ...review, approved: true } : review
        )
      );
    }
  };
  const handleReject = async (id) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .update({ approved: false })
      .eq("id", id);

    setIsLoading(false);
    if (error) {
      console.error("Error updating review:", error.message);
    } else {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === id ? { ...review, approved: false } : review
        )
      );
    }
  };
  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting review:", error.message);
      } else {
        setReviews((prevReviews) =>
          prevReviews.filter((review) => review.id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting review:", error.message);
    }
  };

  return (
    //   {reviews.map((review) => (
    //   <div className="reviews__item">
    //   <div className="reviews__item__content">
    //       <>
    //        <div className="reviews__img" style={{ backgroundImage: `url(${review.image})`}}></div>
    //         <div className="reviews__item__name">{review.heading}</div>
    //         <div className="reviews__item__description">
    //           {description}
    //         </div>
    //         <div className="reviews__item__Line"></div>
    //         <div className="reviews__item__rating">
    //           <div className="container-r">
    //             <ul className="star__text">
    //               <li>Work &amp; projects</li>
    //               {price !== null && price !== 0 && <li>Price</li>}
    //               {service !== null && service !== 0 && <li>Service</li>}
    //               {quality !== null && quality !== 0 && <li>Quality</li>}
    //               {speed !== null && speed !== 0 && <li>Speed</li>}
    //               {recommend !== null && recommend !== 0 && <li>Recommended</li>}
    //             </ul>
    //           </div>
    //           <div className="star">
    //             <ul className="star__rating star__out">
    //               <Star value={rating} />
    //               <Star value={price} />
    //               <Star value={service} />
    //               <Star value={quality} />
    //               <Star value={speed} />
    //               <Star value={recommend} />
    //             </ul>
    //         </div>
    //         </div>
    //         <div className="reviews__item__Line"></div>

    //       </>
    //   </div>
    // </div>
    // ))}
    <>
      {reviews.length > 0 ? (
        <div
          style={{
            display: "flex",
            height: "50vh",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            marginTop: "10rem",
          }}
        >
          <h2
            className="h2-color"
            style={{
              fontWeight: "normal",
              fontSize: "3rem",
            }}
          >
            Admin Section
          </h2>
          <h3
            className="h2-color"
            style={{ marginBottom: "2rem", fontWeight: "normal" }}
          >
            Pending Reviews
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {reviews.map((review) => (
              // <div
              //   key={review.id}
              //   style={{
              //     display: "flex",
              //     gap: "2rem",
              //     flexWrap: "wrap",
              //     flexDirection: "row",
              //     justifyContent: "center",
              //     alignItems: "center",
              //     padding: "1.4rem",
              //     borderRadius: "5px",
              //     border: "2px solid #1d1d1f",
              //   }}
              // >
              //   <div
              //     style={{
              //       width: "13rem",
              //     }}
              //   >
              //     <div
              //       style={{
              //         textAlign: "right",
              //         justifyContent: "space-between",
              //         width: "100%",
              //         display: "flex",
              //       }}
              //     >
              //       <span
              //         style={{
              //           fontSize: "1.4rem",
              //           textAlign: "left",
              //           marginBottom: "0.5rem",
              //           wordWrap: "break-word",
              //         }}
              //         className="p-color"
              //       >
              //         {review.name}
              //       </span>
              //       &nbsp;&nbsp;
              //       <button
              //         style={{
              //           margin: "0",
              //           fontSize: " 1.2rem",
              //           padding: "0 0",
              //           background: "transparent",
              //           border: "none",
              //           cursor: "pointer",
              //         }}
              //         onClick={() => handleDelete(review.id)}
              //         disabled={isLoading}
              //       >
              //         <svg
              //           xmlns="http://www.w3.org/2000/svg"
              //           width="20"
              //           height="20"
              //           fill="#fff"
              //           className="bi bi-x-lg"
              //           viewBox="0 0 16 16"
              //         >
              //           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              //         </svg>
              //       </button>{" "}
              //     </div>
              //     <p
              //       style={{
              //         fontSize: "1rem",
              //         marginBottom: "0.3rem",
              //         textAlign: "left",
              //         wordWrap: "break-word",
              //       }}
              //       className="p-color"
              //     >
              //       {review.content}
              //       {review.rating}
              //     </p>
              //     <p
              //       style={{
              //         fontSize: "0.9rem",
              //         textAlign: "left",
              //         marginBottom: "0.8rem",
              //       }}
              //       className={review.approved ? "approved" : "not-approved"}
              //     >
              //       {review.approved ? "Approved" : "Not approved"}
              //     </p>
              //     <button
              //       style={{ margin: "0.2rem" }}
              //       className="primary-btn-red"
              //       onClick={() => handleReject(review.id)}
              //       disabled={isLoading}
              //     >
              //       Reject
              //     </button>
              //     &nbsp;
              //     <button
              //       style={{ margin: "0.2rem" }}
              //       className="primary-btn-green"
              //       onClick={() => handleApprove(review.id)}
              //       disabled={isLoading}
              //     >
              //       Approve
              //     </button>
              //   </div>
              // </div>
              <div className="reviews__item" key={review.id}>
                <div className="reviews__item__content">
                  <div
                    className="reviews__img"
                    style={{ backgroundImage: `url(${review.image})` }}
                  ></div>
                  <div className="reviews__item__name">{review.name}</div>
                  <div className="reviews__item__description">
                    {review.content}
                  </div>
                  <div className="reviews__item__Line"></div>
                  <div className="reviews__item__rating">
                    <div className="container-r">
                      <ul className="star__text">
                        <li>Work &amp; projects</li>
                        {review.price !== null && review.price !== 0 && (
                          <li>Price</li>
                        )}
                        {review.service !== null && review.service !== 0 && (
                          <li>Service</li>
                        )}
                        {review.quality !== null && review.quality !== 0 && (
                          <li>Quality</li>
                        )}
                        {review.speed !== null && review.speed !== 0 && (
                          <li>Speed</li>
                        )}
                        {review.recommend !== null &&
                          review.recommend !== 0 && <li>Recommended</li>}
                      </ul>
                    </div>
                    <div className="star">
                      <ul className="star__rating star__out">
                        <Star value={review.rating} />
                        <Star value={review.iscustomer ? review.price : null} />
                        <Star
                          value={review.iscustomer ? review.service : null}
                        />
                        <Star
                          value={review.iscustomer ? review.quality : null}
                        />
                        <Star value={review.iscustomer ? review.speed : null} />
                        <Star
                          value={review.iscustomer ? review.recommend : null}
                        />
                      </ul>
                    </div>
                  </div>
                  <div className="reviews__item__Line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="p-color">
          {" "}
          <div
            style={{
              display: "flex",
              height: "50vh",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              marginTop: "10rem",
            }}
          >
            <h2
              className="h2-color"
              style={{
                marginBottom: "2rem",
                fontWeight: "normal",
                fontSize: "3rem",
              }}
            >
              Admin Section
            </h2>
            <h3
              className="h2-color"
              style={{ marginBottom: "2rem", fontWeight: "normal" }}
            >
              No reviews pending!
            </h3>
          </div>
        </p>
      )}
    </>
  );
};

export default AdminReviewList;
