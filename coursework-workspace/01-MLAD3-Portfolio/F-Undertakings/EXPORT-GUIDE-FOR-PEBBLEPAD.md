# Export Guide for PebblePad Submission

**Created:** January 21, 2026
**Purpose:** Export all 12 undertakings for PebblePad upload

---

## METHOD 1: Copy Individual Files (Recommended)

Each undertaking is a separate Markdown file. To copy any file:

### Option A: Read file in terminal
```bash
cat coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-01-Strategic-Priority-Correction.md
```

Then copy the output directly into PebblePad.

### Option B: Open in text editor
```bash
open coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-01-Strategic-Priority-Correction.md
```

This opens the file in your default text editor - then copy/paste into PebblePad.

---

## METHOD 2: Copy All at Once (For ChatGPT/Claude Formatting)

If you want to paste all 12 files into an AI (like ChatGPT, Claude, Grok) to format them nicely, use these commands:

### Step 1: Combine all LbD files into one
```bash
cat coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-*.md > ALL-LBD-UNDERTAKINGS.md
```

### Step 2: Combine all LfO files into one
```bash
cat coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-*.md > ALL-LFO-UNDERTAKINGS.md
```

### Step 3: View the combined files
```bash
open ALL-LBD-UNDERTAKINGS.md
open ALL-LFO-UNDERTAKINGS.md
```

Then copy the content and paste into ChatGPT/Claude/Grok with this prompt:

```
Please format these undertakings nicely for submission. Keep all the content including headings, bold text, and links. Just clean up the formatting to make it professional and ready to copy into PebblePad.
```

---

## METHOD 3: Quick File List (Copy These Paths)

### LbD Files (6 files)
```
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-01-Strategic-Priority-Correction.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-02-Cannabis-Free-Habit-Implementation.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-03-Architecture-Reorganization.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-04-Ecommerce-Client-Iterative-Learning.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-05-Financial-Dashboard.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/LbD-06-Time-Blocking-Implementation.md
```

### LfO Files (6 files)
```
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-01-AI-Automation-Industry-Research.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-02-Partnership-Development-Strategies.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-03-Leadership-Automation-Frameworks.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-04-Strategic-Communication-Influence.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-05-Financial-Thinking-Business-Models.md
coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-06-Productivity-Time-Management.md
```

---

## METHOD 4: Use This Prompt for AI Formatting

When you paste the content into ChatGPT, Claude, or Grok, use this prompt:

```
I need to submit these 12 undertakings (6 LbD and 6 LfO) to PebblePad for my university portfolio.

Please:
1. Keep all content exactly as is - don't change any text
2. Fix any formatting issues (spacing, headings, bold text)
3. Ensure links/URLs are properly formatted
4. Make it look professional and submission-ready
5. Return each undertaking separately so I can copy them one at a time into PebblePad

The undertakings are below:
[PASTE CONTENT HERE]
```

---

## PEBBLEPAD SUBMISSION TIPS

1. **Submit each undertaking separately** - PebblePad works best with individual assets

2. **Use the "Asset" type** - Create each undertaking as a new Asset in PebblePad

3. **Keep the formatting** - Bold headings, bullet points, and links should all be preserved

4. **Double-check links** - All theory sources have URLs that should be clickable

5. **Word counts** - Each undertaking shows its word count at the top

---

## QUICK START: Fastest Method

1. Run this command to open all 12 files:
```bash
open coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/*.md coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/*.md
```

2. Each file opens in your text editor - copy the content

3. Paste directly into PebblePad (or into ChatGPT first for formatting)

4. Repeat for all 12 files

---

## FILE LOCATIONS

**Full Directory Paths:**
- LbD: `/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LbD-Undertakings/`
- LfO: `/Users/shaansisodia/DEV/team-entrepreneurship/coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/`

---

## CHECKLIST BEFORE SUBMISSION

- [ ] All 12 undertakings copied
- [ ] Formatting looks correct
- [ ] All links/URLs are present
- [ ] Word counts are visible
- [ ] Headings and bold text preserved
- [ ] No content was accidentally deleted

---

**Need help?** The files are already formatted correctly in Markdown. You can copy them directly into PebblePad without using an AI - the Markdown format should paste cleanly.
