# Mealify – Recipe Finder App

Mealify is a React Native recipe search application built as part of the **React Native Developer Assignment** by **Dev Innovations Labs**.
The app allows users to search meals, view detailed recipes, and save favorites locally with a clean and responsive UI.

This project focuses on **real-world React Native fundamentals**: API integration, navigation, state handling, clean architecture, and UI polish.

---

## 📱 App Overview

**Mealify** helps users:

* Search meals by name
* Browse recipes with images and categories
* View full recipe details including ingredients and instructions
* Save favorite recipes locally for later access

The app uses **TheMealDB public API** and stores favorites using **AsyncStorage**.

---

## ✅ Assignment Requirements Fulfilled

### Core Features (Required)

* ✅ Search for meals using an external API
* ✅ Display recipe cards (image, name, category)
* ✅ Recipe details screen
* ✅ Loading and error handling

### Bonus Features Implemented

* ✅ Save favorites locally (AsyncStorage)
* ✅ Favorites screen
* ✅ Smooth navigation transitions
* ✅ Clean UI with custom theme
* ✅ Icon-based favorite button (Lucide icons)
* ✅ Empty state handling

> Optional feature **Theme Toggle (Light/Dark)** was intentionally skipped to prioritize stability and code clarity within the given time constraint.

---

## 🧱 Tech Stack

* **React Native (Expo)**
* **React Navigation** – Native Stack Navigator
* **AsyncStorage** – Local persistence
* **Lucide React Native** – Icon system
* **TheMealDB API** – Recipe data source
* **Inter Font** – Clean, modern typography

---

## 🗂️ Project Structure

```
MealifyExpo/
├── src/
│   ├── components/
│   │   ├── MealCard.js
│   │   ├── SearchBar.js
│   │   ├── LoadingSpinner.js
│   │   └── ErrorMessage.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── DetailsScreen.js
│   │   └── FavoritesScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── storage.js
│   └── theme/
│       └── colors.js
├── App.js
├── package.json
└── README.md
```

This structure keeps **UI, logic, navigation, and services clearly separated**, making the codebase scalable and easy to maintain.

---

## 🔌 API Used

**TheMealDB API**
Base URL:

```
https://www.themealdb.com/api/json/v1/1
```

Endpoints:

* Search meals: `/search.php?s={query}`
* Meal details: `/lookup.php?i={mealId}`

---

## ⚙️ Setup Instructions

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn
* Expo CLI (optional but recommended)

### Installation

1. Clone the repository

```bash
git clone https://github.com/GreNxNja/Mealify_Dev-Innovations
cd Mealify_Dev-Innovations
```

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npx expo start
```

4. Run on:

* **Web**: press `w`
* **Android Emulator**: press `a`
* **Physical Device**: scan QR using Expo Go

---

## 🧪 App Usage

1. **Search Meals**

   * Enter a meal name (e.g., `chicken`, `pasta`)
   * Press search / enter

2. **View Recipe Details**

   * Tap any recipe card
   * View ingredients, instructions, category, and region

3. **Save Favorites**

   * Tap the heart icon on the details screen
   * Icon fills when saved

4. **View Favorites**

   * Tap the heart icon in the header
   * Access saved meals even after app restart

---

## 🖼️ Screenshots

*Add screenshots here before submission:*

* Home screen with search results
* Recipe details screen
* Favorites screen

---

## 📈 Evaluation Criteria Mapping

| Criteria          | Status                          |
| ----------------- | ------------------------------- |
| Code Quality      | ✅ Modular, reusable components  |
| UI Design         | ✅ Clean, consistent, responsive |
| State Management  | ✅ Local state + AsyncStorage    |
| API Integration   | ✅ Async handling + error states |
| Project Structure | ✅ Organized and readable        |
| Bonus Features    | ✅ Favorites + transitions       |

---

## 📝 Notes

* Expo Router was intentionally disabled to use **explicit React Navigation**, matching assignment expectations.
* Icons were implemented using **Lucide** instead of emoji for a professional UI.
* Typography uses **Inter** for clarity and consistency.
* Code prioritizes **readability and maintainability** over over-engineering.

---

## 🚀 Submission

* Public GitHub Repository: https://github.com/GreNxNja/Mealify_Dev-Innovations
* Google Form Submitted: ✅
* Assignment Completed Within Time Limit: ✅


