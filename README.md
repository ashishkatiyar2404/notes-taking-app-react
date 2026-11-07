# WaveNote 📝

> **A Warm Notion-Style Minimalist Workspace paired with Soft Pastel Claymorphic Squircle Cards.**  
> Manage your daily tasks, ideas, and workflow in an elegant, clutter-free workspace. Capture thoughts at the speed of light.

---

## ✨ Features

### 🎨 Design & Aesthetic
- **Warm Notion Minimalist Base:** Clean alabaster canvas (`#FBFBFA`), warm stone sidebar (`#F7F7F5`), crisp borders (`#E9E9E7`), and charcoal-brown branding (`#37352F`).
- **Soft Pastel Claymorphic Cards:** Note editor and note cards styled as soft squircle cards (`rounded-[24px]`) with subtle 3D claymorphic depth (`box-shadow` elevation + inset lighting).
- **5 Rich Distinct Note Colors (+ Pure White):**
  - 🤍 **Pure White:** `#FFFFFF` (Default)
  - 🍑 **Warm Peach:** `#FFBFA8`
  - ☀️ **Butter Yellow:** `#FFE082`
  - 🍃 **Fresh Mint:** `#A7F3D0`
  - 🌊 **Sky Blue:** `#BAE6FD`
  - 🪻 **Soft Lavender:** `#DDD6FE`
- **Enlarged, Accessible Action Buttons:** Prominent 34px action buttons with clear hover states for Editing, Archiving, and Trashing.
- **Dashed Empty States:** Beautiful centered empty-state cards across Notes, Archive, and Trash views.
- **Custom Branding & Vector Favicon:** Custom WaveNote SVG squircle favicon, high-res PWA icons, and metadata.

---

### 🚀 Core Functionality
- **Full CRUD Note Taking:** Create, read, edit in modal, move to archive, move to trash, and permanently delete notes.
- **Tag & Priority Management:** Assign tags (*Work*, *Health*, *Exercise*, *Chores*) and priority levels (*High*, *Medium*, *Low*).
- **Interactive Filter Pills:** Quick-toggle filter pills for sorting by date (*Oldest first*, *Newest first*), multi-tag filtering, priority filtering, and a one-click *Clear All* reset.
- **Live Global Search:** Sticky top navigation bar with real-time search across note titles, body content, and tags.
- **Persistent Authentication:** Full session persistence with `localStorage` across page reloads. Logged-in users are automatically guarded against re-accessing login screens.
- **One-Click Guest Login:** Instant demo access with pre-filled guest credentials.
- **Archiving & Trash Recovery:** Soft-delete to Trash or Archive with one-click restore and permanent deletion options.

---

## 🛠️ Tech Stack

- **Frontend:** [React 18](https://react.dev/) (`createRoot`)
- **Routing:** [React Router v6](https://reactrouter.com/) (Protected routes with `AuthRequire` and fallback redirection)
- **State Management:** React Context API + `useReducer` (`AuthContext`, `NoteContext`, `FilterContext`)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/md`, `react-icons/ai`, `react-icons/io5`)
- **Mock Backend:** [MirageJS](https://miragejs.com/) with in-memory database, auth controllers, and JWT encoding/decoding
- **Styling:** Pure Modern CSS with custom properties, squircle geometry, and claymorphic elevations

---

## 🔑 Demo Credentials

To try WaveNote immediately without registering:

| Field | Demo Credential |
| :--- | :--- |
| **Email** | `katiyar@gmail.com` |
| **Password** | `Katiyar@123` |

*Or simply click the **"Guest Login"** button on the Login page.*

---

## 📂 Project Architecture

```
src/
├── Assets/                 # Brand imagery and hero preview assets
├── backend/                # MirageJS mock server, controllers, and database
│   ├── controllers/        # Auth, Notes, Archive, and Trash controllers
│   ├── db/                 # Seed data (users, default notes)
│   └── utils/              # Auth utilities and JWT helper
├── Components/
│   ├── EditNotes/          # Portal modal for editing existing notes
│   ├── Filters/            # Filter pills, sort buttons, and FilterHook logic
│   ├── Navbar/             # Sticky header with global search & user pill
│   ├── NotesList/          # Claymorphic squircle note cards grid
│   ├── RichTextEditor/     # Note creation card with color palette selector
│   └── Sidebar/            # Workspace navigation links with live counters
├── Context/
│   ├── AuthContext.js      # Session management and persistent auth state
│   ├── FilterContext.js    # Global filter state and search query
│   └── NoteContext.js      # CRUD operations for notes, archive, and trash
├── Pages/
│   ├── Archive/            # Archived notes management view
│   ├── Auth/               # Login, Sign Up, and AuthRequire guard
│   ├── Home/               # Main workspace dashboard
│   ├── LandingPage/        # Hero section with feature pills and previews
│   └── Trash/              # Trash bin view with restore and purge actions
├── Reducers/               # Pure reducer functions (AuthReducer)
├── utils/                  # Color utilities & legacy normalizer
├── App.js                  # Route definitions and application shell
└── index.js                # React 18 entry point with nested context providers
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ashishkatiyar2404/notes-taking-app-react.git
cd notes-taking-app-react
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Start the development server
```bash
npm start
```
The app will open automatically at [http://localhost:3000](http://localhost:3000).

### 4. Build for production
```bash
npm run build
```
Creates an optimized, production-ready bundle in the `build/` folder.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
