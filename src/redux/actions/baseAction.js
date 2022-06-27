// const INCREMENT = 'counter/increment'
//
// export default function increment(amount) {
//   return {
//     type: INCREMENT,
//     payload: amount,
//   }
// }

import {createAction} from "@reduxjs/toolkit";

const increment = createAction('increment')

export default increment;
// const action = increment(3)
