import moment from "jalali-moment";


const DateCalculator = (props) => {
let today = new Date(); 
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(); 

const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 3600 * 24));
const x = diffDays(new Date(date), new Date(props.remainingDate));

  return <div>{x}</div>;
};

 export default DateCalculator;
