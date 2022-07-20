import moment from "jalali-moment";


const DateCalculator = (props) => {
let today = new Date(); 
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(); 

const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 3600 * 24));
const x = diffDays(new Date(date), new Date(props.remainingDate));

  return <div>{x}</div>;
};

// const jDate = moment(today, "jYYYY/jMM/jDD").format("YYYY-MM-DD");
// const jDate = moment().format("jYYYY-jM-jD");
// let date = jDate.getFullYear() + '-' + (jDate.getMonth() + 1) + '-' + today.getDate(); 
// const diffDays = (jDate, otherDate) => Math.ceil(Math.abs(jDate - otherDate) / (1000 * 3600 * 24));
// const x = diffDays(new Date(jDate), new Date(props.remainingDate));

//   return <div>{x}</div>;
  // return <div>{jDate}</div>;
// };

 export default DateCalculator;
