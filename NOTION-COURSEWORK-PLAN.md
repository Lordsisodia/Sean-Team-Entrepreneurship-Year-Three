# Notion Structure Plan for TE Coursework Y3

**Parent Page:** TE COURSEWORK Y3 (`2ef49797be6880e2990ac440cc57c9cf`)
**Created:** January 23, 2026
**Goal:** Migrate from local markdown files to Notion databases for better organization and tracking

---

## Current Page Structure (from your description)

### Existing Sections:
1. **Cover** - Photo, quote, module info
2. **Learning Contract** - 9 questions (Q1-Q5 + competencies)
3. **SMART Objectives** - Current objectives
4. **Changelog** - Version history
5. **Activity Log** - Currently tables (need to convert to database)
6. **Evidence of Learning** - Currently tables (need to convert to database)

---

## New Subpages to Create

### 1. Activity Log Database 📊
**Page Name:** `Activity Log Database`
**Type:** Database
**Purpose:** Track all Learning by Doing (LbD) and Learning for Others (LfO) activities

#### Properties:
| Name | Type | Options/Notes |
|------|------|---------------|
| Title | Title | Activity name |
| Date | Date | When it happened |
| Type | Select | "In Practice" / "Enquiry-Based" |
| Status | Status | Not Started → In Progress → Complete → Submitted |
| Month | Formula | `prop("Date").format("MMMM YYYY")` |
| Aligned Objective | Relation | Links to SMART Objectives |
| Competency Area | Multi-select | Strategic Leadership, Self-Management, Communication, Entrepreneurial Judgment, Team Leadership, Financial Management |
| Evidence Link | URL | Link to local file or Notion page |
| Word Count | Number | For PebblePad submissions |
| Reflection | Text | Brief reflection notes |

#### Views:
- **All Activities** (table view)
- **By Month** (grouped by Month)
- **By Competency** (grouped by Competency Area)
- **By Status** (grouped by Status)
- **In Practice Only** (filter: Type = "In Practice")
- **Enquiry-Based Only** (filter: Type = "Enquiry-Based")

---

### 2. Undertakings Database 📋
**Page Name:** `Undertakings Database`
**Type:** Database
**Purpose:** Track all 18 undertakings (LbD, LfO, and Competency-based)

#### Properties:
| Name | Type | Options/Notes |
|------|------|---------------|
| Code | Title | e.g., "LbD-01", "LfO-01", "C-01" |
| Title | Text | Undertaking title |
| Type | Select | "Learning by Doing" / "Learning for Others" / "Competency" |
| Status | Status | Not Started → In Progress → Complete → Submitted |
| Start Date | Date | When started |
| End Date | Date | When completed (if applicable) |
| Competency Focus | Multi-select | Which competencies this develops |
| Linked Activities | Relation | Links to Activity Log entries |
| Evidence Location | URL | Where evidence is stored |
| Notes | Text | Additional context |

#### Views:
- **All Undertakings** (table view)
- **By Type** (grouped by Type)
- **By Status** (grouped by Status)
- **LbD Only** (filter: Type = "Learning by Doing")
- **LfO Only** (filter: Type = "Learning for Others")
- **Competency Only** (filter: Type = "Competency")

---

### 3. "In Practice" Template 📝
**Page Name:** `In Practice Template`
**Type:** Template (database page template)
**Purpose:** Standardized structure for new activity entries

#### Template Sections:

```markdown
## Activity Overview

**Activity Title:** [Title]
**Date:** [Date]
**Competency Areas:** [Select relevant competencies]
**Aligned Objective:** [Link to SMART objective]

---

## Context 📋

**What was the situation?**
- Briefly describe the context (2-3 sentences)
- What challenge or opportunity did you face?

---

## Action 🔧

**What did you do?**
- Describe your specific actions
- What decisions did you make?
- What resources did you use?

---

## Reflection 💭

**What did you learn?**
- Connect to TE competencies
- What would you do differently?
- How does this relate to your SMART objectives?

---

## Evidence 🔗

**Links to evidence:**
- [ ] Screenshots
- [ ] Work samples
- [ ] Client feedback
- [ ] Team reflections
- [ ] Other documentation

---

## PebblePad Submission

**Word Count:** ___ / [target]
**Status:** [Not Submitted / Submitted / Approved]
**Submission Date:** ___
```

---

