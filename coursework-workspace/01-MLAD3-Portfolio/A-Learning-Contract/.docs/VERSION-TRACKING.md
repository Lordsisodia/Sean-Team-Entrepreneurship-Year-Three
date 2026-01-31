# Learning Contract Version Tracking

**Last Updated:** January 20, 2026
**Purpose:** Track agent work and version progress across all Learning Contract sections

---

## Section Status Overview

| Section | PebblePad Q | Current Version | Word Count | Agent Work | Status |
|---------|-------------|----------------|------------|------------|--------|
| 01 - Where Have I Been | Q1 | v01 | 1,299 | ✅ Started (Prompt 1/20) | In Progress |
| 02 - Competencies Developed | Part of Q1 | v01 | 810 | ❌ Not started | Draft |
| 03 - Where Am I Now | Q2 | v01 | 1,112 | ❌ Not started | Draft |
| 06 - Where Do I Want To Get To | Q3 | v01 | 1,415 | ❌ Not started | Draft |
| 07 - How Will I Get There | Q4 | v01 | 1,896 | ❌ Not started | Draft |
| 08 - Competencies Will Develop | Part of Q4 | v01 | 937 | ❌ Not started | Draft |
| 09 - Where Did I Get To | Q5 | N/A | N/A | ⏳ Due April 2026 | Not Started |

---

## Version File Structure

Each section should have:
```
/section-name/
├── versions/
│   ├── v01/
│   │   ├── draft.md           (current draft)
│   │   ├── feedback.md        (agent feedback summary)
│   │   └── metadata.json      (version tracking)
│   ├── v02/                   (created when needed)
│   └── ...
├── prompt.md                  (instructions for agents)
└── README.md                  (section specifications)
```

---

## metadata.json Schema

```json
{
  "version": "v01",
  "section": "section-name",
  "created": "2026-01-20T10:00:00Z",
  "modified": "2026-01-20T10:00:00Z",
  "status": "draft",
  "word_count": {
    "target": 500,
    "actual": 1299,
    "within_tolerance": false,
    "count_method": "markdown",
    "count_date": "2026-01-20"
  },
  "feedback_incorporated": [],
  "feedback_pending": [],
  "parent_version": null,
  "child_version": null,
  "reviewer": null,
  "completion_estimate": null,
  "agent_work": {
    "started": false,
    "prompts_completed": 0,
    "prompts_total": 20,
    "last_prompt": null,
    "agent_task_md_exists": false
  }
}
```

---

## Agent Work Tracking

### Section 01 - Where Have I Been
- **Agent work:** ✅ Started
- **Progress:** Prompt 1/20 complete
- **Current Phase:** Planning Phase
- **Agent task file:** `/01-where-have-i-been/agent_task.md`
- **Findings from Prompt 1:**
  - Current grade estimate: 45-55% (Lower Second to Third Class)
  - Target grade: 90-100% (Outstanding)
  - Core problem: Technical description vs personal experience
  - Team Apollo members identified: Sam, Matt, Jaymie, Pranav, Harry, Ben, Emma
  - Key situations available from achievements file

### All Other Sections
- **Agent work:** ❌ Not started
- **Status:** Ready for agent to begin with prompt.md files created

---

## How to Track Agent Progress

### When Agent Works on a Section:

1. **Create `agent_task.md`** in the section folder with:
   - 20-prompt plan
   - Progress tracking (mark each prompt as complete)
   - Key decisions made
   - Questions for user

2. **Update `metadata.json`** in `versions/vXX/`:
   - Set `agent_work.started = true`
   - Increment `agent_work.prompts_completed`
   - Update `agent_work.last_prompt`
   - Set `agent_work.agent_task_md_exists = true`

3. **Create `feedback.md`** when agent completes work:
   - Summary of changes made
   - Grade estimate (before and after)
   - Key improvements
   - Outstanding issues

4. **Create new version** when draft is significantly rewritten:
   - Copy to `versions/v02/draft.md`
   - Update metadata with `parent_version: "v01"`
   - Archive previous version notes

---

## Checking Agent Work Status

To check if an agent has worked on a section:

```bash
# Check for agent_task.md
ls -la /path/to/section/agent_task.md

# Check metadata for agent_work field
cat /path/to/section/versions/v01/metadata.json | grep -A 10 "agent_work"

# Check for feedback file
ls -la /path/to/section/versions/v01/feedback.md
```

---

## Creating New Versions

When to create a new version (v02, v03, etc.):

1. **Significant rewrite** - Agent completes major improvements
2. **User provides new content** - Replace draft with user's newer version
3. **Major feedback incorporated** - Changes based on harsh assessment

Process:
```bash
# Copy current version to new version
cp -r versions/v01 versions/v02

# Update new version metadata
# Set parent_version: "v01" in v02/metadata.json
```

---

## Pending Items

- [ ] Create metadata.json for sections 02, 03, 06, 07, 08
- [ ] Begin agent work on sections 02, 03, 06, 07, 08
- [ ] Create feedback.md files as agents complete work
- [ ] Update section 01 metadata to reflect agent work started

---

*This tracking file should be updated whenever agent work progresses on any section.*
