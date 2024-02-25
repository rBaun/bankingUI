# Introduction
This is a hobby project for developing the backend part of a banking application. The goal is to make something that can be released and maintained over time, such that features can be implemented as I see fit or when I have the time to do so.  
The goal of the project is to explore/experiment with new features of Angular.

## Getting Started
TBD

# Tech stack
- Typescript / Angular
- HTML / CSS / SCSS / Angular Material
- Jest / Cypress
- npm / Angular CLI

# Features
- [x] User registration and login
- [ ] Signup as Customer in the Bank
- [ ] Create different types of accounts for the Customer
- [ ] Deposit/withdraw money to/from the account
- [ ] Transfer money between accounts
- [ ] Check transaction history for the owned accounts
- [ ] Adding advisors/employees to the bank
- [ ] Setup a loan system and loan application
- [ ] Setup a credit card system
- [ ] Add support for interest rates/credit scores
- [ ] Add support for different currencies
- [ ] Notify customers about transactions and account changes

# Authentication
This project is initially created using JWT for authentication purposes, but in case a different authentication is required, then this can be changed.

## Adding New Authentication Strategy
Authentication is implemented using strategy/factory pattern, which makes it easy to switch authentication method:

- Create a new class that implements `AuthStrategy`
- Update the `AuthType` to include the new strategy
- Configure `environment.authStrategy` to change strategy

***Disclaimer:** Make sure that the server supports the new strategy.*

# Routing (WIP)
This project will focus on not using a single Module and instead utilize the standalone features. This means routing might be implemented different. This section will function as a cheatsheet to easily add a new route.

## Lazy Loading Another Routing Config
```
{
    path: 'login',
    loadChildren: () => import('./features/login/login.routes')
        .then(m => m.LOGIN_ROUTES)
}
```

## Lazy Loading Standalone Component

```
{
    path: 'login',
    loadComponent: () => import(./features/login/login.component)
        .then(m => m.LoginComponent)
}
```