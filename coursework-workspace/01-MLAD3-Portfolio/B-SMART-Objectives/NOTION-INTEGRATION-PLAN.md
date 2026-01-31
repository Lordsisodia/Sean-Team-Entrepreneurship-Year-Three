# SMART Objectives - Notion Integration Plan

**Created:** January 21, 2026
**Status:** Planning Phase
**Notion Page ID:** `2edb892f41618168bbfae35f2c6408e9`

---

## Overview

This plan outlines how to structure the 6 SMART objectives in Notion with full integration for progress tracking, rationale documentation, change logs, and feedback management.

**Key Design Principles:**
1. **Central Database** - Single database for all 6 objectives with cross-referenced pages
2. **Progress Tracking** - Real-time progress ratings with evidence
3. **Change Logging** - Automated change tracking with rationales
4. **Feedback Integration** - Team review feedback linked to each objective
5. **Milestone Tracking** - Key deadlines and completion status

---

## Architecture

### Structure Overview

```
SMART Objectives (Main Page)
├── 📊 Progress Dashboard (Summary View)
├── 🎯 Objectives Database (6 Records)
│   ├── Objective 1: Time-Blocking App
│   ├── Objective 2: Cannabis-Free Lifestyle
│   ├── Objective 3: Sam Content Production
│   ├── Objective 4: Outreach Automation
│   ├── Objective 5: Client App MVP
│   └── Objective 6: Partnership App
├── 📝 Change Log (Timeline View)
├── 💬 Feedback Hub (Review Tracking)
└── 🔗 Quick Links
```

### Page Hierarchy

```
SMART Objectives (Root Page)
├── Summary Section (Progress Dashboard)
├── Linked Database View (All 6 objectives)
└── Individual Objective Pages (Linked from DB)
    ├── Page Content
    │   ├── SMART Statement
    │   ├── Breakdown (S-M-A-R-T)
    │   ├── Progress Rating
    │   ├── Current Status
    │   ├── Milestones
    │   ├── Rationale
    │   └── Evidence Links
    └── Related Pages
        ├── Change Log Entries
        └── Feedback Records
```

---

## Database Schema

### SMART Objectives Database

**Database Name:** `SMART Objectives - Year 3`

**Properties:**

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| **Name** | Title | Objective title | "Objective 1: Time-Blocking App MVP" |
| **Number** | Number | Sort order (1-6) | 1 |
| **Type** | Select | Objective category | Self / Team / Project |
| **Progress** | Number | Current progress % | 40 |
| **Status** | Select | Current state | Not Started / In Progress / On Track / At Risk / Complete |
| **Competency** | Multi-select | UWE TE competencies | Self-Management, Innovation |
| **Target Date** | Date | Primary deadline | 2025-11-30 |
| **Start Date** | Date | When objective began | 2025-10-01 |
| **Priority** | Select | Importance level | Critical / High / Medium |
| **Last Review** | Date | Most recent review date | 2026-01-20 |
| **Next Review** | Date | Scheduled next review | 2026-01-26 |
| **Rating** | Formula | Auto-calculated status | "On Track" based on progress + timeline |
| **Changes** | Rollup | Count of change log entries | 3 |
| **Feedback** | Rollup | Count of feedback items | 2 |

**Select Options:**

- **Type:** Self-development, Team-development, Project-development
- **Status:** Not Started, In Progress, On Track, At Risk, Complete, Blocked
- **Priority:** Critical, High, Medium, Low
- **Competency:** Self-Management, Strategic Leadership, Service Design & Delivery, Innovation Management, Financial Management, Entrepreneurial Judgment

---

### Change Log Database

**Database Name:** `SMART Objectives - Change Log`

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| **Date** | Date | When change was made |
| **Objective** | Relation | Links to objective |
| **Change Type** | Select | Major / Minor / Correction |
| **Description** | Text | What changed |
| **Rationale** | Text | Why the change was made |
| **Impact** | Select | High / Medium / Low |
| **Author** | Text | Who made the change |

---

### Feedback Database

**Database Name:** `SMART Objectives - Feedback`

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| **Date** | Date | When feedback received |
| **Objective** | Relation | Links to objective (can be multiple) |
| **Reviewer** | Text | Name of reviewer |
| **Review Type** | Select | Team Review 1 / Team Review 2 / Team Review 3 / AI / Other |
| **Feedback** | Text | Full feedback text |
| **Response** | Text | How you acted on it |
| **Status** | Select | New / In Progress / Addressed |
| **Rating** | Select | Positive / Constructive / Critical |

---

## Individual Objective Page Template

Each objective page follows this structure:

### Page Content Sections

