# Autonomous Learning Contract Improvement System

A fully autonomous AI agent system for improving academic writing from 55% to 90%+ through iterative analysis, implementation, and validation cycles.

## Overview

This system addresses the core problem from Year 2 (40-62% grades) by applying first-principles thinking and autonomous agent collaboration. Each Learning Contract section is processed through a cycle of:

1. **Manager Agent** → Analyzes current draft, generates 5 prioritized improvements
2. **Worker Agent** → Implements one specific improvement
3. **Validator Agent** → Validates the implementation
4. **Merge** → If valid, merge to main; if not, retry
5. **Repeat** → Manager Agent re-analyzes and cycle continues

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    AUTONOMOUS IMPROVEMENT CYCLE             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │   Manager    │───▶│    Worker    │───▶│  Validator   │  │
│  │   Agent      │    │    Agent     │    │   Agent      │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│         │                                      │            │
│         ▼                                      ▼            │
│  IMPROVEMENTS.md                        VALIDATION-LOG.md    │
│  (5 prioritized                          (PASS/FAIL)        │
│   improvements)                                              │
│         │                                      │            │
│         └──────────────┬───────────────────────┘            │
│                        ▼                                     │
│                   [MERGE IF PASS]                           │
│                        │                                     │
│                        ▼                                     │
│                   [RE-ANALYZE]                              │
│                        │                                     │
│                        └──────▶ Repeat until 90%+             │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## The 9 Learning Contract Sections

| Code | Section | Target Words | Current Grade | Target |
|------|---------|--------------|---------------|--------|
| LC:1 | Where Have I Been | 500 | 45-55% | 90-100% |
| LC:2 | Competencies Developed | 600-900 | 55-60% | 90-100% |
| LC:3 | Where Am I Now | 500-800 | 60-68% | 90-100% |
| LC:4 | Strengths Analysis | 300-400 | 55-60% | 90-100% |
| LC:5 | Challenges Analysis | 300-400 | 55-60% | 90-100% |
| LC:6 | Where Do I Want To Get To | 270-330 | 55-60% | 90-100% |
| LC:7 | How Will I Get There | 450-550 | 68-75% | 90-100% |
| LC:8 | Competencies Will Develop | 300-600 | 55-60% | 90-100% |
| LC:9 | Where Did I Get To | TBD | TBD | 90-100% |

## The 5 Critical Patterns

These patterns caused 40-62% grades in Year 2. The system is designed to fix them:

| # | Pattern | Year 2 Issue | Fix Strategy |
|---|---------|--------------|--------------|
| 1 | Technical vs Personal | "Predominantly focus on technical learning" | Rewrite to focus on personal growth |
| 2 | All Venture Focus | "Strong focus on venture, no balance" | Rebalance to 2-2-2 (self-team-venture) |
| 3 | No Values/Ethics | "Lack thorough evaluation of values/ethics" | Add ethical dilemmas and values-in-action |
| 4 | Generic Examples | "Could be related to Team Apollo" | Use Sam/Leo/David/Harry with dates |
| 5 | Too Positive | "More critical evaluation would add depth" | Be honest about failures and struggles |

## Quick Start

### Option 1: Run All Sections Automatically

```bash
cd /Users/shaansisodia/DEV/team-entrepreneurship
.serena/agents/orchestrator.sh run-all
```

### Option 2: Run One Section Manually

```bash
# Step 1: Generate improvements
.serena/agents/orchestrator.sh manager lc-01

# Step 2: Implement improvement #1
.serena/agents/orchestrator.sh worker lc-01 1

# Step 3: Validate improvement #1
.serena/agents/orchestrator.sh validator lc-01 1

# Step 4: Merge if validation passed
.serena/agents/orchestrator.sh merge lc-01

# Repeat for improvements 2-5, or use:
.serena/agents/orchestrator.sh run lc-01  # Full cycle
```

### Option 3: Use Claude Code CLI Directly

```bash
# Manager Agent
claude --prompt="$(
  cat .serena/agents/prompts/manager-agent-prompt.md
)" --section=lc-01

# Worker Agent
claude --prompt="$(
  cat .serena/agents/prompts/worker-agent-prompt.md
)" --section=lc-01 --improvement=1

# Validator Agent
claude --prompt="$(
  cat .serena/agents/prompts/validator-agent-prompt.md
)" --section=lc-01 --improvement=1
```

## File Structure

```
.serena/agents/
├── autonomous-improvement-system.md    # System architecture
├── README.md                            # This file
├── orchestrator.sh                       # Automation script
├── prompts/
│   ├── manager-agent-prompt.md          # Manager Agent instructions
│   ├── worker-agent-prompt.md           # Worker Agent instructions
│   └── validator-agent-prompt.md        # Validator Agent instructions
└── workspace/
    ├── lc-01/
    │   ├── IMPROVEMENTS.md              # 5 prioritized improvements
    │   ├── IMPLEMENTATION-LOG.md        # Worker Agent log
    │   └── VALIDATION-LOG.md            # Validator Agent report
    ├── lc-02/
    └── ...
```

## Agent Roles

### Manager Agent

**Purpose:** Analyze draft and generate 5 prioritized improvements

**Input:**
- Current draft
- HARSH-ASSESSMENT-SUMMARY.md
- YEAR-2-FEEDBACK/YEAR-2-SUMMARY.md
- Section-specific harsh assessment

