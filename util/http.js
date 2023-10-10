import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-3544e-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
};
