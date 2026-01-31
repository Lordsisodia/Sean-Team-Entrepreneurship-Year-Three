# Q2a: Strengths Analysis - Agent Task Prompt (IMPROVED v2.0)

**Section:** Q2a - Strengths Analysis (Part of Q2: Where Am I Now?)
**Target Word Count:** ~300-400 words (integrated into Q2 total)
**Current Version:** v01
**Working Directory:** `coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/04-strengths/`

---

## CRITICAL: THIS IS NOT A 20-PROMPT CYCLE

**Previous agents failed because they were blocked waiting for user input.**

**This improved system uses a 5-PHASE autonomous approach:**

1. **PHASE 1: Analysis** - Read all files, identify issues (autonomous)
2. **PHASE 2: Planning** - Create rewrite plan (autonomous)
3. **PHASE 3: Execution** - Rewrite content (autonomous)
4. **PHASE 4: Review** - Self-check against criteria (autonomous)
5. **PHASE 5: Finalize** - Word count, metadata, feedback.md (autonomous)

**Each phase produces OUTPUT that you can review. The user only needs to say "continue" to proceed to next phase.**

---

## STATE TRACKING (MANDATORY - DO THIS FIRST)

**Create these files in PHASE 1:**

### 1. STATE.md (Your progress tracker)
```markdown
# LC:4 Agent State

**Current Phase:** 1
**Total Phases:** 5
**Last Action:** (update after each action)

## Files Created
- [x] STATE.md
- [ ] agent_task.md
- [ ] CHECKLIST.md

## Files Updated
- [ ] versions/v01/draft.md
- [ ] versions/v01/metadata.json
- [ ] versions/v01/feedback.md

## Phase Status
- [x] PHASE 1: Analysis - Complete
- [ ] PHASE 2: Planning - Pending
- [ ] PHASE 3: Execution - Pending
- [ ] PHASE 4: Review - Pending
- [ ] PHASE 5: Finalize - Pending

## Questions for User
(List any questions that need user input)
```

### 2. CHECKLIST.md (Simple tick-box list)
```markdown
# LC:4 Progress Checklist

## Reading Files
- [ ] Current draft
- [ ] Year 2 feedback files
- [ ] Harsh assessment (if exists)
- [ ] Section README

## Analysis
- [ ] Identify Year 2 patterns to avoid
- [ ] List specific issues in current draft
- [ ] Map strengths to personal experience (not technical)

## Planning
- [ ] Create rewrite plan for each strength
- [ ] Identify which strengths to keep/modify/delete
- [ ] Plan word count adjustments

## Execution
- [ ] Rewrite each strength section
- [ ] Add specific Team Apollo examples
- [ ] Add personal feelings/reactions

## Review
- [ ] Check word count
- [ ] Verify "Personal Experience Test" passed
- [ ] Verify no Year 2 patterns

## Finalize
- [ ] Update metadata.json
- [ ] Create feedback.md
- [ ] Final word count verification
```

### 3. agent_task.md (Your detailed plan)
```markdown
# LC:4 Agent Task Plan

## Objective
Rewrite Strengths Analysis to achieve 90-100% (Outstanding) grade.

## Current Status
**Word Count:** TBD
**Target:** ~300-400 words
**Grade Estimate:** TBD

## 5-Phase Plan

### PHASE 1: Analysis (This Phase)
**Actions:**
1. Read current draft
2. Read Year 2 feedback
3. Read harsh assessment
4. Identify issues

**Output:** Summary of issues + plan

### PHASE 2: Planning
**Actions:**
1. Map which strengths to keep/modify
2. Plan specific Team Apollo examples to add
3. Plan word count allocation

**Output:** Detailed rewrite plan

### PHASE 3: Execution
**Actions:**
1. Rewrite each strength section
2. Add personal experience elements
3. Integrate into draft.md

**Output:** Complete rewrite of draft.md

### PHASE 4: Review
**Actions:**
1. Self-check against success criteria
2. Word count verification
3. Year 2 pattern check

**Output:** Review summary + any fixes

### PHASE 5: Finalize
**Actions:**
1. Update metadata.json
2. Create feedback.md
3. Final verification

**Output:** Complete task
```

