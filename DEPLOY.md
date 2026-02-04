# JOC Translator Landing Page

A high-converting landing page for the JOC Translator pilot program.

## 🚀 Quick Deploy (GitHub Pages)

1. Create a new GitHub repo (e.g., `joc-translator`)
2. Push these files to the `gh-pages` branch or main branch with Pages enabled
3. Done! Your site is live at `https://yourusername.github.io/joc-translator/`

```bash
# From this directory
git init
git add .
git commit -m "Initial landing page"
git remote add origin https://github.com/YOURUSERNAME/joc-translator.git
git push -u origin main
```

Then enable GitHub Pages in repo settings → Pages → Source → Deploy from branch → main → / (root)

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page (347 lines) |
| `styles.css` | All styling, responsive, dark theme (335 lines) |
| `main.js` | Interactive demo, form handling, animations (173 lines) |

## ✨ Features

- **Interactive Demo**: 3 scenarios (Flooring, Electrical, Restroom) showing scope → UPB mapping
- **Team of Rivals**: Visual pipeline showing Planner → Executor → Critic
- **Pilot Program CTA**: Form that emails you applications
- **Responsive**: Works on mobile, tablet, desktop
- **Fast**: No external dependencies except Google Fonts

## 🎨 Demo Scenarios

1. **Flooring Replacement** - VCT demo, rubber base
2. **Electrical Upgrade** - Receptacles, conduit, GFCI
3. **Restroom Renovation** - ADA fixtures, grab bars, partitions

Click "Run Demo" multiple times to cycle through scenarios.

## 📧 Form Handling

The signup form uses a `mailto:` link to send applications to baibureh01@gmail.com. For production, replace this with:
- Formspree (free tier: 50 submissions/month)
- Netlify Forms
- Custom backend

## 📝 Customization

Update these in `index.html`:
- Line 15: Page title
- Line 16: Meta description
- Line 261: Email address in signup form

Update in `main.js`:
- Line 6: Email address for form submissions
- Lines 14-50: Demo scenarios (add your own!)

## 🎯 Conversion Optimizations

- "Founding Pilot Program — 5 Slots Open" creates urgency
- Demo auto-runs when scrolled into view
- Multiple social proof elements (Team of Rivals stats)
- Clear value props in pain/solution sections
- Sticky nav with CTA always visible

## 📱 Mobile Optimizations

- Responsive grid layouts
- Touch-friendly buttons (min 44px)
- Readable font sizes on small screens
- Demo stacks vertically on mobile

## 🔮 Future Enhancements

- [ ] Add actual video demo
- [ ] Customer testimonials (when you have them)
- [ ] Pricing page
- [ ] Blog for SEO
- [ ] Live chat widget

---

Built with 💜 for JOC professionals
