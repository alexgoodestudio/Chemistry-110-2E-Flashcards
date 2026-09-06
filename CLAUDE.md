# CHM-110 Flashcards

A single-file, self-contained flashcard/quiz web app for CHM-110 (College Chemistry I),
built by Alex Goode as a study tool. Modeled after an existing BIO-101 flashcard app
built the same way (chapter tabs, flip cards, self-tracking progress).

Local file in this folder: `Chemistry-110-2E-Flashcards.html` (may be renamed
`index.html` for GitHub Pages).

## Tech stack / architecture

- **One file**: no build step, no bundler, no framework. Plain HTML/CSS/vanilla JS in a
  single `<script>` tag.
- No external JS dependencies. The only external resource is a Google Fonts `@import`
  (`Press Start 2P` + `Baloo 2`) — this loads fine since it's the *user's* browser
  fetching it, not a build-time dependency.
- Data model: a flat `SEED` array of card objects, plus an `EXPLANATIONS` object keyed
  by card id. Each card has `id`, `chapter`, `number`, `type` (`"mc"` or `"match"`), and
  either `{options, answerIndex}` (mc) or `{pairs: [[prompt, answer], ...]}` (match).
- `CHAPTER_ORDER` array controls tab order — NOT alphabetical, it's pedagogical order
  (textbook chapters first, then quiz-sourced cards, then topic decks like sig figs).
- **Always bump `CARDS_VERSION`** (a date-stamped string near the top of the script)
  whenever `SEED` or `EXPLANATIONS` changes. This flushes stale `localStorage` progress
  data in the user's browser so old cached state doesn't collide with new content.
- Progress (`results`: correct/wrong per card id) and position persist in
  `localStorage` under keys prefixed `chem_fc_`.

## Content rules — read before adding any card

- **Only source from OpenStax Chemistry 2e** (Flowers, Theopold, Langley; ISBN
  9781947172616) — this is Alex's actual CHM-110 textbook. Never invent chemistry
  content or pull from other textbooks/editions.
- When pulling textbook review questions, cite the section and exercise number in the
  question text, e.g. `"(2.3, Ex.16) ..."` — this traces every card back to its source.
- Quiz-sourced cards (from Alex's actual D2L quiz screenshots) go in the
  `"Ch 2: Atoms/PTE"` chapter (or whatever the live quiz/chapter currently is) —
  keep these separate from generic textbook-review cards.
- Every card needs a `EXPLANATIONS[id]` entry: a "why" explanation, not just a restated
  answer. Explain the underlying reasoning/rule, not just "the answer is X."
- If a screenshot shows the user's own quiz answers, **check them for correctness**
  before filing the card — don't assume the selection shown is correct. Flag any
  errors found (this has caught real mistakes before, e.g. mass number vs. atomic
  mass mismatch).
- Match-type cards render as reveal-and-self-grade (Got it / Missed it), not
  auto-scored — there's no single "correct index" for a multi-pair matching question.

## Design system — CURRENT STATE (settled, not a draft)

Alex iterated through several looks; the current one should NOT be treated as a draft —
it's the settled design. Do not silently redesign; if changing style, confirm scope first.

- **Theme**: "early-90s educational software" but SIMPLIFIED — Alex explicitly walked
  back an earlier, more elaborate version (hard drop-shadows, tape-corner decorations,
  rainbow letter-by-letter title, mascot emoji, footer badge stickers, mint/green card
  backgrounds) for being "too complicated." Keep it minimal.
- **Keep**: pixel font (`Press Start 2P`) on the main title only; friendly rounded font
  (`Baloo 2`) everywhere else; single green accent color (`#1a6b3c`) for borders/links/
  active states; a thin **rainbow-striped rule** under the header (this specific
  decorative touch was explicitly requested back after being removed — don't cut it
  again without asking).
- **Avoid re-adding**: box-shadows, colored/mint card backgrounds (cards are plain
  white `#ffffff`), the outer page border, multi-color title text, emoji decoration,
  footer merit badges.
- Buttons: flat, 2px solid border, simple color fill on active/correct/wrong states —
  no beveled/outset button styling, no press-down shadow animation.

## SEO / AEO

- Meta description, keywords, canonical URL, Open Graph + Twitter Card tags are in
  `<head>` — keep these accurate if the title/scope changes.
- `LearningResource` JSON-LD in `<head>` describes the course/textbook.
- A `FAQPage` JSON-LD block is **generated dynamically at runtime** from `SEED` +
  `EXPLANATIONS` (see `injectFAQSchema()`) — don't hand-write a duplicate one, it'll
  drift out of sync. If you change how cards store answers, update that function.
- Canonical URL assumes GitHub Pages at `https://alexgoodestudio.github.io/chem110-flashcards/`
  — update this if the repo/Pages URL differs.

## Attribution / footer

Footer must credit "Alex Goode" with a link to `github.com/alexgoodestudio`, and note
the OpenStax Chemistry 2e source (CC BY-NC-SA 4.0). Keep this — it's both correct
attribution and required by OpenStax's license.

## Workflow notes

- Alex adds content by sharing screenshots of quiz questions or textbook pages as he
  works through the actual course — this is a living document, not a one-time build.
- When editing the single HTML file, prefer targeted string replacements over full
  rewrites once the file is large — it keeps diffs reviewable and avoids accidentally
  reverting settled design decisions (see Design system above).
- Sibling project for reference/consistency: a BIO-101 flashcard app built the same
  way, published at `alexgoodestudio.github.io/bio101-flashcards/`. If asked to make
  this one "match" something, check that project's actual current structure rather
  than assuming.
