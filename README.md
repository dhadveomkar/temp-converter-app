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












