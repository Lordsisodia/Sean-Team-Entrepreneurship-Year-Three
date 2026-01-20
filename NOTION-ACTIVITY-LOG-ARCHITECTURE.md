# Notion Activity Log Architecture

## Overview

A comprehensive Notion workspace to track, manage, and export activities for the PebblePad Activity Log assessment. This system ensures consistency (2 Practice + 2 Enquiry per month), competency development tracking, and evidence organization.

---

## Workspace Structure

```
📊 Activity Log Workspace
│
├── 🎯 Dashboard
│   ├── Status overview (completion tracker)
│   ├── This month's activities
│   ├── Competency coverage matrix
│   └── Quick actions
│
├── 📖 Cover Section
│   ├── Input data templates
│   └── Copy-paste friendly formats
│
├── 📋 Learning Contract
│   ├── Where Have I Been
│   ├── Competency development
│   └── Activity demonstrations
│
├── 📍 Where Am I Now
│   ├── Psychometric results
│   ├── Strengths analysis
│   └── Challenges
│
├── 🎯 Future Planning
│   ├── Where Do I Want To Go?
│   └── How Do I Get There?
│
├── 📚 Resources Hub
│   ├── Module handbooks
│   ├── Assessment criteria
│   └── Reference materials
│
└── 🗄️ Databases
    ├── Activities
    ├── Competencies
    └── Resources
```

---

## Database Schemas

### 1. Activities Database

The core database for tracking all activities.

| Property | Type | Options/Purpose |
|----------|------|-----------------|
| **Name** | Title | Activity name |
| **Date** | Date | When the activity happened |
| **Type** | Select | Practice, Enquiry |
| **Source Category** | Select | Internal, External (for Enquiry) |
| **Summary** | Text | Brief description of the activity |
| **Competency Area** | Select | Self, Team, Project |
| **Competency** | Relation | Links to Competencies DB |
| **Source Validity** | Text | For Enquiry - describe source credibility |
| **Evidence** | Files | Attach screenshots, docs, etc. |
| **Evidence Links** | URL | GitHub, docs, external links |
| **Month** | Formula | `prop("Date").formatDate("MMMM yyyy")` |
| **Status** | Select | Planned, In Progress, Done |
| **PebblePad Synced** | Checkbox | Track if entered into PebblePad |

**Views:**
- `All Activities` - Default table view
- `By Month` - Grouped by Month formula
- `Practice Only` - Filtered: Type = Practice
- `Enquiry Only` - Filtered: Type = Enquiry
- `Ready for PebblePad` - Filtered: Status = Done, PebblePad Synced = No
- `By Competency` - Grouped by Competency relation

### 2. Competencies Database

Reference database for all competencies with activity tracking.

| Property | Type | Purpose |
|----------|------|---------|
| **Name** | Title | Competency name |
| **Area** | Select | Self, Team, Project |
| **Description** | Text | What this competency means |
| **Related Activities** | Rollup | Count of linked activities |
| **Activity List** | Rollup | List of linked activity names |
| **Evidence Database** | Files | All evidence for this competency |

**Views:**
- `All Competencies` - Default table view
- `By Area` - Grouped by Area
- `With Activities` - Filtered: Related Activities > 0

### 3. Resources Database

Store and organize all reference documents.

| Property | Type | Options |
|----------|------|---------|
| **Name** | Title | Document/Resource name |
| **Type** | Select | Module Handbook, Assessment, Psychometric, Guide, Other |
| **Source** | Select | Internal, External |
| **Module** | Select | EiEaE3, EEP, MMLD, Other |
| **URL** | URL | Link to original |
| **Tags** | Multi-select | Topics for categorization |
| **Notes** | Text | Additional context |

**Views:**
- `All Resources` - Default
- `By Type` - Grouped by Type
- `By Module` - Grouped by Module

---

## Page Content Structure

### Dashboard Page

```markdown
# 🎯 Activity Log Dashboard

## Current Status

### This Month: {Month Formula}
| Practice | Enquiry | Total |
|----------|---------|-------|
| {Count} | {Count} | {Count} |

### Completion Tracker
> Goal: 2 Practice + 2 Enquiry per month

<database inline-view="Activities - This Month" />

## Quick Actions
- [ ] Add new activity
- [ ] Review pending activities
- [ ] Export to PebblePad
```

### Cover Section Page

