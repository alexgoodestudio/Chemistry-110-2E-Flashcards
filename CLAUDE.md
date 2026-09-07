# CHM-110 Flashcards

A single-file, self-contained flashcard/quiz web app for CHM-110 (College Chemistry I),
built by Alex Goode as a study tool. Modeled after an existing BIO-101 flashcard app
built the same way (chapter tabs, flip cards, self-tracking progress).

Local files in this folder: `index.html` (renamed from `Chemistry-110-2E-Flashcards.html`
for GitHub Pages) plus `app.js`. Repo: `github.com/alexgoodestudio/Chemistry-110-2E-Flashcards`.

## Tech stack / architecture

- **Two files**: `index.html` (markup/CSS/SEO tags) + `app.js` (all logic, including
  `SEED`/`EXPLANATIONS`). No build step, no bundler, no framework — plain HTML/CSS/
  vanilla JS. Split out of a single file on 2026-09-06 so GitHub's language stats
  reflect the JS instead of counting everything as HTML; `index.html` just loads
  `<script src="app.js"></script>`.
- No external JS dependencies. The only external resource is a Google Fonts `@import`
  (`Press Start 2P` + `Baloo 2`) — this loads fine since it's the *user's* browser
  fetching it, not a build-time dependency.
- Data model: a flat `SEED` array of card objects, plus an `EXPLANATIONS` object keyed
  by card id. Each card has `id`, `chapter`, `number`, `type` (`"mc"` or `"match"`), and
  either `{options, answerIndex}` (mc) or `{pairs: [[prompt, answer], ...]}` (match).
- Tabs are one per textbook chapter (`"Chapter 1"`, `"Chapter 2"`, ...) — Alex
  consolidated the earlier split tabs (separate textbook-review/quiz/topic decks) on
  2026-09-06. `CHAPTER_ORDER` controls tab order; within a tab, cards sort by their
  `number` field (see `filtered()`), with textbook-review cards numbered first and
  quiz-sourced cards numbered after them. When adding a card, give it the next unused
  `number` in its chapter.
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
- Quiz-sourced cards (from Alex's actual D2L quiz screenshots) go in the chapter tab
  the quiz covers (currently `"Chapter 2"`), keeping their quiz-prefixed ids (`c2q##`)
  and the `// ---- (quiz-sourced) ----` comment block in `SEED` so their origin stays
  distinguishable from generic textbook-review cards (`tr#q##`).
- **Never add a duplicate card**: D2L quizzes recycle questions across attempts, so
  before filing a new card, grep `SEED` for distinctive keywords from each question. If
  it already exists (even with options reordered), point to the existing card instead.
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
- Canonical URL is `https://alexgoodestudio.github.io/Chemistry-110-2E-Flashcards/`
  (matches the actual repo name) — update this if the repo/Pages URL ever changes.

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
