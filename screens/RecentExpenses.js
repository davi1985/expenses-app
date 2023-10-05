import { Text } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";

export const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriodName="Last 7 Days" />;
};
