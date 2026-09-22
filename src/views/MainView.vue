<template>
  <main class="expenses-page">

    <div class="page-heading">
      <h1>Personal Expense Tracker</h1>

      <p>
        Keep track of your daily spending.
      </p>
    </div>

    <div class="summary-card">
      <div>
        <span>Total Expenses</span>
        <strong>{{ expenses.length }}</strong>
      </div>

      <div>
        <span>Total Amount</span>
        <strong>{{ formatCurrency(totalAmount) }}</strong>
      </div>

      <div>
        <span>Reviewed</span>
        <strong>{{ reviewedCount }}</strong>
      </div>
    </div>

    <div class="expense-layout">

      <ExpenseForm
        @add-expense="handleAddExpense"
      />

      <ExpenseList
        :expenses="expenses"
        @review="handleReview"
        @delete="handleDelete"
      />

    </div>

  </main>
</template>

<script setup>
import { computed } from 'vue'

import ExpenseForm from '../components/ExpenseForm.vue'
import ExpenseList from '../components/ExpenseList.vue'

import { useExpenses } from '../composables/useExpenses'
import { useCurrency } from '../composables/useCurrency'

const {
  expenses,
  addExpense,
  reviewExpense,
  removeExpense
} = useExpenses()

const { formatCurrency } = useCurrency()

const totalAmount = computed(() => {
  return expenses.value.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  )
})

const reviewedCount = computed(() => {
  return expenses.value.filter(
    expense => expense.reviewed
  ).length
})

function handleAddExpense(expense) {
  addExpense(expense)
}

function handleReview(id) {
  reviewExpense(id)
}

function handleDelete(id) {
  removeExpense(id)
}
</script>