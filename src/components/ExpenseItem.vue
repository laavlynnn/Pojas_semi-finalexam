<script setup>
import { useCurrency } from '../composables/useCurrency'

const props = defineProps({
  expense: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'review',
  'delete'
])

const { formatCurrency } = useCurrency()

function markReviewed() {
  emit('review', props.expense.id)
}

function deleteExpense() {
  emit('delete', props.expense.id)
}
</script>

<template>
  <div
    class="expense-item"
    :class="{ reviewed: expense.reviewed }"
  >

    <div class="expense-info">

      <h3>{{ expense.name }}</h3>

      <p>
        <strong>Amount:</strong>
        {{ formatCurrency(expense.amount) }}
      </p>

      <p>
        <strong>Category:</strong>
        {{ expense.category }}
      </p>

      <p>
        <strong>Date:</strong>
        {{ expense.date }}
      </p>

      <p>
        <strong>Status:</strong>

        <span
          :class="expense.reviewed
            ? 'status-reviewed'
            : 'status-pending'"
        >
          {{ expense.reviewed ? 'Reviewed' : 'Pending' }}
        </span>
      </p>

    </div>

    <div class="expense-actions">

      <button
        v-if="!expense.reviewed"
        @click="markReviewed"
        class="review-button"
      >
        Mark as Reviewed
      </button>

      <button
        @click="deleteExpense"
        class="delete-button"
      >
        Delete
      </button>

    </div>

  </div>
</template>

