---
name: "sticky-stacking-cards"
description: "Implements a premium UI pattern where a series of large, full-width cards stack physically on top of each other using CSS position: sticky as the user scrolls down the page."
---

# Sticky Stacking Cards Pattern

When the user requests a highly interactive, physical-feeling "sticky card" or "card deck" scroll layout, follow this implementation pattern.

## The Concept
Instead of cards disappearing off the top of the screen when scrolled, they reach a certain `top` offset and stick in place. Subsequent cards slide up and overlap the previous cards.

## Key Requirements
1. **Container:** The parent container must have `relative` positioning and enough padding/bottom margin to allow the final card to scroll fully into view.
2. **Cards:** Each card MUST have:
   - `position: sticky`
   - A distinct `zIndex` that increases for each subsequent card (e.g., `zIndex: idx * 10`).
   - A `top` offset that increases slightly for each subsequent card (e.g., `top: calc(10vh + ${idx * 30}px)`). This creates the visible "stacking" effect at the top.
   - A fixed `height` (e.g., `65vh` or `500px`) so they overlap consistently.
   - High-contrast visual styling (e.g., deep gradients, subtle top borders) to differentiate where one card ends and the next begins.

## Code Example (Tailwind + React)

```tsx
const stackColors = [
  "from-[#11130E] to-[#1A1D16]",
  "from-[#1A1D16] to-[#22261B]",
  "from-[#22261B] to-[#2A2F20]",
];

function StickyStack({ items }) {
  return (
    <div className="relative pb-[10vh]">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="sticky w-full flex shadow-[0_-20px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 rounded-t-[3rem] overflow-hidden"
          style={{
            top: `calc(15vh + ${idx * 30}px)`, // The stagger distance
            height: "65vh", 
            minHeight: "500px",
            zIndex: idx * 10, // Ensure new cards stack on top
          }}
        >
          {/* Card Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stackColors[idx % stackColors.length]} border-t border-white/10`} />

          {/* Card Content */}
          <div className="relative z-10 w-full p-8 md:p-16">
            <h2 className="text-5xl font-black text-white">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
```

## When to use
Use this pattern for pricing tiers, product features, or step-by-step processes where the user explicitly requests an interactive, premium, non-traditional scroll layout. Do not use for simple data tables.
