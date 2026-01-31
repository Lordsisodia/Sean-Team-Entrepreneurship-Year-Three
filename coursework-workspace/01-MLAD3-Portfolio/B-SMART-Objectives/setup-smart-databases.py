#!/usr/bin/env python3
"""
SMART Objectives - Notion Database Setup Script

This script creates the databases and initial structure for tracking
the 6 SMART objectives in Notion.

Requirements:
- NOTION_TOKEN environment variable set
- Notion integration shared with parent page
- httpx library installed

Usage:
    python setup-smart-databases.py
"""

import asyncio
import os
import sys
from pathlib import Path

# Add the Notion integration to the path
notion_path = Path(__file__).parent.parent.parent / "F-Undertakings" / "LfO-Undertakings" / "LfO-01-BlackBox-Research" / "BLACKBOX-REPO" / "2-engine" / "06-integrations" / "notion"
sys.path.insert(0, str(notion_path))

from manager import NotionManager

# Configuration
SMART_OBJECTIVES_PAGE_ID = "2edb892f41618168bbfae35f2c6408e9"


async def create_smart_objectives_database(manager: NotionManager, parent_id: str):
    """Create the main SMART Objectives database."""

    properties = {
        "Name": {"title": {}},
        "Number": {
            "number": {"format": "number"}
        },
        "Type": {
            "select": {
                "options": [
                    {"name": "Self-development", "color": "blue"},
                    {"name": "Team-development", "color": "green"},
                    {"name": "Project-development", "color": "orange"}
                ]
            }
        },
        "Progress": {
            "number": {"format": "percent"}
        },
        "Status": {
            "select": {
                "options": [
                    {"name": "Not Started", "color": "gray"},
                    {"name": "In Progress", "color": "blue"},
                    {"name": "On Track", "color": "green"},
                    {"name": "At Risk", "color": "orange"},
                    {"name": "Complete", "color": "green"},
                    {"name": "Blocked", "color": "red"}
                ]
            }
        },
        "Competency": {
            "multi_select": {
                "options": [
                    {"name": "Self-Management", "color": "blue"},
                    {"name": "Strategic Leadership", "color": "purple"},
                    {"name": "Service Design & Delivery", "color": "green"},
                    {"name": "Innovation Management", "color": "orange"},
                    {"name": "Financial Management", "color": "yellow"},
                    {"name": "Entrepreneurial Judgment", "color": "red"}
                ]
            }
        },
        "Target Date": {
            "date": {}
        },
        "Start Date": {
            "date": {}
        },
        "Priority": {
            "select": {
                "options": [
                    {"name": "Critical", "color": "red"},
                    {"name": "High", "color": "orange"},
                    {"name": "Medium", "color": "yellow"},
                    {"name": "Low", "color": "gray"}
                ]
            }
        },
        "Last Review": {
            "date": {}
        },
        "Next Review": {
            "date": {}
        }
    }

    database = await manager.create_database(
        parent_id=parent_id,
        title="SMART Objectives - Year 3",
        properties=properties,
        description="Track 6 SMART objectives for MLAD3 Portfolio with progress, milestones, and evidence",
        icon="🎯"
    )

    return database


async def create_change_log_database(manager: NotionManager, parent_id: str):
    """Create the Change Log database."""

    properties = {
        "Date": {
            "date": {}
        },
        "Change Type": {
            "select": {
                "options": [
                    {"name": "Major", "color": "red"},
                    {"name": "Minor", "color": "yellow"},
                    {"name": "Correction", "color": "orange"}
                ]
            }
        },
        "Description": {
            "rich_text": {}
        },
        "Rationale": {
            "rich_text": {}
        },
        "Impact": {
            "select": {
                "options": [
                    {"name": "High", "color": "red"},
                    {"name": "Medium", "color": "yellow"},
                    {"name": "Low", "color": "gray"}
                ]
            }
        },
        "Author": {
            "rich_text": {}
        }
    }

    database = await manager.create_database(
        parent_id=parent_id,
        title="Change Log",
        properties=properties,
        description="Track all changes to SMART objectives with rationales",
        icon="📝"
    )

    return database


async def create_feedback_database(manager: NotionManager, parent_id: str):
    """Create the Feedback database."""

    properties = {
        "Date": {
            "date": {}
        },
        "Reviewer": {
            "rich_text": {}
        },
        "Review Type": {
            "select": {
                "options": [
                    {"name": "Team Review 1", "color": "blue"},
                    {"name": "Team Review 2", "color": "purple"},
                    {"name": "Team Review 3", "color": "pink"},
                    {"name": "AI Feedback", "color": "gray"},
                    {"name": "Other", "color": "default"}
                ]
            }
        },
        "Feedback": {
            "rich_text": {}
        },
        "Response": {
            "rich_text": {}
        },
        "Status": {
            "select": {
                "options": [
                    {"name": "New", "color": "blue"},
                    {"name": "In Progress", "color": "yellow"},
                    {"name": "Addressed", "color": "green"}
                ]
            }
        },
        "Rating": {
            "select": {
                "options": [
                    {"name": "Positive", "color": "green"},
                    {"name": "Constructive", "color": "yellow"},
                    {"name": "Critical", "color": "red"}
                ]
            }
        }
    }

    database = await manager.create_database(
        parent_id=parent_id,
        title="Feedback Hub",
        properties=properties,
        description="Track all feedback from team reviews and AI analysis",
        icon="💬"
    )

    return database


