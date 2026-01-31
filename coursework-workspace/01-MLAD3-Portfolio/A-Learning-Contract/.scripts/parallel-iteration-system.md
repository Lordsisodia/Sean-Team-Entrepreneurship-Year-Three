# Parallel Iteration System for Learning Contract

**Purpose:** Execute 3 iterations (v02, v03, v04) for all 9 sections in parallel

**Created:** January 20, 2026

---

## Current State

| Section | Current Version | Next Version |
|---------|----------------|--------------|
| 01 - Where Have I Been | v04 | v05 |
| 02 - Competencies Developed | v03 | v04 |
| 03 - Where Am I Now | v03 | v04 |
| 04 - Strengths | v01 | v02 |
| 05 - Challenges | v01 | v02 |
| 06 - Where Do I Want To Get To | v01 | v02 |
| 07 - How Will I Get There | v02 | v03 |
| 08 - Competencies Will Develop | v01 | v02 |
| 09 - Where Did I Get To | v01 | v02 |

---

## Parallel Execution Plan

### Iteration 1 (Next Version for Each)
- Launch 9 agents in parallel
- Each creates next version (v02, v03, v04, or v05 depending on current)
- Output: New version directories with:
  - `draft.md` - Improved content
  - `feedback.md` - Changes made and grade estimate
  - `metadata.json` - Version tracking

### Iteration 2 (Following Version)
- Launch 9 agents in parallel
- Each creates another version
- Builds on previous iteration

### Iteration 3 (Final Version)
- Launch 9 agents in parallel
- Final polish and refinement

---

## Agent Instructions Template

Each agent will receive:

```
SECTION: [section-name]
CURRENT VERSION: [vXX]
TARGET VERSION: [vYY]
ITERATION NUMBER: [1/2/3]

TASK:
1. Read current version draft.md
2. Read prompt.md for section requirements
3. Read feedback.md from previous version (if exists)
4. Apply improvements based on iteration focus:
   - Iteration 1: Major structural improvements, personal experience focus
   - Iteration 2: Refinement, word count optimization, specific examples
   - Iteration 3: Polish, flow, final quality check
5. Create new version directory vYY
6. Write new draft.md
7. Write feedback.md with changes made and grade estimate
8. Update metadata.json

CRITICAL:
- Always create NEW version directory, never overwrite
- Copy previous version as parent reference
- Track all changes in feedback.md
- Update metadata with parent_version field
```

---

## Version Tracking

All versions will be preserved:
```
section-name/
├── versions/
│   ├── v01/ (original)
│   ├── v02/ (iteration 1)
│   ├── v03/ (iteration 2)
│   ├── v04/ (iteration 3)
│   └── v05/ (if needed)
```

---

## Execution Commands

```bash
# Iteration 1 - Launch all 9 agents
# (Each agent works on one section independently)

# Iteration 2 - Launch all 9 agents on results from iteration 1

# Iteration 3 - Launch all 9 agents on results from iteration 2
```

---

## Success Criteria

- [ ] All 9 sections have 3 additional versions
- [ ] All version directories contain draft.md, feedback.md, metadata.json
- [ ] All metadata tracks parent/child relationships
- [ ] Grade estimates show improvement across iterations
- [ ] Word counts within target ranges
- [ ] Ready for PebblePad submission

---

*This system ensures version preservation while enabling rapid parallel iteration*
