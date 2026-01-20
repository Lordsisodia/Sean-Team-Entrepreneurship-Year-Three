# Versioning System Guide

**Learning Contract Documentation System**
**Established:** January 20, 2026

---

## Overview

The versioning system tracks the evolution of each Learning Contract section through multiple iterations of drafting and feedback. Each version contains a draft, feedback documentation, and metadata.

---

## Version Structure

```
section-name/
├── README.md                    # Section specs & criteria
├── versions/
│   ├── v01/
│   │   ├── draft.md            # Initial content
│   │   ├── feedback.md         # Feedback received
│   │   └── metadata.json       # Version tracking data
│   ├── v02/
│   │   ├── draft.md            # Revised content
│   │   ├── feedback.md         # New feedback
│   │   └── metadata.json
│   └── current -> v03          # Symlink to active version
```

---

## Creating a New Version

### Step 1: Start with v01

When beginning a section:

1. Navigate to the section folder
2. Create `versions/v01/` directory
3. Create three files:

```bash
mkdir versions/v01
touch versions/v01/draft.md
touch versions/v01/feedback.md
touch versions/v01/metadata.json
```

4. Write your initial draft in `draft.md`
5. Note: `feedback.md` can be empty until feedback is received

### Step 2: Document Initial Metadata

In `versions/v01/metadata.json`:

```json
{
  "version": "v01",
  "section": "where-have-i-been",
  "created": "2026-01-20T10:00:00Z",
  "modified": "2026-01-20T10:00:00Z",
  "status": "draft",
  "word_count": {
    "target": 500,
    "actual": 0,
    "within_tolerance": false,
    "count_method": "pending"
  },
  "feedback_incorporated": [],
  "feedback_pending": [],
  "parent_version": null,
  "reviewer": null,
  "completion_estimate": null
}
```

### Step 3: Create Next Version (After Feedback)

When you receive feedback and need to revise:

1. Create new version directory:
```bash
mkdir versions/v02
```

2. Copy and revise:
```bash
cp versions/v01/draft.md versions/v02/draft.md
# Edit versions/v02/draft.md to incorporate feedback
```

3. Create new feedback file (empty until next feedback):
```bash
touch versions/v02/feedback.md
```

4. Update metadata:
```json
{
  "version": "v02",
  "section": "where-have-i-been",
  "created": "2026-01-22T14:00:00Z",
  "modified": "2026-01-22T16:30:00Z",
  "status": "revising",
  "word_count": {
    "target": 500,
    "actual": 487,
    "within_tolerance": true,
    "count_method": "word-processor"
  },
  "feedback_incorporated": [
    "v01-1: Added specific examples from Year Two",
    "v01-2: Deepened critical evaluation of leadership failure"
  ],
  "feedback_pending": [],
  "parent_version": "v01",
  "reviewer": "tutor",
  "completion_estimate": "2026-01-25"
}
```

5. Update v01 metadata to show it has a child:
```json
{
  "child_version": "v02"
}
```

---

## Version Lifecycle States

```
┌─────────┐      ┌──────────────┐      ┌─────────────┐
│  DRAFT  │ ───→ │ UNDER REVIEW │ ───→ │  REVISING   │
└─────────┘      └──────────────┘      └─────────────┘
     │                                        │
     │                                        ▼
     │                                   ┌─────────┐
     │                                   │ COMPLETE│
     │                                   └─────────┘
     │                                        │
     └────────────────────────────────────────┘
                  (Can return to REVISING
                   if new feedback emerges)
```

### Status Values

| Status | Description | When to Use |
|--------|-------------|-------------|
| `draft` | Initial version, not yet shared | Right after creating v01 |
| `under-review` | Shared, awaiting feedback | After submitting for review |
| `revising` | Actively incorporating feedback | After receiving feedback |
| `complete` | Final version, no changes needed | When all feedback addressed |

---

## Feedback Documentation

### feedback.md Template

```markdown
# Feedback - v[XX]

**Section:** [Section Name]
**Version:** v[XX]
**Date Received:** YYYY-MM-DD
**Reviewer:** [Self/Tutor/Peer/etc.]
**Feedback Type:** [Formal/Informal/Review]

---

## Summary of Feedback

[Brief 2-3 sentence summary of the main feedback points]

---

## Detailed Feedback Points

### ✅ Strengths (What's Working)
1. [Strength 1]
2. [Strength 2]

### ⚠️ Areas for Improvement
1. [Issue 1] - [Priority: High/Medium/Low]
   - Current state: [Description]
   - Suggested change: [Description]
2. [Issue 2] - [Priority: High/Medium/Low]
   - Current state: [Description]
   - Suggested change: [Description]

### ❌ Critical Issues
1. [Critical issue that must be addressed]

---

## Action Items

- [ ] [Action item 1] - [Assigned to: self/reviewer]
- [ ] [Action item 2] - [Assigned to: self/reviewer]

---

## Next Steps

- Create version v[XX+1] to incorporate this feedback
- Target completion date: YYYY-MM-DD
```

