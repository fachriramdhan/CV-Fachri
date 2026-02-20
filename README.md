# Portfolio Website Documentation

This project is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. It features a clean, card-based layout with dark mode support, smooth animations, and interactive elements.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) (v19) with [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons:** [Lucide React](https://lucide.dev/) & FontAwesome (via CDN)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion) & CSS Transitions

## 📂 Project Structure

```bash
/src
├── components/          # Reusable UI components
│   ├── Connect.tsx      # "Let's Connect" section
│   ├── Projects.tsx     # Featured projects slider
│   ├── Sidebar.tsx      # Left sidebar with profile & navigation
│   ├── SocialLinks.tsx  # Social media links grid
│   ├── TechStack.tsx    # Technology grid with tooltips
│   └── WorkExperience.tsx # Work history slider
├── App.tsx              # Main application layout & theme logic
├── index.css            # Global styles & Tailwind imports
└── main.tsx             # Application entry point
```

## ✨ Features & Components

### 1. Main Layout (`App.tsx`)
- **Responsive Layout:** Uses a sidebar layout on desktop (`lg:flex-row`) and a stacked layout on mobile (`flex-col`).
- **Theme Toggle:** Built-in dark/light mode switcher using local storage and system preferences.
- **Scroll Management:** Custom scrollbar styling and overflow handling for a polished feel.

### 2. Sidebar (`components/Sidebar.tsx`)
- **Profile Section:** Displays the user's avatar, name, and role.
- **Navigation:** Links to different sections of the portfolio.
- **Theme Toggle Button:** Allows users to switch between dark and light modes.
- **Responsive Behavior:** Fixed sidebar on desktop, static header on mobile.

### 3. Social Links (`components/SocialLinks.tsx`)
- **Grid Layout:** Displays social media profiles in a responsive grid.
- **Hover Effects:** Cards scale up slightly on hover for interactivity.
- **Icons:** Uses Lucide React icons for a consistent look.

### 4. Connect (`components/Connect.tsx`)
- **Call to Action:** A prominent section encouraging visitors to get in touch.
- **Visuals:** Includes an email button and descriptive text.

### 5. Work Experience (`components/WorkExperience.tsx`)
- **Horizontal Scroll:** Displays work history in a horizontally scrolling list.
- **Glassmorphism:** Uses semi-transparent backgrounds (`bg-white/40`) for a modern glass effect.
- **Background Images:** Supports custom background images for each company card.

### 6. Featured Projects (`components/Projects.tsx`)
- **Horizontal Slider:** Projects are displayed in a single row that scrolls horizontally.
- **Interactive Cards:**
  - **Hover Effect:** Cards lift (`-translate-y-2`) and scale (`scale-[1.02]`) on hover.
  - **Details:** Shows project title, description, tech stack tags, and a GitHub link.
- **Navigation Controls:**
  - **Desktop:** Left/Right arrow buttons for manual scrolling.
  - **Mobile:** "SWIPE >>>" animated hint to guide users.

### 7. Tech Stack (`components/TechStack.tsx`)
- **Categorized Grid:** Technologies are grouped by category (Frontend, Backend, Database, Tools, IoT).
- **Tooltips:** Custom tooltips appear on hover to show the full name of the technology.
- **Responsive Grid:** Items wrap automatically on smaller screens (`flex-wrap`).
- **Icons:** Uses Devicon CDN for high-quality technology logos.

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Customization

### Adding New Projects
Edit `src/components/Projects.tsx`:
```typescript
const projects: Project[] = [
  {
    title: "New Project",
    description: "Description here...",
    tags: ["React", "TypeScript"],
    githubUrl: "https://github.com/..."
  },
  // ...
];
```

### Updating Work Experience
Edit `src/components/WorkExperience.tsx`:
```typescript
const experiences = [
  {
    company: "Company Name",
    role: "Your Role",
    bgImage: "https://image-url.com/..."
  },
  // ...
];
```

### Modifying Tech Stack
Edit `src/components/TechStack.tsx` and add new `<TechItem />` components within the appropriate category sections.

## 📱 Responsive Design Notes

- **Mobile First:** Styles are written for mobile first, then adapted for larger screens using Tailwind's `sm:`, `md:`, `lg:`, and `xl:` breakpoints.
- **Touch Friendly:** Swipe gestures are supported natively by the browser's horizontal scrolling behavior on touch devices.
- **Dark Mode:** All components support dark mode via the `dark:` prefix in Tailwind classes.
