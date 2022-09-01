import { PestQuestionNewIcon } from "../../assets/pestIcons/pestQuestionsNewIcon";

const PestQuestionStarter = ({startQuestions}) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <PestQuestionNewIcon />
      </div>

      <h6 className="text-center" style={{ fontWeight: 800 }}>
        پرسش و پاسخ
      </h6>
      <p className="page-description px-4 small mt-3">
        در این بخش به تعداد محدودی سوال پاسخ خواهید داد و ما با توجه به پاسخ شما
        آفات، بیماری‌ها و یا دیگر عوامل مشابه با خسارت وارد شده به محصولتان را
        به شما معرفی خواهیم کرد.
      </p>

      <div className="px-3 mt-4">
        <button
          className="btn-dark-blue w-100 "
          onClick={() => startQuestions()}
        >
          شروع
        </button>
      </div>
    </div>
  );
};
export default PestQuestionStarter;
