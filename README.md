<div align="center">
  <h1>site-print</h1>
</div>

### Easily print any web page and save it to a .png image file

### Installation
```bash
npm install site-print
```
or

```bash
yarn add site-print
```

### Examples

```typescript
import { printSite } from 'site-print';

printSite({
  url: 'https://www.youtube.com',
});

// print site full page on mobile
printSite({
  url: 'https://www.facebook.com',
  defaultViewport: { width: 320, height: 480 },
  mobile: true,
  fullPage: true,
  path: './facebook.png',
});

// print site full page on desktop
printSite({
  url: 'https://www.google.com',
  defaultViewport: { width: 1920, height: 1080 },
  path: './google.png',
});

```
