import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InfoNewIcon } from "../../../assets/pestIcons/infoNewIcon";
import { PestMoreInfoIcon } from "../../../assets/pestIcons/pestMoreInfoIcon";
import { UploadFileIcon } from "../../../assets/pestIcons/uploadFileIcon";
import PestUploadFileHelpModal from "./pestUploadFileHelpModal";

const PestFalseDetected = () => {
  const [showUploadHelpModal, setShowUploadHelpModal] = useState(false);
  const [file, setFile] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="mt-3 border rounded-3 mx-auto px-2 py-3">
      <p className="small" style={{ fontFamily: "12px !important" }}>
        می‌توانید با ارسال عکس و اطلاعات مربوط به آسیب دیدگی محصول از کارشناسان
        ما کمک بگیرید.
      </p>

      <hr />

      <div
        className="d-flex align-items-center"
        onClick={() => setShowUploadHelpModal(true)}
      >
        <PestMoreInfoIcon />
        <span className="mx-1" style={{ color: "#2C689A", fontWeight: 800 }}>
          راهنمای ارسال تصویر محصول
        </span>
      </div>

      <div
        style={{
          border: "1px dashed gray",
          borderRadius: "16px",
          backgroundColor: "#F6F8F7",
        }}
        className="p-0 mt-3"
      >
        <div className="d-flex justify-content-center">
          <UploadFileIcon />
        </div>

        <p
          className="text-center"
          style={{ fontWeight: 800, color: "#2C689A" }}
        >
          آپلود تصویر محصول
        </p>
        <p className="text-gray text-center small">
          فایل‌های خود را بارگذاری کنید
        </p>
      </div>

      <textarea
        style={{
          border: "none",
          borderRadius: "16px",
          width: "100%",
          padding: "8px 16px",
          backgroundColor: "#F6F8F7",
        }}
        className="p-0 mt-3"
        placeholder="
        توضیحات.."
        rows={6}
      ></textarea>

      <PestUploadFileHelpModal
        showModal={showUploadHelpModal}
        setShowModal={setShowUploadHelpModal}
      />

      <div>
        {file.length > 0 ? (
          <button
            className={
              false
                ? "pest-submit-report w-100 mt-3 mb-4"
                : "pest-submit-report-disable w-100 mt-3 mb-4"
            }
          >
            ثبت بازخورد
          </button>
        ) : (
          <button className="pest-submit-back-home w-100 mt-3 " onClick={() => navigate('/desises')}>بازگشت</button>
        )}
      </div>
    </div>
  );
};

export default PestFalseDetected;
