import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';

const Dialog = ({ onClose }) => {
  return (
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
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dialog;
