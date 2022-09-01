import PestBreadCrumb from "./../../components/pests/pestBreadCrumb";
import PestProductCard from "./../../components/pests/PestProductCard";
import { PestQuestionNewIcon } from "./../../assets/pestIcons/pestQuestionsNewIcon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPestQuestion } from "../../redux/slice/pests/pestQuestions";
import { useEffect, useState } from "react";
import PestQuestionStarter from "../../components/pests/pestQuestionStater";
import PestQuestionItem from "../../components/pests/pestQuestionItem";

const PestQuestionsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showQuestion, setShowQuestion] = useState(false);
  const pestProduct = useSelector((state) => state.pestProduct);
  const pestQuestion = useSelector((state) => state.pestQuestion);

  const menuList = [
    {
      path: "/desises",
      title: "کلینیک مزرعه",
      is_last: false,
    },
    {
      path: "",
      title: pestProduct.product[0].title,
      is_last: false,
    },
    {
      path: "",
      title: "پرسش و پاسخ",
      is_last: true,
    },
  ];

  const startQuestions = () => {
    let data = {
      product_guid: pestProduct.product[0].guid,
    };
    dispatch(getPestQuestion(data));
  };

  useEffect(() => {
    if (pestQuestion?.results[0]?.code) {
      setShowQuestion(true);
    }else{
      setShowQuestion(false)
    }
  }, [pestQuestion.results]);

  return (
    <div
      className="page-container container-fluid pb-4 mb-5"
      // style={{ height: "72vh" }}
    >
      <PestBreadCrumb data={menuList} clearQuestion={true} main={showQuestion}/>
      <div className="mt-3 mx-2">
        <PestProductCard
          product={pestProduct.product[0]}
          selectedProduct={pestProduct.product[0]}
        />
      </div>

      <hr />

      {showQuestion ? (
        <PestQuestionItem pestQuestion={pestQuestion.results} />
      ) : (
        <PestQuestionStarter startQuestions={startQuestions} />
      )}
    </div>
  );
};

export default PestQuestionsPage;
