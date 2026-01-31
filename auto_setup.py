#!/usr/bin/env python3
"""
Get Notion token and add all ventures automatically
"""

import os
import sys
import subprocess

print("""
╔══════════════════════════════════════════════════════════════════╗
║           🚀 Notion Ventures Database - Auto Setup               ║
║                                                              ║
║  This will add all 22 ventures to your Notion database           ║
║  Each venture will have its own page with full details           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════════╝

📋 STEPS:

1️⃣  GET YOUR NOTION TOKEN:
   • Go to: https://www.notion.so/my-integrations
   • Click "+ New integration"
   • Name it: "Ventures Importer"
   • Select your workspace
   • Click "Submit"
   • Copy the "Internal Integration Token" (starts with secret_)

2️⃣  PASTE YOUR TOKEN BELOW:
""")

# Get token from user
token = input("🔑 Paste your token here: ").strip()

if not token or not token.startswith("secret_"):
    print("\n❌ Invalid token! Token must start with 'secret_'")
    sys.exit(1)

print(f"\n✅ Token received: {token[:20]}...{token[-10:]}")

# Update the script with the token
script_path = "add_ventures_direct.py"

try:
    with open(script_path, 'r') as f:
        content = f.read()

    # Replace the token
    updated_content = content.replace(
        'NOTION_TOKEN = "YOUR_NOTION_TOKEN_HERE"',
        f'NOTION_TOKEN = "{token}"'
    )

    with open(script_path, 'w') as f:
        f.write(updated_content)

    print(f"✅ Token updated in {script_path}")

    # Ask for confirmation
    print("\n" + "="*60)
    confirm = input("✅ Ready to add all 22 ventures? (y/n): ").strip().lower()

    if confirm == 'y':
        print("\n🚀 Adding ventures to Notion...\n")

        # Run the import script
        result = subprocess.run(
            [sys.executable, script_path],
            capture_output=False,
            text=True
        )

        print("\n" + "="*60)
        print("✨ Setup complete!")
        print("="*60)
        print("\n🎉 Check your Notion 'Undertakings Database' to see all 22 ventures!")
        print("\n📖 Each venture has its own page with:")
        print("   • Full details and notes")
        print("   • Competency tags")
        print("   • Date tracking")
        print("   • SMART objective links")
        print("\n🔗 Database: TE COURSEWORK Y3 → Undertakings Database")
    else:
        print("\n❌ Setup cancelled.")

except FileNotFoundError:
    print(f"\n❌ Error: {script_path} not found!")
    print("Make sure you're in the correct directory:")
    print("  cd /Users/shaansisodia/DEV/team-entrepreneurship")
    sys.exit(1)
except Exception as e:
    print(f"\n❌ Error: {str(e)}")
    sys.exit(1)
