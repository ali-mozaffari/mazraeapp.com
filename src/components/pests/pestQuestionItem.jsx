import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PestQuestionIcon } from "../../assets/pestIcons/pestQuestionIcon";
import { getPestQuestion } from "../../redux/slice/pests/pestQuestions";

const PestQuestionItem = ({ pestQuestion }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ answer , setAnswer ] = useState('');
    const result = useSelector((state) => state.pestQuestion);


    useEffect(() => {
        if(result?.results[0]?.fa_title){
            navigate('/desises-info', { state: { pest : result.results[0] } } )
        }
    }, [result]);


    const nextQuestion = () => {

        let data = {
            answer_guid: answer
        }
        dispatch(getPestQuestion(data))

    }

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <PestQuestionIcon />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <h4 style={{ fontWeight: 800 }}>{pestQuestion[0]?.title}</h4>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {pestQuestion[0]?.answer?.map((item) => (
          <div className={answer === item.guid ? "pest-answer-box-selected" : "pest-answer-box"} onClick={() => setAnswer(item.guid)}>{item.title}</div>
        ))}
      </div>
      <div className="d-flex justify-content-between w-100 mt-5">
        <button className="pest-answer-next-btn " onClick={() => answer.length > 0 ? nextQuestion() : alert('choose answer')}>بعدی</button>
        {/* <button className="pest-answer-last-btn ">شروع مجدد</button> */}
      </div>

    </div>
  );
};
export default PestQuestionItem;
