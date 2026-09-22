import { ref, watch } from 'vue'

const STORAGE_KEY = 'expenses'

export function useExpenses() {
  const expenses = ref([])

  function loadExpenses() {
    const savedExpenses = localStorage.getItem(STORAGE_KEY)

    if (savedExpenses) {
      try {
        expenses.value = JSON.parse(savedExpenses)
      } catch (error) {
        console.error('Error loading expenses:', error)
        expenses.value = []
      }
    }
  }


  function addExpense(expense) {
    expenses.value.push(expense)
  }

  function reviewExpense(id) {
    const expense = expenses.value.find(
      record => record.id === id
    )

    if (expense) {
      expense.reviewed = true
    }
  }

  function removeExpense(id) {
    expenses.value = expenses.value.filter(
      record => record.id !== id
    )
  }


  watch(
    expenses,
    (newExpenses) => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newExpenses)
      )
    },
    { deep: true }
  )

  loadExpenses()

  return {
    expenses,
    addExpense,
    reviewExpense,
    removeExpense
  }
}