async def populate_initial_objectives(manager: NotionManager, database_id: str):
    """Populate the database with the 6 initial objectives."""

    objectives = [
        {
            "Number": 1,
            "Name": "Objective 1: Time-Blocking App MVP Launch (70 Focused Hours/Week)",
            "Type": "Self-development",
            "Progress": 40,
            "Status": "On Track",
            "Competency": ["Self-Management"],
            "Target Date": "2025-11-30",
            "Priority": "High"
        },
        {
            "Number": 2,
            "Name": "Objective 2: Cannabis-Free Lifestyle & 50+ Focused Hours/Week",
            "Type": "Self-development",
            "Progress": 15,
            "Status": "On Track",
            "Competency": ["Self-Management"],
            "Target Date": "2026-04-30",
            "Priority": "High"
        },
        {
            "Number": 3,
            "Name": "Objective 3: Sam Content Production & 100 Partnership Leads",
            "Type": "Team-development",
            "Progress": 10,
            "Status": "At Risk",
            "Competency": ["Strategic Leadership"],
            "Target Date": "2026-02-28",
            "Priority": "Medium"
        },
        {
            "Number": 4,
            "Name": "Objective 4: Partnership Outreach Automation System (6 Partnerships/Week)",
            "Type": "Project-development",
            "Progress": 8,
            "Status": "Not Started",
            "Competency": ["Service Design & Delivery", "Innovation Management"],
            "Target Date": "2026-02-28",
            "Priority": "Medium"
        },
        {
            "Number": 5,
            "Name": "Objective 5: Client App MVP & 100% Satisfaction (5-10 Test Clients)",
            "Type": "Project-development",
            "Progress": 40,
            "Status": "On Track",
            "Competency": ["Innovation Management", "Service Design & Delivery"],
            "Target Date": "2025-11-30",
            "Priority": "High"
        },
        {
            "Number": 6,
            "Name": "Objective 6: Partnership App + 100 Agencies + £50K Monthly Revenue",
            "Type": "Project-development",
            "Progress": 5,
            "Status": "At Risk",
            "Competency": ["Service Design & Delivery", "Financial Management", "Entrepreneurial Judgment"],
            "Target Date": "2026-04-30",
            "Priority": "Critical"
        }
    ]

    created_pages = []

    for obj in objectives:
        # Convert percentage to decimal
        progress_decimal = obj["Progress"] / 100

        properties = {
            "Name": {
                "title": [
                    {"type": "text", "text": {"content": obj["Name"]}}
                ]
            },
            "Number": {"number": obj["Number"]},
            "Type": {"select": {"name": obj["Type"]}},
            "Progress": {"number": progress_decimal},
            "Status": {"select": {"name": obj["Status"]}},
            "Competency": {"multi_select": [{"name": c} for c in obj["Competency"]]},
            "Target Date": {"date": {"start": obj["Target Date"]}},
            "Priority": {"select": {"name": obj["Priority"]}}
        }

        page = await manager.create_page(
            parent_id=database_id,
            properties=properties,
            icon="🎯"
        )

        created_pages.append(page)
        print(f"Created: {obj['Name']}")

    return created_pages


async def main():
    """Main setup function."""

    # Check for token
    token = os.environ.get("NOTION_TOKEN")
    if not token:
        print("Error: NOTION_TOKEN environment variable not set")
        print("\nTo set it:")
        print("  export NOTION_TOKEN='your_token_here'")
        sys.exit(1)

    print("🎯 SMART Objectives - Notion Database Setup")
    print("=" * 50)

    async with NotionManager() as manager:
        # Verify connection
        if not await manager.check_connection():
            print("Error: Could not connect to Notion API")
            print("Please verify your NOTION_TOKEN is correct")
            sys.exit(1)

        print("✅ Connected to Notion API\n")

        # Check if parent page is accessible
        parent_page = await manager.get_page(SMART_OBJECTIVES_PAGE_ID)
        if not parent_page:
            print(f"Error: Could not access SMART Objectives page")
            print(f"Please ensure the integration is shared with the page:")
            print(f"  https://www.notion.so/{SMART_OBJECTIVES_PAGE_ID.replace('-', '')}")
            sys.exit(1)

        print(f"✅ Parent page accessible: {parent_page.title}\n")

        # Create databases
        print("Creating databases...")

        print("\n1. Creating SMART Objectives database...")
        objectives_db = await create_smart_objectives_database(manager, SMART_OBJECTIVES_PAGE_ID)
        print(f"   ✅ Created: {objectives_db.url}")

        print("\n2. Creating Change Log database...")
        change_log_db = await create_change_log_database(manager, SMART_OBJECTIVES_PAGE_ID)
        print(f"   ✅ Created: {change_log_db.url}")

        print("\n3. Creating Feedback database...")
        feedback_db = await create_feedback_database(manager, SMART_OBJECTIVES_PAGE_ID)
        print(f"   ✅ Created: {feedback_db.url}")

        # Populate objectives
        print("\n4. Populating initial objectives...")
        pages = await populate_initial_objectives(manager, objectives_db.id)
        print(f"   ✅ Created {len(pages)} objective records")

        print("\n" + "=" * 50)
        print("✅ Setup complete!")
        print("\nNext steps:")
        print("  1. Review the created databases in Notion")
        print("  2. Create individual pages for each objective")
        print("  3. Add relations between databases")
        print("  4. Populate detailed content for each objective")
        print("\nDatabase URLs:")
        print(f"  Objectives: {objectives_db.url}")
        print(f"  Change Log: {change_log_db.url}")
        print(f"  Feedback:   {feedback_db.url}")


if __name__ == "__main__":
    asyncio.run(main())
