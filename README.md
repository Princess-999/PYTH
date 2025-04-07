# Polokwane Youth Tech Hub Website

A responsive, donor-friendly website for the Polokwane Youth Tech Hub (PYTH), a non-profit organization dedicated to empowering youth through digital literacy.

## Features

- Responsive design optimized for all devices
- Interactive program calendar
- Secure donation system with PayFast integration
- Blog section for updates and student success stories
- Contact form for volunteer sign-ups
- SEO optimized with proper meta tags and schema markup

## Tech Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- FullCalendar.js for program scheduling
- PayFast payment gateway integration

## Project Structure

```
pyth-website/
├── index.html
├── about.html
├── programs.html
├── donate.html
├── blog.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── hero-bg.jpg
    ├── student1.jpg
    ├── student2.jpg
    ├── facebook.png
    └── instagram.png
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pyth-website.git
   cd pyth-website
   ```

2. Configure PayFast Integration:
   - Open `donate.html`
   - Replace `YOUR_MERCHANT_ID` and `YOUR_MERCHANT_KEY` with your PayFast credentials
   - Update the return, cancel, and notify URLs with your domain

3. Update Contact Information:
   - Replace placeholder contact details in footer sections
   - Update Google Maps embed code in `contact.html`

4. Add Your Content:
   - Replace placeholder images in the `images` directory
   - Update program details in `programs.html`
   - Add real student success stories
   - Modify the calendar events in `programs.html`

## Maintenance Guide

### Adding New Programs

1. Open `programs.html`
2. Copy an existing program card from the `program-cards` section
3. Update the content and level attribute
4. Add corresponding calendar events in the FullCalendar initialization

### Updating Calendar Events

1. Locate the calendar initialization in `programs.html`
2. Add new events in the following format:
   ```javascript
   {
       title: 'Event Name',
       start: 'YYYY-MM-DD',
       end: 'YYYY-MM-DD',
       className: 'beginner-event'
   }
   ```

### Adding Blog Posts

1. Create a new blog post file in the blog directory
2. Add the post metadata and content
3. Update the blog grid in `blog.html`

## SEO Optimization

- All pages include proper meta descriptions
- Images have descriptive alt text
- Schema markup is implemented for local business
- Mobile-friendly design (Google Mobile-Friendly Test approved)

## Performance Optimization

- Compress images using Squoosh.app before uploading
- Minify CSS and JavaScript files for production
- Optimize loading of third-party resources
- Implement lazy loading for images

## Security Considerations

- HTTPS required for all pages
- Form validation implemented
- PayFast integration secured with proper encryption
- POPIA (Protection of Personal Information Act) compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

PYTH Development Team - info@pyth.org.za

## Acknowledgments

- FullCalendar.js for the program calendar
- PayFast for secure payment processing
- Unsplash for placeholder images
- Google Fonts for typography 