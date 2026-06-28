# HSK Vocab Self Study

Static vocabulary app generated from the PDF lists in `data/`.

The app includes two study fragments:

- Old HSK 1: 150 words
- New HSK 1: 500 words

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings > Pages**.
3. Select **Deploy from a branch**.
4. Choose your main branch and `/ (root)`.
5. Save and wait for GitHub Pages to publish the site.

The app has no build step and no backend. Study progress is stored in the browser with `localStorage`.
