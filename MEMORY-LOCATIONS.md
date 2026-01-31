# Coursework Action Plan - Memory Locations

**Date:** January 24, 2026
**Status:** Action plan stored in both project memory systems

---

## TWO MEMORY SYSTEMS ACTIVE

### 1. Black Box 5 Memory Bank (Primary)

**Location:** `/Users/shaansisodia/DEV/team-entrepreneurship/.blackbox5/engine/memory/memory-bank/`

**Purpose:** Autonomous agent system memory for Black Box 5 operations

**Files:**
- `coursework-action-plan.md` (16KB) - Complete action plan
- `active-context.md` (4.4KB) - Current session context
- `progress.md` (6.3KB) - Task progress tracking
- `decision-log.md` (6.4KB) - Decision rationale and history

**Accessed By:** Black Box 5 autonomous agents during execution

**Principle:** MEMORY-FIRST - All agents read memory bank before acting

---

### 2. Serena Memory System (Project Memory)

**Location:** `/Users/shaansisodia/DEV/team-entrepreneurship/.serena/memories/`

**Purpose:** Team Entrepreneurship project memory for Serena agent system

**Project Configuration:** `.serena/project.yml`
- Project name: "team-entrepreneurship"
- Language: TypeScript
- Encoding: UTF-8

**Files:**
- `coursework-completion-action-plan.md` (16KB) - Complete action plan (COPIED)
- `lc-4-strengths-improvement-cycle.md` - Historical LC4 improvement
- `lc1-improvement-cycle-iteration-1-complete.md` - Historical LC1 work
- `lc3-final-validator-assessment-v03.md` - Historical LC3 assessment
- `lc3-manager-assessment-v01.md` - Historical LC3 manager assessment
- `lc3-validator-assessment-v02.md` - Historical LC3 validator assessment
- `lc8-phase3-completion.md` - Historical LC8 completion
- `lc8-task-complete.md` - Historical LC8 task
- `year-3-harsh-assessment-q1.md` - Year 3 harsh assessment Q1
- `year-3-harsh-assessment-q6.md` - Year 3 harsh assessment Q6

**Accessed By:** Serena agents during project work

**Principle:** Project-specific memory for context preservation across sessions

---

## REDUNDANCY STRATEGY

**Why Two Locations?**

1. **Black Box 5:** Autonomous agent system (MEMORY-FIRST principle)
   - Agents read memory bank before every action
   - Decision log ensures traceability
   - Progress tracking enables resume capability
   - Active context provides session continuity

2. **Serena:** Project memory system (team-entrepreneurship)
   - Historical memories preserved from previous work
   - Project configuration in `.serena/project.yml`
   - Accessible via Serena's `read_memory` and `write_memory` tools
   - Integrates with language server (TypeScript)

**Benefits:**
- **Fault Tolerance:** If one system fails, the other has the plan
- **Accessibility:** Different agents use different systems
- **Context Preservation:** Both systems maintain full context
- **Historical Record:** Serena has historical coursework memories; Black Box has current execution context

---

## ACTION PLAN CONTENTS (Both Locations)

**Section 1: Executive Summary**
- Current status: 82-88% (First-Class to Outstanding)
- Target: 90-100% (Outstanding)
- Strategy: Option B (2-3 hours LC improvements → Submit → LfO Undertakings)

**Section 2: Available Data & Context**
- Psychometric data (INTJ, Learning Styles, Motivation, Big 5, Assertiveness)
- Year 2 feedback (12 critical issues, Personal Experience Test)
- Learning Contract status (all 9 sections graded)
- Existing undertakings (3 LfO drafts, 3 LbD templates)

**Section 3: Action Plan - Delegation Ready**
- Phase 1: Learning Contract improvements (LC1, LC5, LC6)
- Phase 2: LfO undertakings polish (LfO-01, 02, 03)
- Phase 3: LfO undertakings creation (LfO-04, 05, 06)

**Section 4: Quality Standards**
- Outstanding criteria (90-100%)
- Validation checklist
- Personal Experience Test
- Year 2 pattern avoidance

**Section 5: Agent Delegation Plan**
- Agent 1: Learning Contract improvements
- Agent 2: LfO undertakings polish
- Agent 3: LfO undertakings creation

**Section 6: Success Metrics**
- Minimum success criteria
- Expected grade improvement
- Time investment estimates

**Section 7: Risk Mitigation**
- 4 identified risks with mitigation strategies

**Section 8: Next Steps**
- Immediate actions
- Parallel execution plan
- Final validation steps

---

## MEMORY SYSTEM COMPARISON

| Feature | Black Box 5 | Serena |
|---------|-------------|---------|
| **Location** | `.blackbox5/engine/memory/memory-bank/` | `.serena/memories/` |
| **Purpose** | Autonomous agent execution | Project context preservation |
| **Access Method** | File-based (agents read directly) | Tool-based (`read_memory`/`write_memory`) |
| **Structure** | 4 files (active-context, progress, decision-log, + plans) | Flat file list (all memories) |
| **Historical** | Current session only (archived in decision-log) | Rich historical memories (LC1-LC8, assessments) |
| **Integration** | Black Box 5 agent system | Serena agent system + language server |
| **Principle** | MEMORY-FIRST (always read before acting) | Project memory (context across sessions) |

---

## BEST PRACTICE: UPDATE BOTH LOCATIONS

**When Making Updates:**
1. Update primary working location (usually Black Box 5 during execution)
2. Copy critical updates to secondary location (Serena for project history)
3. Both systems should have identical action plan content

**Current Status:**
- ✅ Black Box 5: Complete (active-context, progress, decision-log, action-plan)
- ✅ Serena: Complete (action-plan copied, historical memories preserved)

**Verification:**
```bash
# Black Box 5
ls -lh .blackbox5/engine/memory/memory-bank/coursework-action-plan.md
# Result: 16KB

# Serena
ls -lh .serena/memories/coursework-completion-action-plan.md
# Result: 16KB
```

---

## QUICK REFERENCE

**To Read the Action Plan:**
- Black Box 5: `.blackbox5/engine/memory/memory-bank/coursework-action-plan.md`
- Serena: `.serena/memories/coursework-completion-action-plan.md`

**To Check Progress:**
- Black Box 5: `.blackbox5/engine/memory/memory-bank/progress.md`

**To Understand Context:**
- Black Box 5: `.blackbox5/engine/memory/memory-bank/active-context.md`

**To See Decisions:**
- Black Box 5: `.blackbox5/engine/memory/memory-bank/decision-log.md`

**To View Historical Work:**
- Serena: `.serena/memories/year-3-harsh-assessment-q1.md`
- Serena: `.serena/memories/lc3-final-validator-assessment-v03.md`

---

**Status:** ✅ Action plan stored in both memory systems
**Date:** January 24, 2026
**Next:** Execute action plan using multi-agent delegation

---

*Memory locations documented for team-entrepreneurship project*
