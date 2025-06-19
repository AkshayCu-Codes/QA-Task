# 🧪 Magento Cypress Automation Suite

This project contains automated test cases using Cypress to validate critical user flows on the [Magento Demo Website](https://magento.softwaretestingboard.com/).

---

## 📌 Project Objective

Automate the following scenarios using the Cypress framework and **Page Object Model (POM)** design:

- 🔐 Signup with a new user  
- 🔓 Login with valid credentials  
- 🚪 Logout successfully  
- 🔄 Change password  
- ✅ Re-login with updated password  
- ❌ Handle signup with existing email  

---

## 📂 Project Structure

```
magento-automation/
├── cypress/
│   ├── e2e/                   # Cypress test specs
│   │   ├── signup.cy.js
│   │   ├── login.cy.js
│   │   ├── logout.cy.js
│   │   ├── changePassword.cy.js
│   ├── pages/                 # Page Object Model files
│   │   ├── SignupPage.js
│   │   ├── LoginPage.js
│   │   ├── AccountPage.js
│   │   ├── AccountSettingsPage.js
│   ├── fixtures/
│   │   └── credentials.json   # Stores user credentials
│   └── support/
│       └── commands.js
├── .gitignore
├── README.md
├── cypress.config.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 📦 Prerequisites

- Node.js (v18+)
- npm (Node Package Manager)

---

### 🔧 Steps to Get Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/magento-automation.git
cd magento-automation

# 2. Install project dependencies
npm install

# 3. Open Cypress Test Runner (interactive mode)
npx cypress open

# OR run tests in headless mode
npx cypress run
```

---

### 🔍 Notes

- All tests are located in `cypress/e2e/`
- Test data (email & password) is managed via `cypress/fixtures/credentials.json`
- Page Object classes are organized under `cypress/pages/`

---

## ✅ Test Scenarios

| Test Case ID | Description                      | File                  |
|--------------|----------------------------------|-----------------------|
| TC001        | Signup with new user             | `signup.cy.js`        |
| TC002        | Login with valid credentials     | `login.cy.js`         |
| TC003        | Logout from account              | `logout.cy.js`        |
| TC004        | Change password                  | `changePassword.cy.js`|
| TC005        | Login with updated password      | `changePassword.cy.js`|
| TC006        | Signup with existing email       | `signup.cy.js`        |

---

## 🧰 Best Practices Followed

- ✅ Cypress + Page Object Model (POM)
- ✅ Dynamic data using `Date.now()` for unique email generation
- ✅ Fixtures used for managing credential state
- ✅ Clear assertions and validations after actions
- ✅ Modular and reusable components

---

## 📸 Proof of Execution

Execution results :

▶️ [Watch Test Execution Video](https://drive.google.com/file/d/1ul-C2bma2gDT4uScVD8L7mGM0YxfBLJS/view?usp=drive_link)


---

## 👨‍💻 Author

**Akshay CU**  
Full Stack QA Engineer  
📧 Email: akshaycu11@gmail.com
🔗 LinkedIn: [linkedin.com/in/yourprofile](https://www.linkedin.com/in/akshay-c-0a7106134/)