**Output:** `IMPROVEMENTS.md` with 5 prioritized improvements

**Process:**
1. Read all context files
2. Apply "Personal Experience Test" to every paragraph
3. Detect the 5 critical patterns
4. Generate 5 specific, actionable improvements
5. Prioritize by grade impact

### Worker Agent

**Purpose:** Implement ONE specific improvement

**Input:**
- Current draft
- One improvement from IMPROVEMENTS.md
- All context files

**Output:** Updated draft + `IMPLEMENTATION-LOG.md`

**Process:**
1. Read the improvement description
2. Locate the specific section
3. Apply the change
4. Verify word count still in range
5. Document what changed

**Critical Rule:** Only implement ONE improvement per run

### Validator Agent

**Purpose:** Validate that improvement was correctly applied

**Input:**
- Previous draft (before)
- New draft (after)
- Improvement that was supposed to be applied

**Output:** `VALIDATION-LOG.md` with PASS/FAIL decision

**Checks:**
1. Correct improvement applied?
2. Only specified location changed?
3. Personal Experience Test passed?
4. Word count in range?
5. Specific examples included?
6. Honest self-criticism present?

**Decision:**
- PASS → Merge to main
- FAIL → Revert and request retry

## Success Criteria

### Section Level (90-100% grade)

- ✅ All 5 patterns addressed
- ✅ Word count in target range
- ✅ Every sentence passes "Personal Experience Test"
- ✅ Specific team examples throughout (Sam/Leo/David/Harry)
- ✅ Values/ethics evaluation present
- ✅ Honest self-criticism (not too positive)

### System Level (Autonomous operation)

- ✅ Fully autonomous (no human approval needed)
- ✅ Self-validating (checks own work)
- ✅ Incremental (one improvement at a time)
- ✅ Reversible (can undo if validation fails)
- ✅ Traceable (every change logged)

## The Personal Experience Test

For EVERY paragraph, ask:

**Is this about ME and MY experience?**

If the paragraph is primarily about:
- A technical system → **FAIL** → Rewrite to focus on what you learned
- A project achievement → **FAIL** → Rewrite to focus on how it changed you
- A skill developed → **FAIL** → Rewrite to focus on the personal journey
- Your feelings/struggles/growth → **PASS**

## Reference Material

The system is grounded in these source documents:

1. **HARSH-ASSESSMENT-SUMMARY.md** - The 5 critical patterns and conversion examples
2. **YEAR-2-FEEDBACK/YEAR-2-SUMMARY.md** - What caused 40-62% grades
3. **Section-specific harsh assessments** - Detailed issues per section
4. **User context files** - Team Apollo clarifications, delegation examples

## Status Monitoring

Check the status of all sections:

```bash
.serena/agents/orchestrator.sh status
```

Output shows:
- Which improvements have been generated
- Which have been implemented
- Which have been validated
- Current state of each section

## Troubleshooting

### Manager Agent Not Generating Improvements

- Check that HARSH-ASSESSMENT-SUMMARY.md exists
- Verify the current draft exists
- Ensure workspace directory is writable

### Worker Agent Not Implementing

- Check that IMPROVEMENTS.md exists
- Verify the improvement number is valid (1-5)
- Check file permissions for draft file

### Validator Agent Failing

- Review IMPLEMENTATION-LOG.md to see what was done
- Check VALIDATION-LOG.md for specific failure reasons
- Manually review the change to understand the issue

### Word Count Issues

- If over target: Remove adjectives, condense examples
- If under target: Add personal detail, expand on feelings
- Target range: ±10% of stated target

## Integration with Git

The system creates new versions for each validated improvement:

```
coursework-workspace/.../versions/
├── v01/
│   └── draft.md
├── v02/  # Created after improvement #1 validated
│   └── draft.md
├── v03/  # Created after improvement #2 validated
│   └── draft.md
└── ...
```

To commit changes to Git:

```bash
git add coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract
git commit -m "Apply autonomous improvement cycle to LC:X"
```

## Development and Testing

### Test on One Section First

```bash
# Run full cycle on LC:1 (shortest section)
.serena/agents/orchestrator.sh run lc-01

# Review results
ls -la coursework-workspace/01-MLAD3-Portfolio/A-Learning-Contract/01-where-have-i-been/versions/

# Check workspace
cat .serena/agents/workspace/lc-01/IMPROVEMENTS.md
cat .serena/agents/workspace/lc-01/IMPLEMENTATION-LOG.md
cat .serena/agents/workspace/lc-01/VALIDATION-LOG.md
```

### Clean Workspace

```bash
.serena/agents/orchestrator.sh clean
```

## Key Principles

1. **Autonomy First** - No waiting for human approval
2. **Incremental Progress** - One improvement at a time
3. **Validation Gate** - Every change must pass validation
4. **Reversibility** - Failed changes are reverted
5. **Traceability** - Every decision is logged
6. **First Principles** - Ground decisions in source material

## Next Steps

1. ✅ System architecture designed
2. ✅ Agent prompts created
3. ✅ Orchestrator script created
4. ⏳ Test on LC:1 first
5. ⏳ Iterate based on results
6. ⏳ Deploy to all 9 sections

---

**Created:** January 20, 2026
**Version:** 1.0
**Status:** Ready for testing