---

## AFTER EVERY PHASE - DO THIS:

1. **Update STATE.md** - Mark current phase complete, next phase in-progress
2. **Update CHECKLIST.md** - Check off completed items
3. **Write a summary** - What you accomplished in this phase
4. **State what's next** - "Ready for PHASE 2: Planning. Say 'continue' to proceed."

---

## FILE LOCATIONS (Absolute Paths)

```
Base: /Users/shaansisodia/DEV/team-entrepreneurship/
```

### Working Directory
```
/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/04-strengths/
```

### Current Draft
```
/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/04-strengths/versions/v01/draft.md
```

### Files to Read (PHASE 1)
```
/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/YEAR-2-FEEDBACK/YEAR-2-SUMMARY.md
/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/YEAR-2-FEEDBACK/SELF-LEADERSHIP-FEEDBACK.md
/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/YEAR-2-FEEDBACK/ENQUIRY-FEEDBACK.md
/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/04-strengths/README.md
```

---

## YEAR 2 FEEDBACK: THE CRITICAL PATTERNS TO AVOID

### Pattern 1: Technical Achievement vs Personal Experience

**Year 2 Practice (53%) feedback:**
> "They predominantly focus on technical learning related to your ventures, with little contextual evidence of their actual experience."

**The Fix:**
- ❌ DON'T: "My strength is systems innovation - I built 75 AI agents that..."
- ✅ DO: "My strength in systematic thinking emerged from frustration with inefficiency. When I spent 2 weeks manually researching..."

### Pattern 2: No Specific Examples

**Year 2 Practice feedback:**
> "Each of these could also be related to your experiences with Team Apollo, to strengthen the evidence in being more specific."

**The Fix:**
- ❌ DON'T: "I'm good at communication"
- ✅ DO: "When working with Sam in September on the partnership model, I struggled to explain..."

### Pattern 3: Too Positive, No Self-Criticism

**Year 2 Self-Leadership (62%) feedback:**
> "More critical evaluation of your own development would have added more depth."

**The Fix:**
- Be honest about how strengths can become weaknesses
- Show self-awareness about the downside of each strength

---

## THE PERSONAL EXPERIENCE TEST

For EVERY strength, ask: **"Is this about ME and MY experience, or just listing abilities?"**

**Bad (Listing abilities):**
> "Strategic Problem-Solving: I excel at identifying optimal solutions others miss, such as saving the Nigerian crypto client $100,000+ through API integration."

**Good (Personal experience):**
> "Strategic problem-solving became a strength through failure. In August 2024, I spent 2 weeks manually researching for a crypto client, only to realize I'd missed crucial information because the process was tedious. That failure sparked my obsession with systematic approaches. But this strength has a downside: when Sam asked in September why I was still optimizing instead of doing outreach, I felt defensive—my systematic thinking had become perfectionism avoidance. This taught me that strategic problem-solving is valuable, but only when balanced with ruthless pragmatism."

---

## SUCCESS CRITERIA

The rewrite is complete when it:
1. ✅ Word count is ~300-400 words
2. ✅ Each strength passes "Personal Experience Test"
3. ✅ Each strength includes a specific Team Apollo example (Sam/Leo/David/Harry)
4. ✅ Each strength shows self-awareness (strength can become weakness)
5. ✅ Honest self-criticism included (not just positive)
6. ✅ Avoids all Year 2 patterns

---

## START NOW - PHASE 1: ANALYSIS

**Begin immediately by:**

1. Reading the current draft
2. Reading Year 2 feedback files
3. Reading the section README
4. Creating STATE.md, CHECKLIST.md, and agent_task.md
5. Providing a summary of issues found

**Do NOT wait for user input. Analyze the current content and produce your assessment.**

---

*Prompt improved: January 20, 2026*
*Changes from v1: Removed user input bottleneck, added explicit state tracking, simplified to 5 phases*
