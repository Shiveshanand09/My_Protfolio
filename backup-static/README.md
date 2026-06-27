# Shivesh Anand — Professional Portfolio Website

An interactive, raw-data-centric single-page portfolio website designed for an **AI/ML Engineer, Data Scientist, and Data Analyst**. 

Built with pure vanilla HTML, custom CSS variables, and clean interactive JavaScript, this portfolio features a modern glassmorphic theme system, mouse-reactive physics animations, and modular components.

---

## 🚀 Key Features

*   **Interactive Mathematical Constellation Canvas**: A dynamic background canvas with floating, magnetic data science symbols (`0`, `1`, `x`, `y`, `Σ`, `λ`, `μ`, `σ`, `π`, `R²`, `log`, `e`, `θ`, `AI`, `ML`) that deflect away from the cursor and dynamically connect via thin laser lines.
*   **Multi-Mode Theme Switcher**:
    *   **Dark Mode (Default)**: A deep obsidian black theme.
    *   **Light Mode**: A clean, light-slate dashboard theme.
    *   **RGB Loop Mode**: A dynamic, looping RGB rainbow gradient shifting smoothly across all accents.
*   **Color Accent Switcher**: Instant switching between curated themes: **Cyberpunk Neon Fuchsia (Default)**, **Teal**, **Indigo**, and **Emerald**.
*   **Micro-Animations & Visual Polish**:
    *   **Surprise Confetti Popper**: Clicking buttons, cards, or links creates a colorful burst of gravity-aware confetti particles.
    *   **Circulating Gradient Borders**: Interactive project and contact cards features a running gradient light-border effect on hover.
    *   **Jumping Robot Drone**: A custom SVG robot companion animating smoothly in the background.
    *   **3D Parallax Photo Frame**: Interactive mouse-tilt parallax rotation on the profile photo.
*   **Auto-Typing Subheading**: Smooth typing animation highlighting core roles: *Data Analyst*, *AI/ML Developer*, and *Data Scientist*.
*   **Symmetrical Contact Grid**: An optimized contact form and details section including a prominent featured résumé download button and social connection cards.

---

## 📁 Directory Structure

```text
├── index.html            # Main markup and layout
├── css/
│   └── style.css         # Modern glassmorphic styles, mode keyframes & gradient effects
├── js/
│   └── script.js         # Canvas particles, theme selector, typing effect & confetti popper
└── assets/
    ├── img/              # Profile avatar & site assets
    └── resume/
        └── Shivesh-Anand-Resume.pdf   # Downloadable PDF Resume
```

---

## 🛠️ Installation & Local Development

No compilation or installation of dependencies is required! The project runs entirely on vanilla frontend technologies.

1.  **Clone or Open the Folder**:
    Navigate to the project directory:
    ```bash
    cd "portfolio 2"
    ```
2.  **Run Locally**:
    *   **Directly**: Open the `index.html` file in any modern web browser.
    *   **Via Live Server**: If using VS Code, install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server** to get hot-reloading support.
    *   **Via Simple Python Server**:
        ```bash
        python -m http.server 8000
        ```
        Then, open `http://localhost:8000` in your browser.

---

## 🌐 Deployment

This static website is ready for free, instant deployment on any major host:

### GitHub Pages
1. Push this folder to a GitHub repository (e.g., `github.com/shiveshanand09/portfolio`).
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose your branch (usually `main`), then click **Save**.
4. Your portfolio will be live at `https://shiveshanand09.github.io/portfolio/`.

### Vercel / Netlify
* Simply drag and drop the project folder onto the Netlify or Vercel dashboard for automatic instant deployment.