### Tracking Feedback in Metadata

```json
{
  "feedback_incorporated": [
    "v01-1: Added specific examples from Year Two",
    "v01-2: Deepened critical evaluation of leadership failure",
    "v01-3: Expanded on psychometric application"
  ],
  "feedback_pending": [
    "v02-1: Clarify connection between INTJ traits and leadership challenges",
    "v02-2: Add more specific evidence for delegation improvement"
  ]
}
```

Feedback ID format: `vXX-N` where XX = version number, N = feedback item number

---

## Version Naming Conventions

### Standard Versions
- Format: `vXX` (zero-padded, 2 digits)
- Examples: `v01`, `v02`, `v03` ... `v15`

### Special Versions
- `vXX-final`: Final approved version
- `vXX-draft`: Work-in-progress (optional suffix)
- `vXX-branch`: Experimental branch (if needed)

### Example Sequence
```
v01 → v02 → v03 → v03-final
```

---

## When to Create a New Version

### Create New Version When:
- ✅ Feedback requires substantial changes
- ✅ Word count needs significant adjustment
- ✅ New content sections are added
- ✅ Structure/organization changes

### DO NOT Create New Version When:
- ❌ Just fixing typos or minor errors
- ❌ Tweaking a few sentences
- ❌ Clarifying existing points
- → Instead: Edit current draft, update `modified` date in metadata

---

## Managing Multiple Sections

### Tracking Across All Sections

Use the master **CHANGELOG.md** at the root:

```markdown
## Version Overview

| Section | Current Version | Status | Last Updated |
|---------|-----------------|--------|--------------|
| Where Have I Been | v03 | Complete | 2026-01-15 |
| Competencies Developed | v02 | Under Review | 2026-01-18 |
| Where Am I Now | v04 | Revising | 2026-01-20 |
```

### Coordinated Updates

When updating multiple related sections:

1. Update parent section first (e.g., "Where Have I Been")
2. Then update dependent sections (e.g., "Competencies Developed")
3. Document dependencies in metadata:
```json
{
  "depends_on": ["01-where-have-i-been:v03"],
  "informs": ["07-how-will-i-get-there"]
}
```

---

## Archiving Old Versions

### When to Archive
- Version represents a completely different approach
- Major directional change that abandoned previous work
- Want to keep but not actively reference

### How to Archive

```bash
# Create archive directory
mkdir archive

# Move version to archive
mv versions/v05 archive/v05-abandoned-approach
```

### Document Archive Decision

In `archive/README.md`:

```markdown
# Archived Versions

## v05-abandoned-approach
**Archived:** 2026-01-20
**Reason:** Decided to change focus from X to Y
**Notes:** This version had good content on [topic] that may be useful later
```

---

## Best Practices

### 1. Always Document Feedback
Even if feedback is verbal, document it in `feedback.md` for reference

### 2. Keep Metadata Current
Update `metadata.json` after every significant change

### 3. Use Commit Messages
If using git, use descriptive commit messages:
```
feat(where-i've-been): Add Year Two reflection v01
fix(where-i've-been): Incorporate tutor feedback v02
refactor(where-i've-been): Reorganize structure v03
```

### 4. Link Related Versions
In `metadata.json`, always specify `parent_version` for traceability

### 5. Mark Complete Versions
When satisfied, add `-final` suffix and update status:
```json
{
  "version": "v03-final",
  "status": "complete",
  "completion_date": "2026-01-25"
}
```

---

## Quick Reference Commands

### Create new version
```bash
mkdir versions/vXX
cp versions/vPREVIOUS/draft.md versions/vXX/draft.md
touch versions/vXX/feedback.md
touch versions/vXX/metadata.json
```

### Count words in current draft
```bash
wc -w versions/vXX/draft.md
# or use word processor
```

### List all versions for a section
```bash
ls -la versions/
```

### Find current version (if symlink exists)
```bash
readlink versions/current
```

---

## Troubleshooting

### Issue: Lost track of feedback
**Solution:** Check all previous `feedback.md` files, compile into current version

### Issue: Metadata is outdated
**Solution:** Update `modified` date and recount words before creating new version

### Issue: Too many versions
**Solution:** Archive early experimental versions, keep main iteration path

### Issue: Can't remember what changed between versions
**Solution:** Use git diff or compare `draft.md` files side by side

---

*Last updated: January 20, 2026*
