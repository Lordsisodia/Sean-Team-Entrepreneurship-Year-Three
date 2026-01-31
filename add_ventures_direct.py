#!/usr/bin/env python3
"""
Add all 22 ventures to Notion using direct API calls
"""

import requests
import json
import sys

# You'll need to add your token
# Get it from: https://www.notion.so/my-integrations
NOTION_TOKEN = "YOUR_NOTION_TOKEN_HERE"  # Replace with your actual token
DATABASE_ID = "2f149797-be68-814e-94e0-000b31a671c3"

def add_venture_to_notion(venture):
    """Add a single venture to Notion"""
    url = "https://api.notion.com/v1/pages"

    headers = {
        "Authorization": f"Bearer {NOTION_TOKEN}",
        "Content-Type": "application/json",
        "Notion-Version": "2025-09-03"
    }

    # Build properties
    properties = {
        "Code": {
            "title": [{"text": {"content": venture["code"]}}]
        },
        "Title": {
            "rich_text": [{"text": {"content": venture["title"]}}]
        },
        "Type": {
            "select": {"name": venture["type"]}
        },
        "Competency Focus": {
            "multi_select": [{"name": comp} for comp in venture["competencies"]]
        },
        "Start Date": {
            "date": {"start": venture["start_date"]}
        }
    }

    # Add end date if present
    if venture.get("end_date"):
        properties["End Date"] = {
            "date": {"start": venture["end_date"]}
        }

    # Add notes
    properties["Notes"] = {
        "rich_text": [{"text": {"content": venture["notes"]}}]
    }

    data = {
        "parent": {"database_id": DATABASE_ID},
        "properties": properties
    }

    try:
        response = requests.post(url, headers=headers, json=data)

        if response.status_code == 200:
            result = response.json()
            print(f"✅ {venture['code']}: {venture['title']}")
            print(f"   URL: {result.get('url', 'N/A')}")
            return True
        else:
            print(f"❌ {venture['code']}: Error {response.status_code}")
            print(f"   {response.text}")
            return False
    except Exception as e:
        print(f"❌ {venture['code']}: Exception - {str(e)}")
        return False

