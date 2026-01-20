# Word Count Standards

**Learning Contract - MLAD3 Portfolio**
**Source:** Module Handbook + Official Marking Criteria

---

## Overview

The Learning Contract has a total indicative word count of approximately **3,500 words** for Q1-Q4, plus **1,000-1,500 words** for Q5 (Final Analysis, due April 2026).

---

## Section Word Counts

| # | Section | Minimum | Maximum | Target | Notes |
|---|---------|---------|---------|--------|-------|
| 01 | Where Have I Been | 450 | 550 | 500 | Year Two reflection |
| 02 | Competencies Developed | N/A | N/A | ~100-150 per competency | 6 competencies total |
| 03 | Where Am I Now | 500 | 800 | 650 | Psychometric integration |
| 04 | Strengths | N/A | N/A | Part of Q3 | Included in Q3 word count |
| 05 | Challenges | N/A | N/A | Part of Q3 | Included in Q3 word count |
| 06 | Where Do I Want To Get To | 250 | 350 | 300 | Exit strategy |
| 07 | How Will I Get There | 450 | 550 | 500 | Implementation plan |
| 08 | Competencies Will Develop | N/A | N/A | ~50-100 per competency | 6 competencies total |
| 09 | Where Did I Get To | 1000 | 1500 | 1250 | Final analysis (April 2026) |

**Total Q1-Q4:** ~2,000-2,200 words
**Total Q5:** ~1,250 words (average)

---

## Word Count Tolerance

### Acceptable Range
- **Target ±10%** is the safe zone
- **Target ±15%** is acceptable with justification
- **Beyond ±15%** requires significant revision

### Examples
| Section | Target | Safe Zone | Acceptable |
|---------|--------|-----------|------------|
| Where Have I Been | 500 | 450-550 | 425-575 |
| Where Am I Now | 650 | 585-715 | 553-748 |
| Where Do I Want To Get To | 300 | 270-330 | 255-345 |
| How Will I Get There | 500 | 450-550 | 425-575 |

---

## What Counts as a Word

### Included
- All words in the main text
- Headings and subheadings
- In-text citations (e.g., "Hersey, 1969")
- Competency descriptions

### Excluded
- Reference lists/bibliographies
- Diagram captions (unless substantial)
- Tables (word count applies to text only)

---

## How to Count Word Count

### Method 1: Word Processor
1. Copy text from Markdown file
2. Paste into Word/Google Docs
3. Use built-in word count tool

### Method 2: Online Tool
1. Use [WordCounter.net](https://wordcounter.net) or similar
2. Paste text
3. Verify against multiple tools for accuracy

### Method 3: Command Line (Mac/Linux)
```bash
wc -w filename.md
```

### Method 4: VS Code Extension
Install "Word Count" extension for real-time tracking

---

## Word Count Verification Workflow

For each section version:

1. **Draft** - Write content without worrying about word count
2. **Check** - Count words using preferred method
3. **Compare** - Check against target range
4. **Adjust** - If outside tolerance:
   - **Over:** Cut non-essential content, tighten language
   - **Under:** Add specific examples, deepen analysis
5. **Document** - Update `metadata.json` with actual word count
6. **Verify** - Recount before marking as complete

---

## Common Word Count Issues

### Too Long (> Maximum)
**Symptoms:**
- Repetitive points
- Over-explaining simple concepts
- Long quotations
- Excessive background information

**Solutions:**
- Cut redundant sentences
- Combine related points
- Paraphrase rather than quote
- Remove unnecessary context

### Too Short (< Minimum)
**Symptoms:**
- Superficial coverage
- Missing examples
- Unsubstantiated claims
- Gaps in analysis

**Solutions:**
- Add specific examples from experience
- Deepen critical evaluation
- Connect to theory/frameworks
- Provide evidence for claims

---

## Section-Specific Guidance

### Q1: Where Have I Been (500 words)
**Focus:** Year Two experiences, key learnings, patterns

**If under 450:**
- Add specific examples from Year Two ventures
- Expand on key learnings with concrete outcomes
- Detail the "how" and "why" of your reflections

**If over 550:**
- Cut chronological narrative ("then I did this...")
- Remove background context that doesn't add analysis
- Consolidate similar points

### Q2: Where Am I Now (500-800 words)
**Focus:** Psychometric profile, strengths, weaknesses, current state

**If under 500:**
- Expand on each psychometric assessment result
- Connect results to specific behaviors/experiences
- Add examples showing how traits manifest in your work

**If over 800:**
- Summarize assessment descriptions (focus on application)
- Cut generic psychometric definitions
- Consolidate similar trait descriptions

### Q3: Where Do I Want To Get To (300 words)
**Focus:** Clear exit strategy, specific goals

**If under 250:**
- Add specific milestones within exit strategy
- Detail what "success" looks like
- Connect goals to market context

**If over 350:**
- Focus on the what, not the how (that's Q4)
- Cut justifications for goals (Q4 should cover this)
- Remove detailed action steps

### Q4: How Will I Get There (500 words)
**Focus:** 6 competencies, current/target levels, specific actions

**If under 450:**
- Add specific action steps for each competency
- Detail resources/activities for development
- Expand on timelines and milestones

**If over 550:**
- Summarize competency descriptions
- Consolidate similar action steps
- Focus on highest-impact activities

### Q5: Where Did I Get To (1000-1500 words)
**Focus:** In-depth evaluation, habits, behaviors, accountability

**If under 1000:**
- Expand on key learnings with specific examples
- Deepen analysis of plans vs reality
- Add reflection on unexpected outcomes

**If over 1500:**
- Focus on most significant learnings
- Cut chronological narrative
- Remove unnecessary description

---

## Metadata Documentation

Each version's `metadata.json` must include:

```json
{
  "word_count": {
    "target": 500,
    "actual": 487,
    "within_tolerance": true,
    "count_method": "word-processor",
    "count_date": "2026-01-20"
  }
}
```

---

## Quick Reference

### Safe Zone Calculator
```
Lower Bound = Target × 0.90
Upper Bound = Target × 1.10
```

### Example:
- Target: 500 words
- Lower: 500 × 0.90 = 450
- Upper: 500 × 1.10 = 550
- **Safe Zone:** 450-550 words

---

*Last updated: January 20, 2026*
