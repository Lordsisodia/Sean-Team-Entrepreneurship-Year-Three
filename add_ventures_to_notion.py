#!/usr/bin/env python3
"""
Add all 22 ventures to Notion Undertakings Database
Requires: pip install requests
"""

import requests
import json
from datetime import datetime

# Your Notion integration token (you'll need to add this)
NOTION_TOKEN = "YOUR_NOTION_INTEGRATION_TOKEN_HERE"
DATABASE_ID = "2f149797-be68-814e-94e0-000b31a671c3"

headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2025-09-03"
}

ventures = [
    {
        "code": "V01",
        "title": "Siso Agency (AAA) - AI Automation Agency",
        "type": "Competency",
        "competencies": ["Entrepreneurial Judgment", "Strategic Leadership"],
        "start_date": "2023-09-01",
        "notes": """Role: Founder & Lead Developer

AI automation agency providing solutions to enhance business processes. Built as primary venture focusing on AI-powered automation for businesses.

PRE-PROJECT REVIEW:
• Vision: Build AI automation agency leveraging emerging AI technologies
• Assumptions: Businesses would pay for AI automation that reduces manual work
• Market: Identified gap in AI automation services for SMBs

POST-PROJECT REVIEW:
• Achievements: Established agency as viable business, developed core competencies
• Key Learnings: AI automation market validation, vertical specialization importance
• Outcome: Agency continues as primary venture, evolved into partnership-focused model in Year 3"""
    },
    {
        "code": "V02",
        "title": "AI Influencers Project (6→100+)",
        "type": "Competency",
        "competencies": ["Entrepreneurial Judgment", "Service Design & Delivery"],
        "start_date": "2023-09-01",
        "notes": """Role: Project Lead & Developer

Scaled from 6 to 100+ AI influencers through systematic automation and content generation.

ACHIEVEMENTS:
• Scaled 6→100+ influencers
• 50% manual workload reduction through automation
• Informed Year 2 scaling strategies"""
    },
    {
        "code": "V03",
        "title": "SISO Crypto Project",
        "type": "Competency",
        "competencies": ["Financial Management", "Entrepreneurial Judgment"],
        "start_date": "2023-10-01",
        "notes": """Role: Founder & Developer

Exploration of cryptocurrency opportunities including trading algorithms and NFT projects.

KEY LEARNINGS:
• Market volatility risks
• Risk management importance
• Technical execution vs market timing"""
    },
    {
        "code": "V04",
        "title": "AI Innovators Hub - Global Community",
        "type": "Competency",
        "competencies": ["Strategic Leadership", "Professional Communication"],
        "start_date": "2024-02-01",
        "notes": """Role: Founder & Community Lead

Global community of AI developers fostering communication, collaboration, and development.

ACHIEVEMENTS:
• Established global AI developer community
• Created collaborative frameworks
• Informed Year 2-3 partnership strategies"""
    },
    {
        "code": "V05",
        "title": "Sales Course at Anglian Windows",
        "type": "Learning by Doing",
        "competencies": ["Professional Communication"],
        "start_date": "2024-02-01",
        "notes": """Role: Sales Trainee & Team Member

Completed sales course and worked on sales team.

SKILLS ACQUIRED:
• Sales techniques
• Rejection resilience
• Customer relationship management
• Applied to agency client acquisition"""
    },
    {
        "code": "V06",
        "title": "SISO: Clothing Project",
        "type": "Competency",
        "competencies": ["Entrepreneurial Judgment", "Service Design & Delivery"],
        "start_date": "2024-02-01",
        "notes": """Role: Founder

Luxury clothing brand with innovative systems to gamify businesses.

KEY LEARNINGS:
• E-commerce fundamentals
• Brand development
• Customer acquisition challenges"""
    },
    {
        "code": "V07",
        "title": "Partnership with GSM Payment Provider",
        "type": "Competency",
        "competencies": ["Strategic Leadership", "Financial Management"],
        "start_date": "2024-01-01",
        "notes": """Role: Partner & Integration Lead

Partnership with GSM payment provider focusing on digital sales integration.

KEY LEARNINGS:
• Partnership dynamics
• Mutual value creation
• Payment integration"""
    },
    {
        "code": "V08",
        "title": "AI Influencer Expansion (6→100+)",
        "type": "Learning by Doing",
        "competencies": ["Strategic Leadership", "Self-Management", "Service Design & Delivery"],
        "start_date": "2024-09-01",
        "end_date": "2025-05-01",
        "notes": """Role: Project Manager & Lead Developer

Major scaling initiative from 6 to 100+ influencers using Agile and SMART goals.

ACHIEVEMENTS:
✓ Scaled beyond 100 influencers
✓ 50% manual workload reduction
✓ Applied SMART goals, Agile, Gantt charts

FRAMEWORKS: SMART Goals, Agile, Gantt Charts, Project Management Software

SMART OBJECTIVE: Foundation for Objective #6 (100/500 Partnerships)"""
    },
    {
        "code": "V09",
        "title": "Internal Process Automation",
        "type": "Learning by Doing",
        "competencies": ["Self-Management", "Strategic Leadership"],
        "start_date": "2024-09-01",
        "end_date": "2025-05-01",
        "notes": """Role: Automation Architect

Initiative to streamline internal operations through automation.

ACHIEVEMENT: 50% manual workload reduction

KEY LEARNINGS:
• Adaptability requires patience and leadership
• Team adoption as important as technical implementation
• Rogers' Diffusion of Innovations framework"""
    },
    {
        "code": "V10",
        "title": "Strategic Networking & Partnership Development",
        "type": "Learning by Doing",
        "competencies": ["Professional Communication", "Strategic Leadership"],
        "start_date": "2024-09-01",
        "notes": """Role: Network Lead & Partnership Developer

Strategic networking initiative supporting AI Influencer expansion.

ACHIEVEMENT: Strategic partnership with prominent agency secured

FRAMEWORKS: Social Capital Theory, Principle of Reciprocity, LinkedIn Optimization

SMART OBJECTIVE: Foundation for Objective #6 (100/500 Partnerships)"""
    },
    {
        "code": "V11",
        "title": "Webinar Series & Online Meetups",
        "type": "Learning by Doing",
        "competencies": ["Professional Communication", "Strategic Leadership"],
        "start_date": "2024-10-01",
        "notes": """Role: Co-Host & Organizer

Co-hosted webinar series and organized online meetups on AI and digital marketing.

KEY LEARNINGS:
• Reciprocal value creation
• Thought leadership positioning
• Community building as networking strategy"""
    },
    {
        "code": "V12",
        "title": "Technology Stack Enhancement",
        "type": "Learning for Others",
        "competencies": ["Self-Management", "Service Design & Delivery"],
        "start_date": "2024-09-01",
        "notes": """Role: Technology Lead & Researcher

Continuous evaluation and integration of emerging AI technologies.

KEY LEARNINGS:
• Proactive learning mindset essential
• Strategic technology integration
• Team training as important as technical implementation"""
    },
    {
        "code": "V13",
        "title": "Restaurant SaaS - Automation Apps",
        "type": "Learning by Doing",
        "competencies": ["Entrepreneurial Judgment", "Service Design & Delivery"],
        "start_date": "2025-09-01",
        "end_date": "2025-11-01",
        "notes": """Role: Founder & Lead Developer
STATUS: PIVOTED

Restaurant automation systems with ordering, menu management, payment integration.

CRITICAL LEARNING: "Client feedback about their business situation is market intelligence, not just conversation."

OUTCOME:
✅ Technical execution excellent
❌ Business model flawed
🔄 Pivot to e-commerce segment

KEY INSIGHT: Restaurants lack capital, tight margins, low volume.

SMART OBJECTIVE: Informs Objective #4 - Customer segment validation"""
    },
    {
        "code": "V14",
        "title": "E-commerce SaaS - Client Delivery",
        "type": "Learning by Doing",
        "competencies": ["Service Design & Delivery", "Entrepreneurial Judgment"],
        "start_date": "2025-10-01",
        "notes": """Role: Full-Stack Developer
STATUS: SUCCESS

Pivoted to e-commerce. Delivered £1,000 project: landing page, Shopify integration, blog, mobile app.

KEY LEARNING: "Iteration is the discovery process for requirements."

ACHIEVEMENTS:
• Validated e-commerce segment
• 7-8 feedback rounds = requirements discovery
• Established repeatable delivery process

SMART OBJECTIVE: Objective #4 (£5K MRR) - Validated segment"""
    },
    {
        "code": "V15",
        "title": "Crypto SaaS - Difficult Client Experience",
        "type": "Learning by Doing",
        "competencies": ["Entrepreneurial Judgment", "Self-Management"],
        "start_date": "2025-11-01",
        "end_date": "2025-11-01",
        "notes": """Role: Developer (terminated)
STATUS: TERMINATED after 3 weeks

Took on crypto app for demanding client. Ended relationship after 3 weeks.

KEY LEARNINGS:
1. "Client selection happens before project commitment"
2. "Difficult clients consume mental energy"
3. Saying no to bad revenue creates space for ideal clients

RED FLAGS: Aggressive tone, urgency, payment delays, requirement changes

PROCESS CHANGES: Developed client qualification framework

SMART OBJECTIVE: Informs Objective #4 - Client qualification"""
    },
    {
        "code": "V16",
        "title": "BlackBox - AI Agent Framework R&D",
        "type": "Learning for Others",
        "competencies": ["Self-Management", "Service Design & Delivery", "Strategic Leadership"],
        "start_date": "2025-10-29",
        "notes": """Role: Researcher & Framework Architect

Comprehensive AI agent orchestration research. 81 videos, 21 GitHub repos, 10 white papers.

INFRASTRUCTURE BUILT:
• Core agent framework
• Skills system
• Event bus communication
• Checkpoint protocol
• MCP integration
• GitHub integration
• Project memory

KEY LEARNING: "Understanding agent orchestration fundamentals is higher ROI than adopting any single framework."

BUSINESS APPLICATION: White-label licensing, agency scaling, competitive advantage

SMART OBJECTIVE: Supports all objectives through enhanced automation"""
    },
    {
        "code": "V17",
        "title": "Partnership Scaling - 100 Partners Milestone",
        "type": "Learning by Doing",
        "competencies": ["Strategic Leadership", "Professional Communication"],
        "start_date": "2025-09-01",
        "end_date": "2026-04-01",
        "notes": """Role: Partnership Lead & Strategist
STATUS: 🎉 MILESTONE ACHIEVED

🎉 ACHIEVEMENT: 102 partnerships (exceeded 100 target!)

STRATEGY:
• Partnership program V3
• Automated outreach (60-75 conversations/week)
• Partner Slack community
• Training webinars

KEY LEARNINGS:
• Validate before scaling (100→500)
• Target agencies serving viable segments
• Community essential for retention
• Training more valuable than software

NEXT PHASE: Scaling to 500 partners by November 2026

SMART OBJECTIVE: Objective #6 (100/500 Partnerships) - MILESTONE ACHIEVED ✅"""
    },
    {
        "code": "V18",
        "title": "Strategic Priority Correction",
        "type": "Learning by Doing",
        "competencies": ["Self-Management", "Entrepreneurial Judgment"],
        "start_date": "2025-09-01",
        "end_date": "2025-11-01",
        "notes": """Role: Self-Manager & Strategic Decision-Maker

Recognized 8-week pattern of building internal tools vs. advancing SMART objectives.

KEY LEARNING: "Feeling productive ≠ being strategically effective"

INTERVENTION:
• Protected partnership hours
• Strategic alignment checks
• Opportunity cost: 20-30 partnership conversations lost

FRAMEWORKS: Opportunity cost analysis, evidence-based decision-making, pre-mortem planning

SMART OBJECTIVE: Informs Objective #1 & #3"""
    },
    {
        "code": "V19",
        "title": "Delegation to Team - Process Documentation",
        "type": "Learning by Doing",
        "competencies": ["Self-Management", "Strategic Leadership"],
        "start_date": "2025-12-01",
        "end_date": "2026-01-01",
        "notes": """Role: Manager & Process Designer

Delegation with daily tracking + fines failed after 60 days.

KEY INSIGHT: Team completed all work - tracking system failure, not performance.

KEY LEARNING: "Good systems make right behavior easy rather than punishing wrong behavior."

LEARNINGS:
• Shift from control-based to process-based leadership
• Process documentation > activity tracking
• Team capable - system was my failure

SMART OBJECTIVE: Objective #3 (Team Managing 50+) - Process documentation"""
    },
    {
        "code": "V20",
        "title": "Siso Internal - Time Blocking App",
        "type": "Learning by Doing",
        "competencies": ["Self-Management"],
        "start_date": "2025-12-01",
        "end_date": "2026-01-01",
        "notes": """Role: Product Designer & Developer

Time-blocking system to prioritize strategic work over reactive work.

PURPOSE:
• Prioritize strategic work (partnerships, delegation)
• Address technical avoidance pattern
• Create structured daily schedule

RESULTS:
• Increased partnership conversations
• Better strategic focus
• Reduced technical avoidance

KEY LEARNINGS:
• Protected time essential for strategic priorities
• System design must account for avoidance tendencies
• Flexibility required within structure

SMART OBJECTIVE: Objective #1 (Time-Blocking App) - PRIMARY DELIVERABLE"""
    },
    {
        "code": "V21",
        "title": "Team Company Leadership - Strategic Advisor",
        "type": "Competency",
        "competencies": ["Strategic Leadership", "Professional Communication"],
        "start_date": "2023-09-01",
        "notes": """Role: Strategic Advisor & Technical Lead

Provided strategic guidance and technical leadership to Team Company.

IMPACT:
• Supported team member development
• Shared strategic insights
• Contributed to team success

LEARNING: Leadership development, knowledge transfer, team dynamics"""
    },
    {
        "code": "V22",
        "title": "Training Session Workshop - AI Automation & Partnerships",
        "type": "Learning for Others",
        "competencies": ["Professional Communication", "Strategic Leadership"],
        "start_date": "2025-11-01",
        "end_date": "2025-11-01",
        "notes": """Role: Workshop Facilitator & Educator

Delivered workshop on AI automation and partnership strategies.

REQUIREMENTS MET:
✓ 12+ credible sources
✓ Primary research
✓ Interactive delivery
✓ 20-minute facilitated dialogue

LEARNING OUTCOMES:
• Team gained understanding of AI automation
• Partnership strategies shared
• Facilitation skills developed

CONNECTION: Synthesis of research (LfO-01) into educational delivery"""
    }
]

