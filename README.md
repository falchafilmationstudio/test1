# Falcha Filmation Studio — GitHub Pages Website

A responsive, cinematic, static website built with HTML, CSS and JavaScript.

## Files
- `index.html` — page structure and content
- `styles.css` — responsive styling and visual design
- `script.js` — mobile navigation, footer year, and email enquiry form
- `assets/` — reserved for your own images and logo

## Before publishing
1. Open `index.html` and replace `hello@falchafilmation.com` with the studio's real email address.
2. Update the same address in `script.js` (`studioEmail`).
3. Replace the sample Unsplash image URLs in `styles.css` with your own production stills if desired.
4. Review the About and Services text and update it to match the studio's actual work.

## Publish with GitHub Pages
1. Sign in to https://github.com.
2. Click **New repository**.
3. Name it `falcha-filmation-studio` (or another name you prefer).
4. Choose **Public**, then create the repository.
5. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository's root. You can also upload the `assets` folder.
6. Open the repository's **Settings** → **Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then click **Save**.
9. Wait a minute or two. GitHub will show your live website address, usually:
   `https://YOUR-USERNAME.github.io/falcha-filmation-studio/`

## Contact form note
GitHub Pages hosts static websites and does not run server-side code. This contact form uses a `mailto:` link, which opens the visitor's email application with the enquiry filled in. It does not send the message silently or store submissions. For a true on-page form, connect a form service or build a backend.

## Images and fonts
The demo uses image URLs from Unsplash and Google Fonts. An internet connection is needed to load these external assets. For a fully self-contained site, download licensed images and fonts and serve them from this repository.
