import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { ExpenseForm } from "../components/ManageExpense/ExpenseForm";
import {
  storeExpense,
  updateExpense as updatedExpensesFirebase,
} from "../util/http";
import { LoadingOverlay } from "../components/UI/LoaderOverlay";
import { ErrorOverlay } from "../components/UI/ErrorOverlay";

export const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const { deleteExpense, updateExpense, addExpense, expenses } =
    useContext(ExpensesContext);

  const getId = route.params?.expenseId;
  const isEditing = !!getId;

  const selectedExpense = expenses.find((expense) => expense.id === getId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpense(getId);
      deleteExpense(getId);

      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - please try again later");
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);

    try {
      if (isEditing) {
        updateExpense(getId, expenseData);
        await updatedExpensesFirebase(getId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }

      navigation.goBack();
    } catch (error) {
      setError("Could not save expense - please try again later!");
      setIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