def create_page(venture):
    """Create a page in the Notion database"""
    url = "https://api.notion.com/v1/pages"

    # Build the properties
    properties = {
        "Code": {
            "title": [
                {
                    "text": {
                        "content": venture["code"]
                    }
                }
            ]
        },
        "Title": {
            "rich_text": [
                {
                    "text": {
                        "content": venture["title"]
                    }
                }
            ]
        },
        "Type": {
            "select": {
                "name": venture["type"]
            }
        },
        "Competency Focus": {
            "multi_select": [
                {"name": comp} for comp in venture["competencies"]
            ]
        },
        "Start Date": {
            "date": {
                "start": venture["start_date"]
            }
        }
    }

    # Add end date if present
    if "end_date" in venture:
        properties["End Date"] = {
            "date": {
                "start": venture["end_date"]
            }
        }

    # Add notes
    properties["Notes"] = {
        "rich_text": [
            {
                "text": {
                    "content": venture["notes"]
                }
            }
        ]
    }

    data = {
        "parent": {
            "database_id": DATABASE_ID
        },
        "properties": properties
    }

    response = requests.post(url, headers=headers, json=data)
    return response.json()

def main():
    print("🚀 Adding 22 ventures to Notion database...\n")

    for i, venture in enumerate(ventures, 1):
        print(f"[{i}/22] Adding {venture['code']}: {venture['title']}")

        try:
            result = create_page(venture)
            if "id" in result:
                print(f"  ✅ Success! Page ID: {result['id']}")
                print(f"  🔗 URL: {result['url']}\n")
            else:
                print(f"  ❌ Error: {result.get('message', 'Unknown error')}\n")
                print(f"  Details: {json.dumps(result, indent=2)}\n")
        except Exception as e:
            print(f"  ❌ Exception: {str(e)}\n")

    print("\n✨ Done! All ventures added to your Notion database.")

if __name__ == "__main__":
    main()
