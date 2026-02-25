# Iriscale Design & Style Guide

## Typography & Font Weights

We use a combination of a variable font and static font files. They are all defined in `app/theme/fonts.ts` and exposed to Tailwind via `app/globals.css`.

### 1. Variable Font Approach (Recommended for Body/UI)

**ABC Camera Plain** is loaded as a variable font, mapping to the `font-sans` utility.

- **Variable**: `--font-ABCCameraPlainVariable`
- **Tailwind class**: `font-sans`
- **Handling Weights**: Because it is a variable font, you can adjust the weight simply by combining `font-sans` with standard Tailwind weight utilities:
  - `font-sans font-light` (100-300)
  - `font-sans font-normal` (400)
  - `font-sans font-medium` (500)
  - `font-sans font-semibold` (600)
  - `font-sans font-bold` (700)

### 2. Static Font Files Approach (Explicit Weights)

We also load individual static weight files. Thanks to Tailwind v4's `@theme inline` mapping in `globals.css`, these automatically generate font-family utility classes. Use these if you specifically need the exact static font file rather than the variable axis.

**Available Static Font Utilities:**

- `font-camera-plain-black` (maps to `var(--font-ABCCameraPlain-Black)`)
- `font-camera-plain-black-italic`
- `font-camera-plain-bold`
- `font-camera-plain-bold-italic`
- `font-camera-plain-heavy`
- `font-camera-plain-heavy-italic`
- `font-camera-plain-medium`
- `font-camera-plain-medium-italic`
- `font-camera-plain-regular`
- `font-camera-plain-regular-italic`

**Usage Example:**

```html
<p className="font-camera-plain-bold">This explicitly uses the static Bold font file.</p>
```

### 3. Heading Font (Serif)

**Flecha S** is the secondary font used strictly for large headings (H1, H2) and the logo.

- **Variable**: `--font-FlechaS-Regular`
- **Tailwind class**: `font-serif`
- **Specific static utilities**: `font-flecha-s-light`, `font-flecha-s-regular`

---

## Color Palette & CSS Variables

All colors are defined as CSS variables in `app/globals.css` and mapped to Tailwind's `@theme` configuration. **Never use hardcoded hex codes in the UI components.**

| Role | Tailwind Class | CSS Variable | Description |
| :--- | :--- | :--- | :--- |
| **Background** | `bg-background` | `--bg` | Main page background (White). |
| **Foreground** | `text-foreground` | `--fg` | Primary text color (Almost Black). |
| **Surface** | `bg-surface` | `--surface` | Light section backgrounds (Cream/Beige). |
| **Surface Dark** | `bg-surface-dark` | `--surface-dark` | Dark section backgrounds (Dark Teal). |
| **Muted Text** | `text-muted` | `--muted` | Secondary/tertiary text (Gray). |
| **Borders** | `border-border` | `--border` | Light gray borders for dividers and cards. |
| **Accent** | `text-accent`, `bg-accent` | `--accent` | Primary brand CTA color (Orange). |
| **Accent Text** | `text-accent-foreground` | `--accent-fg` | Text color inside accent buttons (White). |
| **Cream** | `bg-cream` | `--cream` | Off-white background variant. |

---

## UI Components & Patterns

The application uses headless, unstyled components via `@headlessui/react` wrapped in our own design system styles located in `app/components/ui/`.

### 1. Buttons (`<Button>`)

Always use the custom `<Button>` component instead of raw `<button>` tags for consistency.

- **Variants**: `primary`, `secondary`, `accent` (orange CTA), `outline`, `ghost`
- **Sizes**: `sm`, `md` (default), `lg`

### 2. Layouts (`<Container>` & `<Section>`)

- **`<Section>`**: Used for horizontal page bands. Accepts a `variant` prop (`default`, `surface`, `dark`, `cream`) to automatically apply the correct background and text colors.
- **`<Container>`**: Used inside `<Section>` or `<header>`/`<footer>` to constrain the maximum width to `max-w-7xl` and provide consistent padding.

### 3. Images and Icons

- **Icons**: Use `lucide-react` for all UI icons.
- **Placeholders**: For development, use the local SVG placeholders in `public/images/` instead of remote URLs.

