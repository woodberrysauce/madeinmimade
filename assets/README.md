# Asset replacement guide

Replace these placeholder files while keeping the same filenames:

- `logo-placeholder.svg` — horizontal Made in Mimade logo.
- `background-placeholder.jpg` — optional future hero background.
- `social/facebook-placeholder.svg`
- `social/instagram-placeholder.svg`
- `social/x-placeholder.svg`
- `social/linkedin-placeholder.svg`
- `social/youtube-placeholder.svg`

If your final files use `.png`, `.webp`, or different names, update the matching
`src="..."` path in `index.html`.

The background image is not enabled yet. When it is ready, add this to `.hero`
in `css/style.css`:

```css
background:
  linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
  url("../assets/background-placeholder.jpg") center / cover no-repeat;
```
