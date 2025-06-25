# 🌡️ Temp Converter App

A simple and interactive web application that converts temperatures between Celsius and Fahrenheit using Angular. Ideal for learning about Angular components, event handling, two-way binding, and data interpolation.

---

## 📸 Preview

![App Screenshot](screenshot.png)

---

## 🛠️ Features

- 🔁 Convert between Celsius and Fahrenheit in real time  
- 📲 Two-way data binding for seamless user interaction  
- ✅ Form validation to ensure correct numeric input  
- 🎯 Modular architecture with standalone Angular components  

---

## 🚀 Technologies Used

- Angular
- TypeScript
- HTML & CSS
- Node.js

---

## 📂 Project Structure

```plaintext
temp-converter-app/
│
├── src/
│   ├── app/
│   │   ├── temp-converter/
│   │   │   ├── temp-converter.ts
│   │   │   ├── temp-converter.html
│   │   │   └── temp-converter.css
│   │   └── app.component.ts
│   └── index.html
├── angular.json
├── package.json
└── README.md

```

---

## 🔽 How to Clone the Project

To get a local copy of the project on your machine, run the following commands:

```bash
# Clone the repository using HTTPS
git clone https://github.com/your-username/temp-converter-app.git

# OR clone using SSH
git clone git@github.com:your-username/temp-converter-app.git

# Navigate to the project folder
cd temp-converter-app
```

> **Note**: Replace `your-username` with your actual GitHub username.

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js & npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

```bash
npm install
```

### Running Locally

```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

---

## ✏️ How It Works

- User inputs a temperature in either Celsius or Fahrenheit.
- The app automatically updates the converted temperature using Angular logic and binding.

```ts
toFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

toCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5/9;
}
```

## 🧱 Full Development Process

This section outlines the step-by-step process followed to build the Temp Converter App using Angular.

### 1. Project Setup

- Installed Angular CLI globally:
  ```bash
  npm install -g @angular/cli
  ```
- Created a new Angular project:
  ```bash
  ng new temp-converter-app
  ```
- Selected options: Standalone components, no routing, and CSS for styling.

### 2. Component Creation

- Generated a standalone component for temperature conversion:
  ```bash
  ng generate component temp-converter --standalone
  ```
- This created:
  - `temp-converter.ts`
  - `temp-converter.html`
  - `temp-converter.css`

### 3. UI Design (HTML & CSS)

- Created a simple form with two input fields: Celsius and Fahrenheit.
- Used Angular’s two-way binding `[(ngModel)]` to link input fields with component properties.
- Added minimal CSS for a clean layout.

### 4. Logic Implementation (TypeScript)

- Added two properties: `celsius` and `fahrenheit`.
- Implemented conversion methods:
  - `convertToFahrenheit()`
  - `convertToCelsius()`
- Triggered conversion on input events.

### 5. Data Binding

- Used:
  - `[(ngModel)]` for two-way binding.
  - `(input)` event for calling conversion methods.
  - `*ngIf` for conditional rendering (if needed).

### 6. Testing and Debugging

- Tested in the browser by running:
  ```bash
  ng serve
  ```
- Validated logic and UI functionality.
- Fixed minor bugs related to decimal formatting and empty input.

### 7. Optimization

- Prevented infinite loops by avoiding bi-directional conversion triggers.
- Ensured input validation using `type="number"` and `min`, `max` attributes.

### 8. Build and Deployment (Optional)

- Built the production version:
  ```bash
  ng build
  ```
- Can be deployed on GitHub Pages, Firebase, or any static host.

---