```markdown
# 🎯 [Objective Name]

> **Type:** [Self/Team/Project] | **Essential Competency:** [Competency Name] | **Duration:** [Timeline]

---

## 📋 SMART Statement

[The full SMART objective statement]

---

## 🎯 SMART Breakdown

### 📌 Specific
[Detailed specificity - what exactly will be done]

### 📊 Measurable
[Metrics - baseline, target, how measured]

### ✅ Achievable
[Feasibility - resources, timeline, capabilities]

### 🎯 Relevant
[Alignment to Learning Contract, competencies, challenges]

### ⏰ Time-Bound
[Deadlines, milestones, review points]

---

## 📊 Progress Rating: [X]%

**Last Updated:** [Date]

### Current Status
[Status: On Track / At Risk / Blocked]

### Evidence of Progress
- [Evidence point 1]
- [Evidence point 2]
- [Evidence point 3]

### Metrics Tracking
| Metric | Baseline | Current | Target | Date |
|--------|----------|---------|--------|------|
| [Metric 1] | [X] | [Y] | [Z] | [Date] |
| [Metric 2] | [X] | [Y] | [Z] | [Date] |

---

## 📍 Milestones

| Milestone | Target Date | Status | Notes |
|-----------|-------------|--------|-------|
| [Milestone 1] | [Date] | ✅/⏳/❌ | [Notes] |
| [Milestone 2] | [Date] | ✅/⏳/❌ | [Notes] |
| [Milestone 3] | [Date] | ✅/⏳/❌ | [Notes] |

---

## 💡 Rationale

### Why This Objective?
[Strategic reasoning - how it connects to Learning Contract goals]

### Why This Approach?
[Methodology reasoning - why this specific strategy]

### Why This Timeline?
[Timeline reasoning - connection to other objectives, dependencies]

---

## 🔗 Dependencies

### Depends On
- [Objective X] - [Reason]
- [Resource Y] - [Reason]

### Enables
- [Objective Z] - [Reason]

### Blocking Issues
- [Issue] - [Impact] - [Resolution plan]

---

## 📎 Evidence & Proofs

### Documents
- **[Document Name]** - [Link]

### GitHub Repos
- **[Repo Name]** - [Link] - [Purpose]

### Notion Pages
- **[Page Name]** - [Link] - [Purpose]

### External Links
- **[Resource Name]** - [Link]

---

## 📝 Related Changes

[Linked view of Change Log entries for this objective]

---

## 💬 Feedback & Responses

[Linked view of Feedback entries for this objective]

---

## 🎯 Next Steps

1. [Immediate next action]
2. [Short-term action]
3. [Long-term action]

---

**Last Reviewed:** [Date]
**Next Review:** [Date]
**Review Frequency:** [Weekly/Monthly]
```

---

## Main Dashboard Layout

### SMART Objectives Root Page

```markdown
# 🎯 SMART Objectives - Year 3

> **MLAD3 Portfolio** | **Target Grade:** 90-100% (Outstanding) | **Total:** 6 Objectives

---

## 📊 Progress Summary

### Overall Progress: [X]%

| Objective | Type | Progress | Status | Target Date |
|-----------|------|----------|--------|-------------|
| 1. Time-Blocking App | Self | 40% | ⏳ On Track | Nov 30, 2025 |
| 2. Cannabis-Free | Self | 15% | ⏳ On Track | Apr 30, 2026 |
| 3. Sam Content | Team | 10% | ⏳ At Risk | Feb 28, 2026 |
| 4. Outreach Automation | Project | 8% | ⏳ Not Started | Feb 28, 2026 |
| 5. Client App MVP | Project | 40% | ⏳ On Track | Nov 30, 2025 |
| 6. 100 Partnerships | Project | 5% | 🔴 Critical | Apr 30, 2026 |

---

## 🎯 Competency Coverage

| Competency | Objectives |
|------------|------------|
| Self-Management | Obj 1, Obj 2 |
| Strategic Leadership | Obj 3 |
| Service Design & Delivery | Obj 4, Obj 6 |
| Innovation Management | Obj 5 |
| Entrepreneurial Judgment | Obj 6 |
| Financial Management | Obj 6 |

**Balance Check:** ✅ 2 Self | 2 Team | 2 Project

---

## 📈 Upcoming Deadlines (Next 30 Days)

| Date | Objective | Milestone | Priority |
|------|-----------|-----------|----------|
| [Date] | [Obj] | [Milestone] | [High/Med] |
| [Date] | [Obj] | [Milestone] | [High/Med] |

---

## 🎯 All Objectives

[Linked Database View - Board or Table format]

---

## 📝 Recent Changes

[Linked view of Change Log - sorted by date, most recent 5]

---

## 💬 Feedback Status

| Review | Date | Status | Feedback Received |
|--------|------|--------|-------------------|
| Review 1 | Oct 31, 2025 | ✅ Complete | 3 team members |
| Review 2 | Jan 26, 2026 | 🔴 Upcoming | Scheduled |
| Review 3 | Mar 23-26, 2026 | ⏳ Scheduled | Pending |

---

## 🔗 Quick Links

- [Learning Contract](Notion Link)
- [Activity Log](Notion Link)
- [PebblePad Submission](External Link)
- [MLAD3 Handbook](External Link)

---

**Last Updated:** [Date]
**Next Review:** [Date]
```

