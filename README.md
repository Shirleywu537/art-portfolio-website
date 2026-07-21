# Ivy E. Lee Art Portfolio Website

A responsive, multi-page portfolio website created for Ivy E. Lee, a high-school artist preparing applications to art schools and specialized art programs. The site presents her artwork, creative process, inspirations, and background through an accessible, visually focused experience.

## Features

- Responsive navigation with a mobile hamburger menu
- Dedicated pages for the artist's background, artwork, artistic process, and influences
- Expandable accordion sections for interests
- Interactive artwork sections that visitors can show or hide
- Image galleries for viewing process sketches one at a time
- Artwork carousel with previous/next controls and indicator dots
- Modal image viewer for examining featured artistic influences
- Responsive layouts for both wide and narrow screens

## Built With

- HTML5
- CSS3
- JavaScript
- jQuery

## Run Locally

1. Clone the repository.

   ```bash
   git clone https://github.com/Shirleywu537/art-portfolio-website.git
   ```

2. Open the project folder.

   ```bash
   cd art-portfolio-website
   ```

3. Start a local server.

   ```bash
   python3 -m http.server 8000
   ```

4. Visit [http://localhost:8000](http://localhost:8000) in your browser.

## Project Structure

```text
├── index.html                  # Home and artist background
├── artwork.html                # Artwork collection and carousel
├── artisticprocess.html        # Artistic process and image galleries
├── influences.html             # Artistic influences and image modals
├── styles/
│   └── site.css                # Shared styling and responsive layouts
├── scripts/
│   ├── accordion.js            # Expandable interest sections
│   ├── carousel.js             # Artwork carousel behavior
│   ├── gallery.js              # Process-gallery interactions
│   ├── gallery2.js             # Additional gallery interactions
│   ├── hamburger.js            # Mobile navigation behavior
│   └── modal.js                # Image-modal behavior
├── images/                     # Artwork and interface assets
└── design-plan/                # Design sketches and project planning
```

## Design Goal

The site balances artwork with context: visitors can browse Ivy’s work while also learning about her artistic interests, process, influences, and goals. Interactive elements make image-heavy content easier to explore without overwhelming the page.
