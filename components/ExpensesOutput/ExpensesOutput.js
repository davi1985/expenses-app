import { FlatList, View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";

export const ExpensesOutput = ({ expenses, expensesPeriodName }) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriodName} />

      <ExpensesList />
    </View>
  );
};
