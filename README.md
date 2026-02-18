# 🛒 Modern Shopping List App

A sleek, responsive, and functional Shopping List application built with **React** and **Vite**. This app helps users manage their grocery shopping efficiently with persistent storage and pre-built templates.

## ✨ Features

- **Full CRUD:** Add, View, Toggle (Mark as bought), and Delete items.
- **Customizable Templates:**
  - Save your current list as a new reusable template.
  - Load pre-defined or custom templates with one click.
  - Delete templates you no longer need.
- **Live Statistics:** Dynamic footer showing total items, completed items, and progress percentage.
- **Data Persistence:** Uses **Local Storage** to save your list even after closing the browser.
- **Modern UI:** Clean, mobile-friendly design with a warm "Honey & Orange" color palette.
- **Interactive UX:** Confirmations for clearing the list and smooth transitions.

## 🚀 Tech Stack

- **Frontend:** React.js (Hooks: `useState`, `useEffect`)
- **Build Tool:** Vite
- **Styling:** Custom CSS (Flexbox, Responsive Design)
- **Storage:** Browser LocalStorage API

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the app locally:**
    ```bash
    npm run dev
    ```
4.  **Open in browser:** Navigate to `http://localhost:5173`

## 📝 How to Use

1.  **Add Items:** Type the item name in the input field and click "Add" or press Enter.
2.  **Toggle:** Click the checkbox to mark an item as "Packed" (strikethrough effect).
3.  **Manage Templates:**
    - Click any orange badge to load a saved list.
    - Click "Save current list as a template" to create a new one.
    - Click the `×` on a badge to delete that template.
4.  **Delete:** Click the ❌ icon to remove a single item, or use **Clear List** to reset everything.

---