---

## Implementation Steps

### Phase 1: Database Setup
1. Create `SMART Objectives - Year 3` database with all properties
2. Create `Change Log` database with relation to objectives
3. Create `Feedback` database with relation to objectives

### Phase 2: Page Creation
1. Create individual page for each of the 6 objectives
2. Populate with current content from markdown files
3. Link pages to database records

### Phase 3: Dashboard Setup
1. Create main SMART Objectives dashboard
2. Add progress summary table
3. Add linked database views
4. Add change log and feedback views

### Phase 4: Integration
1. Set up formulas for auto-calculated fields
2. Create views (Board, Timeline, Calendar)
3. Add filters and sorts for different perspectives

### Phase 5: Content Migration
1. Migrate all 6 objectives from markdown to Notion
2. Migrate change log entries
3. Migrate feedback records
4. Verify all links work

---

## Views to Create

### Database Views

1. **Board View** - Grouped by Status (Not Started, In Progress, Complete)
2. **Timeline View** - Grouped by Type, showing date ranges
3. **Calendar View** - Focused on Target Dates
4. **Table View** - All properties, sortable
5. **Progress View** - Sorted by Progress % descending

### Change Log Views

1. **Timeline View** - Chronological order
2. **By Objective** - Grouped by related objective
3. **By Impact** - Filtered by High/Medium/Low

### Feedback Views

1. **By Review** - Grouped by Review 1/2/3
2. **By Status** - New / In Progress / Addressed
3. **By Objective** - All feedback for specific objective

---

## Formulas

### Status Formula (Rating Property)
```
if(prop("Progress") == 100, "Complete",
if(prop("Progress") >= 75, "Near Complete",
if(prop("Progress") >= 50, "On Track",
if(prop("Progress") >= 25, "In Progress",
if(prop("Progress") > 0, "Started",
"Not Started")))))
```

### At Risk Formula
```
if(and(dateBetween(prop("Target Date"), now(), "days") < 14, prop("Progress") < 50), "⚠️ At Risk",
if(and(dateBetween(prop("Target Date"), now(), "days") < 7, prop("Progress") < 75), "🔴 Critical", "✅ On Track"))
```

---

## Linking to PebblePad

### Integration Points

1. **Progress Ratings** - Copy current % to PebblePad SMART objectives section
2. **Change Log** - Reference Notion page in PebblePad "Evidence" section
3. **Feedback** - Summarize in PebblePad, link to full Notion record

### Format for PebblePad

```
**Progress Rating:** [X]% (as of [Date])
**Evidence:** Full tracking in Notion [Link]
**Changes:** [X] changes logged [Link]
**Feedback:** [X] reviews completed [Link]
```

---

## Maintenance Workflow

### Weekly
- Update progress % in database
- Add evidence links to objective pages
- Check milestone status

### After Team Reviews
- Create feedback records in Feedback database
- Document responses to each feedback item
- Update objectives based on feedback

### When Making Changes
- Create Change Log entry immediately
- Document rationale in detail
- Link to affected objectives
- Update milestones if needed

### Monthly
- Review all 6 objectives
- Update status ratings
- Check deadline proximity
- Adjust priorities if needed

---

## Notion MCP Commands

### Fetch Page
```python
mcp__notion__notion-fetch(id="2edb892f41618168bbfae35f2c6408e9")
```

### Update Page
```python
mcp__notion__notion-update_page(data={
    "page_id": "PAGE_ID",
    "command": "replace_content",
    "new_str": "FULL_NEW_CONTENT"
})
```

### Query Database
```python
mcp__notion__notion-query_database(data={
    "database_id": "DATABASE_ID",
    "filter": {
        "property": "Status",
        "select": {"equals": "In Progress"}
    }
})
```

---

## File Locations

- **This Plan:** `/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/B-SMART-Objectives/NOTION-INTEGRATION-PLAN.md`
- **Complete SMART Objectives:** `./00-Complete-SMART-Objectives.md`
- **Visual Layout:** `./01-Visual-Layout-Year-3.md`
- **Notion Documentation:** `/Users/shaansisodia/DEV/team-entrepreneurship/NOTION-SETUP-DOCUMENTATION.md`

---

## Next Actions

1. Review and approve this plan
2. Set up databases in Notion
3. Create page templates
4. Migrate content from markdown
5. Test integration and linking
6. Document any adjustments

---

**Status:** Ready for implementation
**Priority:** High (Review 2 on January 26, 2026)
