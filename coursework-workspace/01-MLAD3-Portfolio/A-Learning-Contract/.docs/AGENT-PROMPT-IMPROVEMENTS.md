# Learning Contract Agent Prompt Improvements

**Date:** January 20, 2026
**Status:** Implemented for LC:4 through LC:9
**Version:** v2.0

---

## Summary of Changes

All Learning Contract agent prompts have been improved from a **20-prompt iterative cycle** to a **5-phase autonomous approach**.

### What Was Wrong with v1.0

1. **User Input Bottleneck** - Agents were blocked waiting for "newest content" before proceeding
2. **No True State Tracking** - `agent_task.md` files weren't created despite metadata claiming they existed
3. **No Progress Verification** - No confirmation loops to ensure files were written
4. **Abstract Cycle Structure** - "20-prompt cycle" too vague to follow across context switches

### What Changed in v2.0

| Issue | v1.0 | v2.0 |
|-------|------|------|
| User input required | Yes (blocked) | No (autonomous) |
| State tracking | Implicit (files not created) | Explicit (STATE.md required) |
| Progress verification | None | CHECKLIST.md with tick-boxes |
| Cycle structure | 20 prompts (abstract) | 5 phases (concrete) |
| Output per phase | Vague | Specific deliverable |

---

## New 5-Phase Structure

### PHASE 1: Analysis (Autonomous)
**Actions:** Read all files, identify issues, create STATE tracking files
**Output:** Summary of issues + analysis

### PHASE 2: Planning (Autonomous)
**Actions:** Create rewrite plan, map what to keep/modify/delete
**Output:** Detailed rewrite plan

### PHASE 3: Execution (Autonomous)
**Actions:** Rewrite content, apply Year 3 style principles
**Output:** Complete rewrite of draft.md

### PHASE 4: Review (Autonomous)
**Actions:** Self-check against success criteria, verify word count
**Output:** Review summary + any fixes

### PHASE 5: Finalize (Autonomous)
**Actions:** Update metadata.json, create feedback.md, final verification
**Output:** Complete task

---

## Mandatory State Tracking

All agents MUST create these files in PHASE 1:

### 1. STATE.md
Progress tracker showing:
- Current phase (1-5)
- Files created
- Files updated
- Phase status checkboxes

### 2. CHECKLIST.md
Simple tick-box list for:
- Reading files
- Analysis tasks
- Planning tasks
- Execution tasks
- Review tasks
- Finalize tasks

### 3. agent_task.md
Detailed 5-phase plan with:
- Objective
- Current status
- Plan for each phase

---

## After Every Phase

Agents must:
1. Update STATE.md (mark phase complete, next phase in-progress)
2. Update CHECKLIST.md (check off completed items)
3. Write a summary of what was accomplished
4. State what's next ("Ready for PHASE 2. Say 'continue' to proceed.")

---

## Updated Prompts

| Task | Section | Prompt File | Status |
|------|---------|-------------|--------|
| LC:4 | 04-strengths | `04-strengths/prompt.md` | ✅ Created (NEW) |
| LC:5 | 05-challenges | `05-challenges/prompt.md` | ✅ Created (NEW) |
| LC:6 | 06-where-do-i-want-to-get-to | `06-where-do-i-want-to-get-to/prompt.md` | ✅ Updated |
| LC:7 | 07-how-will-i-get-there | `07-how-will-i-get-there/prompt.md` | ✅ Updated |
| LC:8 | 08-competencies-will-develop | `08-competencies-will-develop/prompt.md` | ✅ Updated |
| LC:9 | 09-where-did-i-get-to | `09-where-did-i-get-to/prompt.md` | ✅ Updated (use Feb-Mar 2026) |

---

## Key Improvements by Section

### LC:4 (Strengths)
- Focus on personal experience, not technical achievements
- Add specific Team Apollo examples (Sam/Leo/David/Harry)
- Show self-awareness (strength can become weakness)

### LC:5 (Challenges)
- Specific struggles vs vague challenges
- Personal accountability (no external blame)
- Root cause analysis

### LC:6 (Q3 - Where Do I Want To Get To)
- **CRITICAL:** Word count reduction (735 → 270-330 words)
- Delete business plan content
- Focus on personal journey, not venture description

### LC:7 (Q4 - How Will I Get There)
- **CRITICAL:** 2-2-2 competency rebalance
  - Current: 0 Self, 0.5 Team, 5.5 Venture
  - Target: 2 Self, 2 Team, 2 Venture
- Add values/ethics dimension to each competency

### LC:8 (Competencies Will Develop)
- Replace Team Apollo with actual team (Sam/Leo/David/Harry)
- Coordinate with LC:7 main section
- Detailed breakdown (~50-100 words per competency)

### LC:9 (Q5 - Where Did I Get To)
- Do NOT use until February-March 2026
- Requires full year of experience
- Notes template provided for year-round collection

---

## Success Criteria

All improved prompts include explicit success criteria:

1. ✅ Word count within target range
2. ✅ Passes "Personal Experience Test" for every sentence
3. ✅ Specific Team Apollo examples (Sam/Leo/David/Harry)
4. ✅ Shows honest self-criticism (not too positive)
5. ✅ Identifies behavioural patterns (not isolated events)
6. ✅ Avoids all Year 2 patterns identified in feedback
7. ✅ STATE.md, CHECKLIST.md, agent_task.md created and maintained

---

## Next Steps

1. Review the improved prompts for LC:4 through LC:9
2. Create tasks in Vibe Kanban when ready
3. Monitor agent progress via STATE.md files
4. Verify file creation (agents should create tracking files in PHASE 1)

---

*Document created: January 20, 2026*