# All 22 ventures
ventures = [
    {
        "code": "V01",
        "title": "Siso Agency (AAA) - AI Automation Agency",
        "type": "Competency",
        "competencies": ["Entrepreneurial Judgment", "Strategic Leadership"],
        "start_date": "2023-09-01",
        "notes": "Role: Founder & Lead Developer\n\nAI automation agency providing solutions to enhance business processes."
    },
    {
        "code": "V02",
        "title": "AI Influencers Project (6→100+)",
        "type": "Competency",
        "competencies": ["Entrepreneurial Judgment", "Service Design & Delivery"],
        "start_date": "2023-09-01",
        "notes": "Role: Project Lead & Developer\n\nScaled from 6 to 100+ AI influencers. 50% workload reduction."
    },
    {
        "code": "V03",
        "title": "SISO Crypto Project",
        "type": "Competency",
        "competencies": ["Financial Management", "Entrepreneurial Judgment"],
        "start_date": "2023-10-01",
        "notes": "Role: Founder & Developer\n\nCryptocurrency trading and NFT projects."
    },
    {
        "code": "V04",
        "title": "AI Innovators Hub - Global Community",
        "type": "Competency",
        "competencies": ["Strategic Leadership", "Professional Communication"],
        "start_date": "2024-02-01",
        "notes": "Role: Founder & Community Lead\n\nGlobal AI developer community."
    },
    {
        "code": "V05",
        "title": "Sales Course at Anglian Windows",
        "type": "Learning by Doing",
        "competencies": ["Professional Communication"],
        "start_date": "2024-02-01",
        "notes": "Role: Sales Trainee & Team Member\n\nGained practical sales experience."
    },
    {
        "code": "V06",
        "title": "SISO: Clothing Project",
        "type": "Competency",
        "competencies": ["Entrepreneurial Judgment", "Service Design & Delivery"],
        "start_date": "2024-02-01",
        "notes": "Role: Founder\n\nLuxury clothing brand with gamification."
    },
    {
        "code": "V07",
        "title": "Partnership with GSM Payment Provider",
        "type": "Competency",
        "competencies": ["Strategic Leadership", "Financial Management"],
        "start_date": "2024-01-01",
        "notes": "Role: Partner & Integration Lead\n\nPayment provider partnership."
    },
    {
        "code": "V08",
        "title": "AI Influencer Expansion (6→100+)",
        "type": "Learning by Doing",
        "competencies": ["Strategic Leadership", "Self-Management", "Service Design & Delivery"],
        "start_date": "2024-09-01",
        "end_date": "2025-05-01",
        "notes": "Role: Project Manager\n\nScaled to 100+ influencers using Agile & SMART goals.\n\nSMART OBJECTIVE: Foundation for Objective #6"
    },
    {
        "code": "V09",
        "title": "Internal Process Automation",
        "type": "Learning by Doing",
        "competencies": ["Self-Management", "Strategic Leadership"],
        "start_date": "2024-09-01",
        "end_date": "2025-05-01",
        "notes": "Role: Automation Architect\n\n50% manual workload reduction achieved."
    },
    {
        "code": "V10",
        "title": "Strategic Networking & Partnership Development",
        "type": "Learning by Doing",
        "competencies": ["Professional Communication", "Strategic Leadership"],
        "start_date": "2024-09-01",
        "notes": "Role: Network Lead\n\nStrategic partnership with agency secured."
    },
    {
        "code": "V11",
        "title": "Webinar Series & Online Meetups",
        "type": "Learning by Doing",
        "competencies": ["Professional Communication", "Strategic Leadership"],
        "start_date": "2024-10-01",
        "notes": "Role: Co-Host & Organizer\n\nAI and digital marketing webinars."
    },
    {
        "code": "V12",
        "title": "Technology Stack Enhancement",
        "type": "Learning for Others",
        "competencies": ["Self-Management", "Service Design & Delivery"],
        "start_date": "2024-09-01",
        "notes": "Role: Technology Lead\n\nEmerging AI technology integration."
    },
    {
        "code": "V13",
        "title": "Restaurant SaaS - Automation Apps",
        "type": "Learning by Doing",
        "competencies": ["Entrepreneurial Judgment", "Service Design & Delivery"],
        "start_date": "2025-09-01",
        "end_date": "2025-11-01",
        "notes": "Role: Founder & Lead Developer\nSTATUS: PIVOTED\n\nTechnical success, strategic pivot to e-commerce."
    },
    {
        "code": "V14",
        "title": "E-commerce SaaS - Client Delivery",
        "type": "Learning by Doing",
        "competencies": ["Service Design & Delivery", "Entrepreneurial Judgment"],
        "start_date": "2025-10-01",
        "notes": "Role: Full-Stack Developer\n\nSTATUS: SUCCESS\n\n£1,000 project delivered. Validated e-commerce segment."
    },
    {
        "code": "V15",
        "title": "Crypto SaaS - Difficult Client",
        "type": "Learning by Doing",
        "competencies": ["Entrepreneurial Judgment", "Self-Management"],
        "start_date": "2025-11-01",
        "end_date": "2025-11-01",
        "notes": "Role: Developer\n\nSTATUS: TERMINATED after 3 weeks\n\nClient qualification framework developed."
    },
    {
        "code": "V16",
        "title": "BlackBox - AI Agent Framework R&D",
        "type": "Learning for Others",
        "competencies": ["Self-Management", "Service Design & Delivery", "Strategic Leadership"],
        "start_date": "2025-10-29",
        "notes": "Role: Researcher & Framework Architect\n\n81 videos, 21 repos, 10 papers analyzed."
    },
    {
        "code": "V17",
        "title": "Partnership Scaling - 100 Partners!",
        "type": "Learning by Doing",
        "competencies": ["Strategic Leadership", "Professional Communication"],
        "start_date": "2025-09-01",
        "end_date": "2026-04-01",
        "notes": "Role: Partnership Lead\n\nSTATUS: MILESTONE ACHIEVED\n\n102 partnerships! Objective #6 complete."
    },
    {
        "code": "V18",
        "title": "Strategic Priority Correction",
        "type": "Learning by Doing",
        "competencies": ["Self-Management", "Entrepreneurial Judgment"],
        "start_date": "2025-09-01",
        "end_date": "2025-11-01",
        "notes": "Role: Self-Manager\n\nCorrected 8-week pattern of technical avoidance."
    },
    {
        "code": "V19",
        "title": "Delegation to Team - Process Documentation",
        "type": "Learning by Doing",
        "competencies": ["Self-Management", "Strategic Leadership"],
        "start_date": "2025-12-01",
        "end_date": "2026-01-01",
        "notes": "Role: Manager\n\nTracking system failed. Learned process-based leadership."
    },
    {
        "code": "V20",
        "title": "Siso Internal - Time Blocking App",
        "type": "Learning by Doing",
        "competencies": ["Self-Management"],
        "start_date": "2025-12-01",
        "end_date": "2026-01-01",
        "notes": "Role: Product Designer\n\nTime-blocking system for strategic priorities.\n\nSMART OBJECTIVE: Objective #1 PRIMARY DELIVERABLE"
    },
    {
        "code": "V21",
        "title": "Team Company Leadership - Strategic Advisor",
        "type": "Competency",
        "competencies": ["Strategic Leadership", "Professional Communication"],
        "start_date": "2023-09-01",
        "notes": "Role: Strategic Advisor & Technical Lead\n\nGuided Team Company."
    },
    {
        "code": "V22",
        "title": "Training Session Workshop",
        "type": "Learning for Others",
        "competencies": ["Professional Communication", "Strategic Leadership"],
        "start_date": "2025-11-01",
        "end_date": "2025-11-01",
        "notes": "Role: Workshop Facilitator\n\nDelivered workshop with 12+ sources."
    }
]

def main():
    print("🚀 Adding 22 ventures to Notion...\n")

    if NOTION_TOKEN == "YOUR_NOTION_TOKEN_HERE":
        print("❌ Please add your Notion token first!")
        print("\n1. Go to: https://www.notion.so/my-integrations")
        print("2. Create integration and copy your token")
        print("3. Update NOTION_TOKEN in this script")
        print("4. Run the script again")
        return

    print(f"📁 Database ID: {DATABASE_ID}")
    print(f"📊 Total ventures: {len(ventures)}\n")

    success_count = 0
    for venture in ventures:
        if add_venture_to_notion(venture):
            success_count += 1

    print(f"\n✨ Complete! Added {success_count}/{len(ventures)} ventures to Notion")

if __name__ == "__main__":
    main()
