#!/bin/bash

# Notion Ventures Database Setup Script
# Add all 22 ventures to your Undertakings Database

echo "🚀 Notion Ventures Database Setup"
echo "================================"
echo ""
echo "To add all 22 ventures to your Notion database, you'll need:"
echo ""
echo "1. Your Notion Integration Token"
echo "   - Go to https://www.notion.so/my-integrations"
echo "   - Create a new integration or use existing one"
echo "   - Copy the 'Internal Integration Token'"
echo ""
echo "2. Run the Python script:"
echo "   python3 add_ventures_to_notion.py"
echo ""
echo "3. Add your token to the script when prompted"
echo ""
echo "================================"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 is installed"

    # Check if requests is installed
    if python3 -c "import requests" 2>/dev/null; then
        echo "✅ requests library is installed"
        echo ""
        echo "📝 Ready to run! Execute:"
        echo "   python3 add_ventures_to_notion.py"
    else
        echo "❌ requests library not found"
        echo ""
        echo "Install it with:"
        echo "   pip3 install requests"
    fi
else
    echo "❌ Python 3 not found"
    echo "Please install Python 3 to continue"
fi

echo ""
echo "================================"
echo "📖 Or add manually:"
echo "   Open NOTION-DATABASE-INDIVIDUAL-PAGES-GUIDE.md"
echo "   Copy each venture's data"
echo "   Paste into your Undertakings Database"
echo "================================"
