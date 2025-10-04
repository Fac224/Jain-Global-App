# Jain Global Website

A modern, responsive website for Jain Global Partners - a multi-strategy global hedge fund.

## Overview

This is a static website showcasing Jain Global's investment portfolio, team, and company information. The site features a clean, professional design with parallax scrolling effects and responsive layout.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Parallax Scrolling**: Smooth scrolling effects with video background
- **Modern UI**: Clean, professional design with smooth animations
- **Portfolio Showcase**: Dynamic portfolio carousel with investment examples
- **Team Section**: Leadership team presentation
- **News Integration**: Latest company news and updates
- **ESG Commitment**: Environmental, Social, and Governance initiatives
- **Contact Information**: Multiple office locations and contact details

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript**: Interactive features and carousel functionality
- **Bootstrap**: Responsive grid system and components
- **Owl Carousel**: Portfolio and news carousels
- **jQuery**: DOM manipulation and event handling

## Project Structure

```
jain-global-app/
├── index.html              # Main HTML file
├── css/
│   └── parallax.css        # Custom CSS for parallax effects
├── js/
│   └── parallax.js         # JavaScript for parallax functionality
├── shutterstock_3736458799.mp4  # Hero background video
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in a web browser, or
3. Run a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

4. Open your browser and navigate to `http://localhost:8000`

## Company Information

**Jain Global Partners**
- Multi-strategy global hedge fund
- Managing over $1 billion of capital
- Focus on special situations investing
- Offices in New York and London

### Contact Information

**New York Office**
- Address: 510 Madison Avenue, New York, NY 10022, United States
- Email: info.us@jainglobal.com
- Phone: Office +1(212), Investor Relations +1(212)

**London Office**
- Email: info.london@jainglobal.com

## ESG Commitment

At Jain Global, we're committed to:
- Decarbonising our Dubai campus
- Installing solar panels at our Singapore campus
- Embedding ESG deep into our curriculum

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Development

### Customization

The website uses CSS custom properties for easy theming. Main color variables are defined in the CSS:

```css
:root {
  --wp--preset--color--dark-brown-gray: #E6CDA2;
  /* Add your custom colors here */
}
```

### Adding New Portfolio Items

Portfolio items are structured as HTML cards within the portfolio carousel. To add new items:

1. Locate the portfolio section in `index.html`
2. Add a new portfolio card following the existing structure
3. Update the carousel JavaScript if needed

## License

This project is proprietary to Jain Global Partners.

## Support

For technical support or questions about this website, please contact:
- Email: info.us@jainglobal.com
- Website: https://jainglobal.com

---

© 2025 Jain Global Partners. All rights reserved.
