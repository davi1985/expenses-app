import { FlatList } from "react-native";
import { ExpensesItem } from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpensesItem {...itemData.item} />;
};

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={({ id }) => id}
    />
  );
};
