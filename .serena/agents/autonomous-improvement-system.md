# Autonomous Learning Contract Improvement System

## First Principles Design

**Core Problem:** AI agents need continuous feedback loops to improve academic writing from 55% to 90%+

**Key Insight:** The previous system failed because agents waited for human approval. The new system must be fully autonomous.

**System Architecture:**
```
Manager Agent → Analyzes → Generates 5 Improvements
       ↓
Worker Agent → Selects → Implements 1 Improvement
       ↓
Validator Agent → Checks → Merges if Valid
       ↓
Manager Agent → Repeats → Until 90%+ Target Met
```

---

## The 9 Learning Contract Sections

| Section | Path | Target Words | Current Grade | Target Grade |
|---------|------|--------------|---------------|--------------|
| LC:1 | `01-where-have-i-been/` | 500 | 45-55% | 90-100% |
| LC:2 | `02-competencies-developed/` | 600-900 | 55-60% | 90-100% |
| LC:3 | `03-where-am-i-now/` | 500-800 | 60-68% | 90-100% |
| LC:4 | `04-strengths/` | 300-400 | 55-60% | 90-100% |
| LC:5 | `05-challenges/` | 300-400 | 55-60% | 90-100% |
| LC:6 | `06-where-do-i-want-to-get-to/` | 270-330 | 55-60% | 90-100% |
| LC:7 | `07-how-will-i-get-there/` | 450-550 | 68-75% | 90-100% |
| LC:8 | `08-competencies-will-develop/` | 300-600 | 55-60% | 90-100% |
| LC:9 | `09-where-did-i-get-to/` | TBD | TBD | 90-100% |

---

## The 5 Critical Patterns (from HARSH-ASSESSMENT-SUMMARY.md)

1. **Technical Description vs Personal Experience** - Shift from "what I built" to "how I grew"
2. **All Venture Focus, No Balance** - Rebalance to 2-2-2 (self-team-venture)
3. **No Values/Ethics Evaluation** - Add ethical dilemmas and values-in-action
4. **Generic Examples vs Team Apollo Specificity** - Use Sam/Leo/David/Harry with dates
5. **Not Critical Enough (Too Positive)** - Be honest about failures and struggles

---

## Agent Roles

### 1. Manager Agent

**Purpose:** Analyze current draft and generate 5 specific improvements

**Input:**
- Current draft content
- HARSH-ASSESSMENT-SUMMARY.md
- YEAR-2-FEEDBACK/YEAR-2-SUMMARY.md
- Section-specific harsh assessment
- User context file

**Output:** JSON with 5 improvements:
```json
{
  "section": "LC:1",
  "current_grade_estimate": "45-55%",
  "improvements": [
    {
      "priority": 1,
      "title": "Replace technical description with personal experience",
      "location": "Learning Moment 1 (Systems Innovation)",
      "current_issue": "53 words about automation system, 0 words about personal growth",
      "suggested_change": "Rewrite to focus on what building the system taught about perfectionism patterns",
      "expected_impact": "+15-20 percentage points",
      "implementation_complexity": "medium"
    }
  ]
}
```

**Process:**
1. Read current draft
2. Apply "Personal Experience Test" to every paragraph
3. Cross-reference with Year 2 feedback patterns
4. Generate 5 prioritized improvements
5. Output to `IMPROVEMENTS.md`

---

### 2. Worker Agent

**Purpose:** Implement one specific improvement

**Input:**
- Current draft content
- One improvement from Manager
- All context files
- Examples from HARSH-ASSESSMENT-SUMMARY.md

**Output:** Revised draft with improvement applied

**Process:**
1. Read the improvement description
2. Locate the specific section to modify
3. Apply the change using examples as guidance
4. Verify word count still in range
5. Create new version or update existing
6. Write `IMPLEMENTATION-LOG.md` explaining what changed

**Critical Rule:** Only implement ONE improvement per run. Do not attempt to fix everything at once.

---

### 3. Validator Agent

**Purpose:** Validate improvement was correctly applied

**Input:**
- Previous draft
- New draft
- Improvement that was supposed to be applied

**Output:** Pass/Fail with reasoning

**Checks:**
1. Was the specific change actually made?
2. Does word count remain in target range?
3. Does the change improve alignment with 90-100% criteria?
4. Were no other sections accidentally modified?

**If Pass:** Merge to main branch, increment version
**If Fail:** Revert, log reason, request Worker to retry

---

## Autonomous Execution Flow

```
START
  ↓
[Manager Agent]
  ↓ Read current draft
  ↓ Apply 5-pattern analysis
  ↓ Generate 5 improvements
  ↓
[Write IMPROVEMENTS.md]
  ↓
[Worker Agent - Iteration 1]
  ↓ Read IMPROVEMENTS.md
  ↓ Select Priority 1 improvement
  ↓ Implement change
  ↓ Write IMPLEMENTATION-LOG.md
  ↓
[Validator Agent]
  ↓ Verify change applied correctly
  ↓
[PASS?] → Yes → [Merge to main] → [Manager Agent re-analyze]
[PASS?] → No → [Revert] → [Worker Agent retry]
  ↓
[All improvements applied?]
  ↓ Yes → [SECTION COMPLETE]
  ↓ No → [Continue with Priority 2]
```

---

## Success Criteria

**Section Level:**
- All 5 patterns addressed
- Word count in target range
- Every sentence passes "Personal Experience Test"
- Specific team examples throughout (Sam/Leo/David/Harry)
- Values/ethics evaluation present
- Honest self-criticism (not too positive)

**System Level:**
- Fully autonomous (no human approval needed)
- Self-validating (checks own work)
- Incremental (one improvement at a time)
- Reversible (can undo if validation fails)
- Traceable (every change logged)

---

## File Structure

```
.serena/agents/
├── autonomous-improvement-system.md (this file)
├── prompts/
│   ├── manager-agent-prompt.md
│   ├── worker-agent-prompt.md
│   └── validator-agent-prompt.md
└── workspace/
    ├── lc-01/
    │   ├── IMPROVEMENTS.md
    │   ├── IMPLEMENTATION-LOG.md
    │   └── VALIDATION-LOG.md
    ├── lc-02/
    └── ...
```

---

## Integration with Git

The system will use Git worktrees for isolated work:

```bash
# Manager creates analysis branch
git checkout -b lc-01-analysis-$(date +%s)

# Worker creates implementation branch
git checkout -b lc-01-implement-$(date +%s)

# Validator merges if pass
git merge lc-01-implement-xxx
git branch -d lc-01-implement-xxx
```

---

## Key Principles

1. **Autonomy First** - No waiting for human approval
2. **Incremental Progress** - One improvement at a time
3. **Validation Gate** - Every change must pass validation
4. **Reversibility** - Failed changes are reverted
5. **Traceability** - Every decision is logged
6. **First Principles** - Each agent grounds decisions in the source material (Year 2 feedback, harsh assessments)

---

## Next Steps

1. Create manager-agent-prompt.md
2. Create worker-agent-prompt.md
3. Create validator-agent-prompt.md
4. Test on LC:1 (where-have-i-been) first
5. Iterate based on results
6. Deploy to all 9 sections
