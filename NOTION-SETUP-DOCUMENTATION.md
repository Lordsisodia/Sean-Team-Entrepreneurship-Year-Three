# Notion Portfolio Setup Documentation

## Overview

This Notion workspace is used as an **Evidence Hub** for PebblePad coursework in the Team Entrepreneurship programme. Notion stores drafts, evidence, and proofs - PebblePad is used for final submission.

**Key Principle:** Notion = Storage & Organization | PebblePad = Submission

---

## Workspace Structure

```
Portfolio Dashboard (Root)
├── Learning Contract (Evidence Hub)
└── SMART Objectives
```

### Page URLs

| Page | URL | Purpose |
|------|-----|---------|
| **Portfolio Dashboard** | https://www.notion.so/2edb892f416181508920ff3e77632cc4 | Main navigation hub |
| **Learning Contract** | https://www.notion.so/2edb892f4161811bbd5ee2f88a2ee48b | Evidence hub for all 8 sections |
| **SMART Objectives** | https://www.notion.so/2edb892f41618168bbfae35f2c6408e9 | Year 3 goals and action plans |
| ~~Cover~~ (DELETE) | https://www.notion.so/2edb892f416181618413faab937986bf | Obsolete - content merged into Learning Contract |

---

## Page Details

### 1. Portfolio Dashboard

**Purpose:** Main navigation hub and quick access to PebblePad

**Structure:**
- 2 green/orange callouts linking to main pages
- PebblePad submission links (table format)
- Activity Log progress tracker (monthly Practice/Enquiry counts)

**When updating:**
- Update Activity Log progress table each month
- No other changes needed

---

### 2. Learning Contract (Evidence Hub)

**Purpose:** Store drafts, evidence links, and proofs for all 8 Learning Contract sections

**Structure:**

```
📋 Learning Contract
├── 📖 Cover Information
│   ├── Personal details table (Name, Student #, Team, Coach)
│   ├── Philosophy callout (yellow)
│   ├── Photo Story callout (green)
│   └── Quote (blockquote)
│
├── 1. Where Have I Been?
│   ├── Word count callout (gray)
│   ├── Your Answer (full text from PebblePad)
│   └── 📎 Evidence & Proofs (link list)
│
├── 2. Competencies I've Developed
│   ├── [Same structure]
│
├── 3. Where Am I Now?
│   ├── [Same structure]
│
├── 4. Strengths
│   ├── [Same structure]
│
├── 5. Challenges
│   ├── [Same structure]
│
├── 6. Where Do I Want To Get To?
│   ├── [Same structure]
│
├── 7. Competencies I Will Develop
│   ├── [Same structure]
│
├── 8. Where Did I Get To?
│   ├── [Same structure]
│
├── 🔗 Quick Links
│   ├── PebblePad links
│   ├── Module handbooks
│
└── 📍 Navigation
    └── Back to Dashboard
```

**Each section contains:**
1. **Callout** - Shows word count and purpose
2. **Your Answer** - The exact text from PebblePad (copy-pasted)
3. **📎 Evidence & Proofs** - Bullet list of links to documents, GitHub repos, PDFs, etc.

**When updating:**
- When PebblePad content is updated → Copy new text to "Your Answer"
- When new evidence is created → Add link to "📎 Evidence & Proofs"
- Keep both in sync

---

### 3. SMART Objectives

**Purpose:** Year 3 goals, exit strategy, and action plans

**Note:** This page exists but needs to be documented further if used.

---

## Content Management Rules

### What goes in PebblePad?
- Final answers and reflections (within word counts)
- Clean, submission-ready text
- **NO** embedded evidence (wastes word count)
- Simple "Evidence: [Notion link]" at bottom of sections

### What goes in Notion?
- Draft versions of answers
- **ALL** evidence and proofs (links to docs, repos, PDFs, screenshots)
- Quick Links section for easy access to resources
- Activity Log progress tracking

### Workflow

```
1. Draft in Notion (Your Answer section)
2. Collect evidence (📎 Evidence & Proofs section)
3. Copy to PebblePad (final submission)
4. Add "Evidence: [Notion page link]" at bottom
```

---

## Link Conventions

### Evidence Links Format
```
**[Evidence Name]**
- Description: [Link]
- GitHub: [Link]
- Documentation: [Link]
```

