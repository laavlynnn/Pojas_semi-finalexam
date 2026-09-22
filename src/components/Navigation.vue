<template>
    <nav class="navbar navbar-expand-lg bg-primary navbar-light shadow-sm">
        <div class="container">
            <RouterLink to = '/'>
                My Personal Expense Tracker
            </RouterLink>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapses"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <RouterLink 
                        to="/"
                        class="nav-link"
                        >
                        Home
                    </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink
                        to="/about"
                        class="nav-link"
                        >
                        About
                    </RouterLink>

                    <li class="nav-item">
                        <RouterLink
                        to="/expenseForm"
                        class="nav-link"
                        >
                        Expenses
                    </RouterLink>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>