### 4. Learning Contract Progress Dashboard 📈
**Page Name:** `LC Progress Dashboard`
**Type:** Dashboard page
**Purpose:** Track progress on all 9 Learning Contract sections

#### Sections:

##### Section Status Table:
| Section | Question | Target Words | Current Version | Word Count | Status | Last Updated |
|---------|----------|--------------|-----------------|------------|--------|--------------|
| 01 | Where have I been? | 500 | v10 | 519 | ✅ Complete | 2026-01-21 |
| 02 | Competencies Developed | 6 items | v07 | 6/6 | ✅ Complete | 2026-01-21 |
| 03 | Where am I now? | 500-800 | v07 | 742 | ✅ Complete | 2026-01-21 |
| 04 | Strengths | Part of Q3 | v04 | - | ✅ Complete | 2026-01-21 |
| 05 | Challenges | Part of Q3 | v07 | - | ✅ Complete | 2026-01-21 |
| 06 | Where do I want to get to? | 300 | v07 | 328 | ✅ Complete | 2026-01-21 |
| 07 | How will I get there? | 500 | v09 | 512 | ✅ Complete | 2026-01-21 |
| 08 | Competencies Will Develop | 6 items | v08 | 6/6 | ✅ Complete | 2026-01-21 |
| 09 | Where did I get to? | 1000-1500 | v06 | 1412 | ✅ Complete | 2026-01-21 |

##### Status Legend:
- ✅ Complete - Ready for PebblePad submission
- 🔄 In Draft - Being worked on
- ⏳ Pending Review - Awaiting feedback
- 📝 Needs Revision - Feedback received, changes needed

##### Progress Summary:
- **Overall Completion:** 100% (9/9 sections complete)
- **Total Word Count:** ~5,000 words
- **Ready for PebblePad:** All sections

---

### 5. SMART Objectives Tracker 🎯
**Page Name:** `SMART Objectives Tracker`
**Type:** Database
**Purpose:** Track progress on Year 3 SMART objectives

#### Properties:
| Name | Type | Options/Notes |
|------|------|---------------|
| Objective | Title | Objective title |
| Category | Select | "Strategic" / "Operational" / "Personal" |
| Status | Status | Not Started → In Progress → Complete → Abandoned |
| Start Date | Date | When started |
| Target Date | Date | When to complete by |
| Actual Completion | Date | When actually completed |
| Progress | Number | 0-100% |
| Linked Activities | Relation | Links to Activity Log |
| Notes | Text | Updates and reflections |

#### Views:
- **All Objectives** (table view)
- **By Category** (grouped by Category)
- **By Status** (grouped by Status)
- **In Progress** (filter: Status = "In Progress")

---

## Migration Strategy

### Phase 1: Create Structure ✅
1. Create Activity Log Database under TE COURSEWORK Y3
2. Create Undertakings Database under TE COURSEWORK Y3
3. Create In Practice Template
4. Create LC Progress Dashboard
5. Create SMART Objectives Tracker

### Phase 2: Migrate Data 📥
1. Import existing Activity Log entries from markdown tables
2. Import existing Undertakings from local files
3. Import SMART Objectives from B-SMART-Objectives folder
4. Create relations between databases

### Phase 3: Update Workflow 🔄
1. Set up templates for new entries
2. Create views for different use cases
3. Set up filters and sorts
4. Test the workflow

### Phase 4: Integration 🔗
1. Link Activity Log to Learning Contract sections
2. Link Undertakings to Competency development
3. Create dashboard views for PebblePad prep
4. Set up reminders and deadlines

---

## Next Steps

Since the Notion MCP is having trouble accessing your specific page, you have two options:

### Option A: Manual Creation
1. Go to your TE COURSEWORK Y3 page in Notion
2. Create a new subpage for each database listed above
3. Set up the properties as specified
4. I can provide the exact property configurations

### Option B: Share Page with Integration
1. Click "Share" on your TE COURSEWORK Y3 page
2. Add the Notion integration to the page
3. Once shared, I can create everything through the MCP

### Option C: Create in Workspace Root
1. Create databases in your Notion workspace root
2. Move them under your TE COURSEWORK Y3 page manually
3. I can create them immediately

---

**Which option would you prefer?**

Once we proceed, I'll:
1. Create all databases with correct properties
2. Set up the In Practice template
3. Create the Progress Dashboard
4. Help migrate your existing data
5. Set up views and filters for easy access
