import React, { useState, useEffect } from "react";

import 'balloon-css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";

const Star = ({ value }) => {
  // Function to render stars with specified color count
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= count ? '#FFD700' : '#ccc'; // Yellow for filled stars, gray for empty stars
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
      {value !== null && value !== 0 ? (
        renderStars(value)
      ) : (
        <span></span>
      )}
    </li>
  );
};

const Card = ({ heading, image, rating, price, service, quality, speed, recommend, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`reviews__item${isLoading ? " loading" : ""}`}>
      <div className="reviews__item__content">
        {isLoading ? (
          <>
            <div className="reviews__img u0"></div>
            <div className="reviews__item__name">sdk8q</div>
            <div className="reviews__item__description">
              One of the best web designers out there. Has great customer
              support with a quick and reliable response time. I highly
              recommend this guy if you are trying to find someone to make your
              website.
            </div>
            <div className="reviews__item__Line"></div>
            <div className="reviews__item__rating">
              <div className="container-r">
                <ul className="star__text">
                  <li>Work &amp; projects</li>
                  <li>Price</li>
                  <li>Service</li>
                  <li>Quality</li>
                  <li>Speed</li>
                  <li>Recommended</li>
                </ul>
              </div>
              <div className="star">
                <ul className="star__rating star__out">
                </ul>
              </div>
            </div>
            <div className="reviews__item__Line"></div>
            <div className="reviews__item__date">
              <div>
                <ul className="date__text">
                  <li className="date__li">Updated At</li>
                  <li className="date__li">Published At</li>
                </ul>
              </div>
              <div className="date-s">
                <ul className="date__rating">
                  <li className="date__mtop">
                    <span
                      className="date__bg balloon"
                      aria-label="6/29/2022, 10:11:40 AM"
                      data-balloon-pos="up-right"
                    >
                      a year ago
                    </span>
                  </li>
                  <li>
                    <span
                      className="date__bg balloon"
                      aria-label="6/29/2022, 10:11:45 AM"
                      data-balloon-pos="up-right"
                    >
                      a year ago
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
           <div className="reviews__img" style={{ backgroundImage: `url(${image})`}}></div>
            <div className="reviews__item__name">{heading}</div>
            <div className="reviews__item__description">
              {description}
            </div>
            <div className="reviews__item__Line"></div>
            <div className="reviews__item__rating">
              <div className="container-r">
                <ul className="star__text">
                  <li>Work &amp; projects</li>
                  {price !== null && price !== 0 && <li>Price</li>}
                  {service !== null && service !== 0 && <li>Service</li>}
                  {quality !== null && quality !== 0 && <li>Quality</li>}
                  {speed !== null && speed !== 0 && <li>Speed</li>}
                  {recommend !== null && recommend !== 0 && <li>Recommended</li>}
                </ul>
              </div>
              <div className="star">
                <ul className="star__rating star__out">
                  <Star value={rating} />
                  <Star value={price} />
                  <Star value={service} />
                  <Star value={quality} />
                  <Star value={speed} />
                  <Star value={recommend} />
                </ul>
            </div>
            </div>
            <div className="reviews__item__Line"></div>
            <div className="reviews__item__date">
              <div>
                <ul className="date__text">
                  <li className="date__li">Updated At</li>
                  <li className="date__li">Published At</li>
                </ul>
              </div>
              <div className="date-s">
                <ul className="date__rating">
                  <li className="date__mtop">
                    <span
                      className="date__bg balloon"
                      aria-label="6/29/2022, 10:11:40 AM"
                      data-balloon-pos="up-right"
                    >
                      a year ago
                    </span>
                  </li>
                  <li>
                    <span
                      className="date__bg balloon"
                      aria-label="6/29/2022, 10:11:45 AM"
                      data-balloon-pos="up-right"
                    >
                      a year ago
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>


    // <div className={`review-card${isLoading ? " loading" : ""}`}>
    //   {isLoading ? (
    //     <>
    //       <div className="heading">
    //         <p>Dummy name</p>
    //       </div>
    //       <div className="description">
    //         <p>
    //           Dummy description Dummy description Dummy description Dummy
    //           description Dummy description Dummy description Dummy description
    //         </p>
    //       </div>
    //       <div className="stars">
    //         <p>dummy stars</p>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <h3>{heading}</h3>
    //       <p>{description}</p>
    //       <div className="rating">
    //         {[...Array(stars)].map((_, index) => (
    //           <FaStar key={index} className="review-card-star" />
    //         ))}
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default Card;
