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

# Folder Structure
The standalone feature makes modules redundant and I want to experiment with a different kind of folder structure. The goal here is to abstract different responsibilites into different folders, such that different types of UI work can be separated. E.g. the layout/structure of a page should not be defined for a feature, since this will limit the number of possibilites. The page component should not rely on specific routes, since this will limit the possibilites, etc.

## The `features` Folder
The features folder should only contain relevant functionality for the feature. Ideally, it would use a mix of presentable components from the `shared` folder, which will be predesigned making it easier and faster to implement features. In case a presentable component does not already exist, then a new one is to be created inside the shared folder, such that any upcoming features can benefit from the presentable component.  
Note that this also includes any styling. We want the features to be independent of structure/layout on the page, since it's not relevant for the feature.

## The `shared` Folder
Any services, components, directives or other functionality that is used in multiple components or can be used in multiple components should be placed inside of this folder.

## The `routes` Folder
This folder will contain all the route configurations for the project. Ideally, there should be a file for each page component.

## The `pages` Folder
This folder will contain the components that represents pages in the project. The page components is responsible for the layout/structure of a page and will ideally use feature component(s) to provide content for the page.

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