### External Links
- PebblePad: https://pebblepad.uk/
- Career Centre: https://uwe.careercentre.me/resources/careerassessments/
- ATLAS: https://atlas.northampton.ac.uk/

### Internal Links
- Dashboard → Learning Contract
- Dashboard → SMART Objectives
- Learning Contract → Dashboard (back button at bottom)

---

## Notion Markdown Format Notes

When editing Notion pages via MCP, use these formats:

### Callouts
```markdown
<callout icon="💡" color="blue">
    **Title**\n    Content here
</callout>
```

### Tables
```markdown
<table header-row="true">
<tr>
<td>Header 1</td>
<td>Header 2</td>
</tr>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
</tr>
</table>
```

### Blockquotes
```markdown
> Quote text here
> \n> — Attribution
```

### Links
```markdown
[Link text](URL)
```

### Links with Placeholders
```markdown
[Link]
```

---

## Section Status (As of Jan 2026)

| Section | Content in Notion | Needs Update? |
|---------|-------------------|---------------|
| Cover Information | ✅ Complete | ❌ No |
| 1. Where Have I Been? | ✅ Complete (exact PebblePad copy) | ❌ No |
| 2. Competencies I've Developed | ⚠️ Placeholder | ✅ Yes |
| 3. Where Am I Now? | ⚠️ Placeholder | ✅ Yes |
| 4. Strengths | ⚠️ Placeholder | ✅ Yes |
| 5. Challenges | ⚠️ Placeholder | ✅ Yes |
| 6. Where Do I Want To Get To? | ⚠️ Placeholder | ✅ Yes |
| 7. Competencies I Will Develop | ⚠️ Placeholder | ✅ Yes |
| 8. Where Did I Get To? | ⚠️ Placeholder (year end) | ❌ No |

---

## Maintenance Checklist

### Weekly
- [ ] Update Activity Log progress on Dashboard
- [ ] Add new evidence links to relevant sections

### When PebblePad is Updated
- [ ] Copy new text to Notion "Your Answer" section
- [ ] Verify evidence links are current

### End of Year
- [ ] Complete Section 8 (Where Did I Get To?)
- [ ] Review all evidence links
- [ ] Archive workspace

---

## MCP Tool Reference

### Fetch Page Content
```python
mcp__notion__notion-fetch(id="PAGE_URL")
```

### Update Page Content
```python
mcp__notion__notion-update_page(data={
    "page_id": "PAGE_ID",
    "command": "replace_content",
    "new_str": "FULL_NEW_CONTENT"
})
```

### Update Page Properties
```python
mcp__notion__notion-update_page(data={
    "page_id": "PAGE_ID",
    "command": "update_properties",
    "properties": {"title": "New Title"}
})
```

---

## Important Notes

1. **No Toggles:** Toggle dropdowns were removed - all content is fully visible
2. **Exact PebblePad Copies:** "Your Answer" sections must match PebblePad exactly
3. **Evidence Hub Only:** Notion is NOT a duplicate of PebblePad - it's for evidence storage
4. **Manual Delete Required:** The old Cover page must be deleted manually in Notion (MCP doesn't support deletion)
5. **Link Verification:** Periodically check that evidence links are still valid

---

## File Locations

- **This Documentation:** `/Users/shaansisodia/DEV/team-entrepreneurship/NOTION-SETUP-DOCUMENTATION.md`
- **Architecture Plan:** `/Users/shaansisodia/DEV/team-entrepreneurship/NOTION-ACTIVITY-LOG-ARCHITECTURE.md` (outdated - kept for reference)

---

## Quick Reference for Agents

When asked to work on Notion portfolio:

1. **Read this file first** to understand the structure
2. **Fetch current page content** before making changes
3. **Keep "Your Answer" sections synced with PebblePad**
4. **Add evidence links to "📎 Evidence & Proofs" sections**
5. **Update Dashboard Activity Log progress** when adding new activities
6. **Never add toggles** - keep all content visible

**Page IDs (for MCP calls):**
- Dashboard: `2edb892f416181508920ff3e77632cc4`
- Learning Contract: `2edb892f4161811bbd5ee2f88a2ee48b`
- SMART Objectives: `2edb892f41618168bbfae35f2c6408e9`
- Cover (to delete): `2edb892f416181618413faab937986bf`
