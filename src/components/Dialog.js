import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';

const Dialog = ({ onClose }) => {
  return (
    // <div className="dialog-backdrop-review dialog__Popup">
    //   <div className="dialog-box-review dialog__Popup__contents">
    //     <div className="dialog-box-cross-review">
    //       {/* <button onClick={onClose}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="10"
    //           height="10"
    //           fill="#fff"
    //           className="bi bi-x-lg"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    //         </svg>
    //       </button> */}
    //     </div>
    //     <div className="dialog-box-review-p">
    //       <p>Mind leaving a review?</p>
    //     </div>
    //     <Link href="/reviews">
    //       <button
    //         onClick={onClose}
    //         className="primary-btn-green dialog-review-button-review">
    //         Review!
    //       </button>
    //     </Link>
    //     {"   "}
    //   </div>
    // </div>
    <div id="dialog__Popup" className="dialog__Popup">
    <div className="dialog__Popup__contents">
      <div className="dialog__Popup__header sub-heart-h">
        <h3 className="header-title">
          <FontAwesomeIcon className="fa-solid fa-arrow-right-from-bracket log-out-fa" icon={faHeart} />
          
        </h3>
        <div className="close close-l fa fa-close" onClick={onClose}><FontAwesomeIcon icon={faClose} /></div>
      </div>

      <div className="dialog__Popup__body">
        <h3>Mind leaving a review ?</h3>
      </div>
      <div className="dialog__Popup__footer">
        <div className="dialog__Popup__gro">
        <Link href="/reviews" >
        <button className="button button--primary log-out"
          onClick={onClose}>
          Review!
          </button>
          </Link>
          {/* <a className="button button--primary log-c close-l" onClick={handleClosedialogPopup}>
            Cancel
          </a> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dialog;
