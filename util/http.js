import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-3544e-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const { data } = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );

  return data.name;
};

export const fetchExpenses = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in data) {
    const expenseObj = {
      id: key,
      amount: data[key].amount,
      date: new Date(data[key].date),
      description: data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};
