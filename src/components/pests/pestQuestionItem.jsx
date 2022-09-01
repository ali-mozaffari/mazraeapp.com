import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PestQuestionIcon } from "../../assets/pestIcons/pestQuestionIcon";
import {
  deletePestQuestions,
  getPestQuestion,
} from "../../redux/slice/pests/pestQuestions";

const PestQuestionItem = ({ pestQuestion }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [hasPast, setHasPast] = useState(0);
  const result = useSelector((state) => state.pestQuestion);

  useEffect(() => {
    if (result?.results[0]?.fa_title) {
      dispatch(deletePestQuestions());
      navigate("/desises-info", { state: { pest: result.results[0] } });
    }
  }, [result]);

  const nextQuestion = () => {
    let data = {
      answer_guid: answer,
    };
    dispatch(getPestQuestion(data));
    setAnswer("");
    setHasPast(hasPast + 1);
  };

  console.log(hasPast)

  const lastQuestion = (val) => {
    const lastQuestionCode = val.slice(0, val.length - 1)
    let data = {
      question_code: lastQuestionCode,
    };
    dispatch(getPestQuestion(data));
    setAnswer("");
    setHasPast(hasPast - 1);
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <PestQuestionIcon />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <h5 style={{ fontWeight: 800, color: "#555" }}>
          {pestQuestion[0]?.title}
        </h5>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {pestQuestion[0]?.answer?.map((item) => (
          <div
            className={
              answer === item.guid
                ? "pest-answer-box-selected"
                : "pest-answer-box"
            }
            onClick={() => setAnswer(item.guid)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <hr style={{backgroundColor: '#eee'}}/>
      <div className="d-flex justify-content-between w-100 mt-2">
        <button
          className={
            answer.length > 0
              ? "pest-answer-next-btn-enable"
              : "pest-answer-next-btn-disable"
          }
          onClick={() =>
            answer.length > 0 ? nextQuestion() : alert("choose answer")
          }
        >
          بعدی
        </button>
        {hasPast >= 1 ? (
          <button className="pest-answer-last-btn" onClick={() => lastQuestion(pestQuestion[0]?.code)}>
            قبلی
          </button>
        ) : null}

        {/* <button className="pest-answer-last-btn" onClick={() => navigate(-1)}>
          شروع مجدد
        </button> */}
      </div>
    </div>
  );
};
export default PestQuestionItem;
