## ✈️ FLIGHTMS – Flight Management Dashboard

FLIGHTMS is a modern, responsive flight management dashboard built using **Vue.js** and **Vuetify**. It offers a clean, user-friendly interface for airlines or aviation services to manage flights, bookings, staff, reports, and more.

[FLIGHTMS UI](https://flightapp-by-vijay.web.app/)

---

### 🚀 Features

* **Dashboard Overview**

  * Active, Scheduled, Unbooked Flights, and Seat Booking summaries
  * Fleet performance metrics (occupancy, delays, cancellations)
  * Real-time alerts and popular routes

* **Flight Scheduling**

  * Add/edit flights with full step-by-step input
  * Time, recurrence pattern, and aircraft info management
  * Weekly schedule and time range selection

* **Booking System**

  * Manage bookings with passenger lists
  * Real-time flight booking statuses (confirmed, pending, etc.)

* **Reports & Analytics**

  * Sales and performance graphs
  * Exportable and filterable data (not shown but assumed from structure)

* **User Management**

  * Staff and account settings modules
  * Role and access control

---

### 🛠️ Tech Stack

| Tech                  | Description                            |
| --------------------- | -------------------------------------- |
| Vue.js                | Frontend JavaScript framework          |
| Vuetify               | UI Component Library (Material Design) |
| Vue Router            | SPA Routing                            |
| Vuex                  | State Management                       |
| Axios                 | API Calls                              |
| ApexCharts            | Graph rendering                        |

---

### 📱 Fully Responsive

Designed mobile-first to support all screen sizes:

* Responsive sidebar
* Dynamic tables
* Collapsible and mobile-friendly steps

---

### 📂 Project Structure

```
src/
├── App.vue
├── assets
│   ├── logo.png
│   ├── logo.svg
│   └── spiral.png
├── components
│   ├── Bookings
│   ├── Dashboard
│   ├── Flights
│   └── StaticContent
├── main.js
├── plugins
│   └── vuetify.js
├── router
│   └── index.js
├── services
│   └── Eventservices.js
├── store
│   └── index.js
└── views
    ├── Bookings.vue
    ├── Dashboard.vue
    ├── Flights.vue
    └── main.vue
```

---

### 🔧 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Vijayramesh26/flightApp.git
cd flightApp

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

 

### 📈 Deployment

Can be deployed on:

* Firebase Hosting 

---
