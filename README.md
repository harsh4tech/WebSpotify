# WebSpotify - Spotify Web Player Clone

A responsive frontend clone of the Spotify Web Player interface built with HTML, CSS, and JavaScript. This project mimics the modern dark-themed aesthetic of Spotify and includes basic audio playback functionality.

## 🚀 Features

* **Responsive User Interface:**
    * Fully responsive layout that adapts to Desktop, Tablet, and Mobile screens.
    * Collapsible sidebar and navigation elements for smaller viewports.
* **Music Player Functionality:**
    * **Play/Pause Control:** Custom JavaScript logic to toggle audio playback.
    * **Dynamic Icon Switching:** The play button icon automatically switches between "Play" and "Pause" states based on audio status.
    * **Seekbar UI:** Visual representation of a music progress bar (static UI).
* **Modern CSS Styling:**
    * **CSS Flexbox:** Used extensively for alignment in the navbar, sidebar, and music grids.
    * **Custom Scrollbars:** Styled scrollbars to match the dark theme.
    * **Hover Effects:** Interactive hover states on music cards, buttons, and navigation links.
    * **Google Fonts:** Utilizes the 'Nunito' font family for a clean, modern look.
* **Asset Management:**
    * Includes SVG icons for scalable, crisp graphics.
    * Organized directory structure for images and music files.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the web player.
* **CSS3:** Custom styling, media queries for responsiveness, and flexbox layouts.
* **JavaScript (ES6):** DOM manipulation for the audio player and event handling.

## 📂 Project Structure

```text
harsh4tech/webspotify/
├── assets/                  # Icons (SVG) and Album Art (PNG)
│   ├── favicon.svg
│   ├── home.svg
│   ├── play.svg
│   ├── playing.svg
│   ├── playsong.svg
│   ├── next.svg
│   ├── previous.svg
│   └── [Screenshots...]
├── music/                   # Audio files
│   └── Naina.mp3
├── index.html               # Main HTML structure
├── style.css                # Global styles and media queries
├── script.js                # Audio player logic
└── README.md                # Project documentation
