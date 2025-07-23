# Project Decisions, Trade-offs & Future Enhancements

This document outlines key design decisions, architectural trade-offs, known limitations, and future roadmap for the `Email Template Builder` project.

## Architectural & Design Decisions

### Modular Block-Based Design

- Each block (text, heading, image, button) is defined with a unified `BlockData` shape.
- Dynamic editor configuration is driven from a centralized `defaultBlocks` registry, to enable easy registration of new block types.

### State Management

Global State is managed using redux(ReduxToolKit)

- `savedBlocks` represent committed, export-ready content.
- `draftBlocks` track live edits.
- Custom hooks like `useCanvas` and `useBlocks` encapsulate state access and mutations cleanly.

### Default Extensibility

- All block configuration (form fields, types, default props) defined in `blockRegistry` in `@container/types`.
- Email provider integration follows a pluggable adapter pattern (`EmailProvider` interface).

## Trade-offs

- Live edits using debounce: provides UX improvement, but syncing logic between draft and saved blocks is extra work
- Pluggability: uses manual block registry, but less dynamic without plugin registration logic.
- Block Shape: uses `value` field for input. This provides logic for basic fields, but may limit future formatting.

## Limitations

- No multi-column or grid layout yet
- Limited accessibility support (no ARIA, keyboard nav)
- Missing undo/redo functionality
- Only basic block types supported (no rich embeds or layout nesting)
- Draft state not yet persisted to localStorage or remote DB
- No validation for required customized fields
- No preview for desktop or mobile views

## Edge Cases & Known Issues

- Fast input + block deletion may lead to inconsistent drafts
- Exported HTML may not visually match the canvas
- Font fallbacks notvalidated
- Style merging can cause lost props if not deeply merged properly

## Future Enhancements

- Auto save
- Undo/redo
- Add grouped style editors for padding/margin/font
- Preview broken blocks with warning states
- Provide export options
- Implement Mailgun, Postmark, Resend wrappers via `EmailProvider`
- Collaborative features
- Rich Block Schema
- Templates
- Re ordering of Blocks

## Testing Strategy

**Testing with Jest + react-testing-library & @reduxjs/toolkit testing utils**
This would cover:

### Unit Testing

- hooks (useCanvas, useBlocks, useBlockEditor)
- addBlock, updateBlock, removeBlock, state merging logic
- debounce logic and sync flow between draft and saved blocks

### Component Testing

- BlockEditorPanel, BuilderSidebar, TextBlockEditor
- Correct fields render based on block.type
- Input updates trigger internal or Redux updates as expected
- BlockRenderer (in BuilderCanvas)
- Renders the correct block type

### Integration Testing

- Canvas + Sidebar Editing Flow
- Add a block | Select block | Update text/style | Changes reflect in canvas
- Draft vs Synced Blocks
- Export to HTML

---

### Dev Guide

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## To run on your local machine

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Key Components

|               | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| Block         | A UI element (text, button, image, heading) that can be added to the canvas. |
| Draft Blocks  | state blocks that reflect current editing state.                             |
| Synced Blocks | Redux store holds finalized, saved versions of blocks.                       |
| Canvas        | Main visual editor area where blocks are rendered.                           |
| Sidebar       | Panel used to select block and customize selected block properties.          |
| Export        | Converts blocks into HTML or JSON formats.                                   |
| Email Adapter | Wrapper around providers like SendGrid/Postmark.                             |

---

## Folder Structure

```js
/app
  ├── @types             # Global TypeScript types
  ├── assets             # SVG assets
  ├── container          # UI logic containers
  ├── core               # Core presentational components
  ├── fonts              # Google fonts
  ├── hooks              # Shared logic via custom hooks
  ├── store              # Redux slices and setup
  ├── theme              # Theming
  ├── utils              # Utility functions
```

---

# Block Development

### Creating a New Block Type

1. Add the block props in `@container/types.ts`
2. Extend the `BlockRegistry` entry in `@utils/constants.ts`
3. Add an editor panel in `@container/Editor/`
4. Register its rendering logic in `@container/BuilderLayout/components/`

### Example: Add Quote Block

- Define `QuoteBlockProps`
- Register in `blockRegistry`
- Create `QuoteBlockEditor.tsx`
- Render in `BlockRenderer`

---

## Hooks Overview

|                    | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `useCanvas()`      | Manages synced blocks, block selection                           |
| `useBlocks()`      | Manages local draft edits, sync logic, block actions and exports |
| `useBlockEditor()` | Manages editing state for the selected block                     |
| `useDebounce()`    | Prevents rapid updates to synced state while editing             |

---

## Email Provider Integration

Adapters like SendGrid are located in:

```txt
/services/email/
```

Each adapter implements a common `EmailProvider` interface. To add a new provider:

- Create a new `provider.ts` file (e.g. `postmarkProvider.ts`)
- Implement `sendEmail`

---

## Developer Notes

- Use `useCanvas` in layout or top-level components
- Use `useBlocks` to modify synced state directly

---

## Actions

| Action Types | Description                                                  | Notes |
| ------------ | ------------------------------------------------------------ | ----- |
| Export HTML  | `wrapInSkeleton()` in `utils/convert.ts`                     |       |
| Export JSON  | `JSON.stringify(draftBlocks, null, 2)`                       |       |
| Send Email   | use `sendEmail` in `useBlocks` using the available providers |       |

---

## Example Commands

```js
// Add block
useCanvas().addBlock({ ... })

// Update text
useBlockInspector().updateValue(id, "new text")

//Export
useBlocks().handleExport()

// Send
useBlocks().handleSend()
```
