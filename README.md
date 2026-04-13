# 🎨 AnkiArts

🔗 **Live Demo:** [https://ankiartsp.netlify.app/](https://ankiartsp.netlify.app/)

AnkiArts is a frontend e‑commerce web application built with **React** that showcases artwork and allows users to add items to a cart, manage quantities, and experience a simple authentication flow.

---

## ✨ Features

- 🖼️ Browse art paintings
- 🛒 Add to cart with quantity handling
- ➕ Increase quantity for same product (no duplicate items)
- ❌ Remove single item or clear entire cart
- 💾 Cart persistence using `localStorage`
- 🔐 Login & Signup (frontend auth with Context API)
- 🔔 Toast notifications
- 📱 Fully responsive UI

---

## 🧠 Cart Logic (Important)

- Each **product has a unique `id`** (comes from product data)
- Each **cart item has a unique `cartId`** (generated using `uuid`)
- If the same product is added multiple times:

  - The item appears **once** in the cart
  - Its `qty` value increases

- Cart badge (navbar): shows **total quantity**
- Cart page: shows detailed quantity per item

---

## 🔐 Authentication Logic

- Login & Signup handled using **Auth Context**
- User data is stored in `localStorage`
- This is a **frontend‑only auth system** (no backend)

---

## 📸 Screenshots
#                                                           Home Page
![App Screenshot](./public/Screenshot.png)


#                                                           Cart Page 🛒
![App Screenshot](./public/Screenshot%202.png)

---

## 🛠️ Tech Stack

- **React**
- **Context API** (state management)
- **React Router**
- **Tailwind CSS**
- **React Icons**
- **React Toastify**
- **UUID**
- **Netlify** (deployment)

---

⭐ If you like this project, consider giving it a star on GitHub!
