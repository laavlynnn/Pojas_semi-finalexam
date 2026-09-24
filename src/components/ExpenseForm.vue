<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-expense'])

const form = reactive({
  name: '',
  amount: '',
  category: '',
  date: ''
})

const errorMessage = ref('')

function submitExpense() {
  errorMessage.value = ''

  if (
    !form.name.trim() ||
    !form.amount ||
    !form.category ||
    !form.date
  ) {
    errorMessage.value = 'Please complete all required fields.'
    return
  }

  if (Number(form.amount) <= 0) {
    errorMessage.value = 'Amount must be greater than zero.'
    return
  }

  const newExpense = {
    id: Date.now(),
    name: form.name.trim(),
    amount: Number(form.amount),
    category: form.category,
    date: form.date,
    reviewed: false
  }

  emit('add-expense', newExpense)

  form.name = ''
  form.amount = ''
  form.category = ''
  form.date = ''
}
</script>

<template>
  <div class="form-container">
    <h2>Add New Expense</h2>

    <form @submit.prevent="submitExpense">

      <div class="form-group">
        <label for="name">Expense Name</label>

        <input
          id="name"
          type="text"
          v-model="form.name"
          placeholder="Please fill in..."
        />
      </div>

      <div class="form-group">
        <label for="amount">Amount</label>

        <input
          id="amount"
          type="number"
          v-model="form.amount"
          placeholder="Enter the amount..."
          min="0"
          step="0.01"
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>

        <select
          id="category"
          v-model="form.category"
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="date">Expense Date</label>

        <input
          id="date"
          type="date"
          v-model="form.date"
        />
      </div>

      <p
        v-if="errorMessage"
        class="error"
      >
        {{ errorMessage }}
      </p>

      <button
        type="submit"
        class="add-button"
      >
        Add Expense
      </button>

    </form>
  </div>
</template>

