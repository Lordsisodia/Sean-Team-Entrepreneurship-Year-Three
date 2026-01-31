#!/usr/bin/env python3
"""
Interactive script to add all 22 ventures to your Notion database
"""

import os
import sys

def get_token():
    """Get Notion token from user input"""
    print("\n" + "="*60)
    print("🔑 Notion Integration Token Required")
    print("="*60)
    print("\nTo get your token:")
    print("1. Go to: https://www.notion.so/my-integrations")
    print("2. Click '+ New integration'")
    print("3. Name it 'Ventures Importer'")
    print("4. Select your workspace")
    print("5. Click 'Submit'")
    print("6. Copy the 'Internal Integration Token' (starts with 'secret_')")
    print("\n" + "="*60)

    token = input("\n📝 Paste your token here: ").strip()

    if not token or not token.startswith("secret_"):
        print("\n❌ Invalid token! Token should start with 'secret_'")
        return None

    return token

def update_script_with_token(token):
    """Update the Python script with the token"""
    script_path = "add_ventures_to_notion.py"

    # Read the script
    try:
        with open(script_path, 'r') as f:
            content = f.read()

        # Replace the token placeholder
        updated_content = content.replace(
            'NOTION_TOKEN = "YOUR_NOTION_INTEGRATION_TOKEN_HERE"',
            f'NOTION_TOKEN = "{token}"'
        )

        # Write back
        with open(script_path, 'w') as f:
            f.write(updated_content)

        print(f"\n✅ Token added to {script_path}")
        return True

    except FileNotFoundError:
        print(f"\n❌ Error: {script_path} not found!")
        print("Make sure you're in the correct directory:")
        print("  cd /Users/shaansisodia/DEV/team-entrepreneurship")
        return False
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        return False

def run_import():
    """Run the import script"""
    print("\n" + "="*60)
    print("🚀 Adding all 22 ventures to Notion...")
    print("="*60 + "\n")

    # Run the import script
    try:
        import subprocess
        result = subprocess.run(
            [sys.executable, "add_ventures_to_notion.py"],
            capture_output=False,
            text=True
        )
        return result.returncode == 0
    except Exception as e:
        print(f"\n❌ Error running script: {str(e)}")
        return False

def main():
    print("\n🎯 Notion Ventures Database Setup")
    print("="*60)
    print("\nThis will add all 22 ventures to your Notion Undertakings Database")
    print("\n📁 Database ID: 2f149797-be68-814e-94e0-000b31a671c3")
    print("📊 Total ventures: 22")

    # Get token
    token = get_token()
    if not token:
        print("\n❌ Setup cancelled. Please try again with a valid token.")
        return

    # Update script with token
    if not update_script_with_token(token):
        return

    # Ask for confirmation
    print("\n" + "="*60)
    confirm = input("✅ Ready to add all 22 ventures? (y/n): ").strip().lower()

    if confirm == 'y':
        success = run_import()

        if success:
            print("\n" + "="*60)
            print("✨ Setup complete!")
            print("="*60)
            print("\n🎉 All 22 ventures added to your Notion database!")
            print("\n📖 Next steps:")
            print("   1. Open Notion")
            print("   2. Go to 'TE COURSEWORK Y3'")
            print("   3. Open 'Undertakings Database'")
            print("   4. See all your ventures with individual pages!")
        else:
            print("\n❌ Some errors occurred. Please check the output above.")
    else:
        print("\n❌ Setup cancelled.")

if __name__ == "__main__":
    main()
