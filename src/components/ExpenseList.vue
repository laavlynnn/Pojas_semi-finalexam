<script setup>
import ExpenseItem from './ExpenseItem.vue'

defineProps({
  expenses: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'review',
  'delete'
])

function handleReview(id) {
  emit('review', id)
}

function handleDelete(id) {
  emit('delete', id)
}
</script>

<template>
  <div class="list-container">

    <div class="list-header">
      <h2>Expense List</h2>

      <span class="expense-count">
        {{ expenses.length }}
        {{ expenses.length === 1 ? 'expense' : 'expenses' }}
      </span>
    </div>

    <div
      v-if="expenses.length === 0"
      class="empty-message"
    >
      No expenses recorded yet.
    </div>

    <div v-else>

      <ExpenseItem
        v-for="expense in expenses"
        :key="expense.id"
        :expense="expense"
        @review="handleReview"
        @delete="handleDelete"
      />

    </div>

  </div>
</template>