```markdown
# 📖 Cover Section

## Input Data Templates

### Activity Header Template
```
Month: [Month]
Type: [Practice/Enquiry]
Competency Area: [Self/Team/Project]
```

### Practice Activity Template
```
Activity: [Name]
Date: [Date Range]
Competency & Area: [Competency Name] ([Area])
```

### Enquiry Activity Template
```
Activity (and validity): [Name] - [Source validity note]
Date: [Date Range]
Internal/External: [Internal/External]
Competency & Area: [Competency Name] ([Area])
```

## Usage Instructions
1. Copy relevant template
2. Fill in details
3. Paste into PebblePad
4. Link evidence from Evidence column
```

### Learning Contract Page

```markdown
# 📋 Learning Contract

## Where Have I Been

### Competencies Developed

<database inline-view="Competencies - With Activities" />

### Activity Demonstrations

Use the matrix below to find activities that demonstrate specific competencies:

| Competency Area | Key Activities | Evidence |
|-----------------|----------------|----------|
| Self | {Linked Activities} | {Links} |
| Team | {Linked Activities} | {Links} |
| Project | {Linked Activities} | {Links} |

## Related Resources
<database inline-view="Resources - Learning Contract" />
```

### Where Am I Now Page

```markdown
# 📍 Where Am I Now

## Psychometric Assessments

| Assessment | Date | Result | Notes |
|------------|------|--------|-------|
| Learning Styles | | | |
| Personality | | | |
| Strengths | | | |

## Strengths Analysis
▶ Top 5 Strengths
	1. [Strength]
	2. [Strength]
	3. [Strength]
	4. [Strength]
	5. [Strength]

## Challenges & Development Areas
▶ Areas for Growth
	- [Challenge 1]
	- [Challenge 2]

## Related Resources
<database inline-view="Resources - Psychometric" />
```

### Future Planning Page

```markdown
# 🎯 Future Planning

## Where Do I Want To Go?

### Short-term Goals (This Term)
- [ ] [Goal 1]
- [ ] [Goal 2]
- [ ] [Goal 3]

### Long-term Goals (Post-Graduation)
- [ ] [Goal 1]
- [ ] [Goal 2]

## How Do I Get There?

### Action Plan

| Goal | Required Activities | Timeline | Status |
|------|---------------------|----------|--------|
| [Goal] | [Activities] | [When] | [Status] |

### Competency Development Plan

<database inline-view="Activities - Planned" />

## Related Resources
<database inline-view="Resources - Planning" />
```

### Resources Hub Page

```markdown
# 📚 Resources Hub

## Quick Access
- [Enquiry into Enterprise & Entrepreneurship Handbook](URL)
- [Enterprising & Entrepreneurial Practice Handbook](URL)
- [Managing My Learning and Development Handbook](URL)

## All Resources
<database inline-view="Resources - All" />
```

---

## Export to PebblePad Workflow

### Process

1. **Complete Activity** → Mark Status = "Done"
2. **Add Evidence** → Upload files, add links
3. **Tag Competency** → Link to relevant competency
4. **View Export Queue** → Open "Ready for PebblePad" view
5. **Copy to PebblePad** → Use templates from Cover Section
6. **Mark Synced** → Check "PebblePad Synced"

### Export Format (PebblePad)

For each activity, the PebblePad entry should include:

**Practice:**
```
Activity: [Activity Name]
Date: [Date]
Competency & Area: [Competency] ([Area])
```

**Enquiry:**
```
Activity (and validity of source): [Name] - [Validity note]
Date: [Date]
Internal / External: [Internal/External]
Competency & Area: [Competency] ([Area])
```

---

## Implementation Checklist

### Phase 1: Database Setup
- [ ] Create Activities database with all properties
- [ ] Create Competencies database with all properties
- [ ] Create Resources database with all properties
- [ ] Set up Relation between Activities → Competencies
- [ ] Set up Rollup for Related Activities count
- [ ] Create Month formula in Activities

### Phase 2: Views & Filters
- [ ] Create filtered views (By Type, By Month, etc.)
- [ ] Create grouped views (By Competency, By Area)
- [ ] Set up "Ready for PebblePad" filtered view

### Phase 3: Page Structure
- [ ] Create main Dashboard page
- [ ] Create Cover Section page with templates
- [ ] Create Learning Contract page
- [ ] Create Where Am I Now page
- [ ] Create Future Planning page
- [ ] Create Resources Hub page

### Phase 4: Content Migration
- [ ] Migrate existing Sept-Nov activities
- [ ] Import competency list from handbooks
- [ ] Add resource links and documents

### Phase 5: Workflow Testing
- [ ] Test adding new activity
- [ ] Test competency linking
- [ ] Test PebblePad export flow
- [ ] Adjust views/filters as needed

---

## Notes

- All databases support rich content (files, links, formatting)
- Views can be filtered by any property
- Relations create bidirectional links
- Rollups aggregate related data automatically
- Can export entire database as CSV for backup
- Synced blocks can share content across pages
