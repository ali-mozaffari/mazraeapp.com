import { Modal } from "react-bootstrap";
import { CloseIcon } from "../../../assets/icon";
import { CheckNewIcon } from "../../../assets/pestIcons/checkNewIcon";

const PestUploadFileHelpModal = ({ showModal, setShowModal }) => {
  return (
    <Modal centered show={showModal} className="farm-field-modal">
      <div className="px-3 pb-4">
        <div className="pt-3 d-flex justify-content-between align-items-center">
          <span>راهنمای ارسال تصویر محصول</span>
          <div>
            <CloseIcon fill="gray" />
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between mt-3">
          <CheckNewIcon />
          <span className="mx-2">
            به محصول نزدیک شوید و مطمئن شوید که آسیب محصول در داخل قاب قرار می
            گیرد.
          </span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <CheckNewIcon />
          <span className="mx-2">
          مطمئن شوید که دوربین به درستی روی آسیب محصول فوکوس شده است.
          </span>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <CheckNewIcon />
          <span className="mx-2">
          مطمئن شوید که محصول به وضوح قابل مشاهده است و خیلی تاریک یا روشن نیست.
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default PestUploadFileHelpModal;
