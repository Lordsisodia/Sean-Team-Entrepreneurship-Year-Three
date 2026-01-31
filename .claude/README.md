# Project-Specific MCP Configuration

This directory contains MCP (Model Context Protocol) server configurations for Claude Code in this project.

## Configured Servers

### 1. SISO Internal (Enabled)
- **Server:** `siso-internal`
- **Type:** Supabase MCP Server
- **Project Ref:** `avdgyrepwrvsvwgxrccr`
- **Purpose:** Task management, projects, clients, partnerships, issues, team, communications
- **Status:** Enabled

### 2. Lumelle (Disabled)
- **Server:** `lumelle`
- **Type:** Supabase MCP Server
- **Project Ref:** `tmsbyiwqzesmirbargxv`
- **Purpose:** Application data, partner platform, customer features
- **Status:** Disabled (enable when needed)

## Setup Instructions

### 1. Install Supabase CLI (if not already installed)
```bash
npm install -g @modelcontextprotocol/server-supabase
```

### 2. Set up environment variables

The Supabase MCP server requires authentication. You have two options:

**Option A: Global environment variables (recommended)**
Add to your shell profile (~/.zshrc or ~/.bashrc):
```bash
export SUPABASE_PROJECT_REF="avdgyrepwrvsvwgxrccr"
export SUPABASE_ACCESS_TOKEN="your-service-role-key"
```

**Option B: Project-specific .env file**
Create `/Users/shaansisodia/DEV/team-entrepreneurship/.claude/.env`:
```
SUPABASE_PROJECT_REF=avdgyrepwrvsvwgxrccr
SUPABASE_ACCESS_TOKEN=your-service-role-key
```

### 3. Get your credentials

1. Go to https://supabase.com/dashboard/project/avdgyrepwrvsvwgxrccr/settings/api
2. Copy the `service_role` key (NOT the anon key)
3. Set as `SUPABASE_ACCESS_TOKEN` environment variable

### 4. Restart Claude Code

After configuration, restart Claude Code to load the MCP servers.

## Usage Examples

Once configured, you can query SISO Internal directly:

```bash
# Show all my tasks for today
"Show my tasks for today from SISO Internal"

# Get active projects
"Show all active projects from SISO Internal"

# Query specific data
"Get all high-priority tasks assigned to shaansisodia"

# Create a new task
"Create task: implement homepage with priority high for project Lumelle"
```

## Troubleshooting

### MCP server not starting
- Check environment variables are set: `echo $SUPABASE_ACCESS_TOKEN`
- Verify npx can run the server: `npx -y @modelcontextprotocol/server-supabase --help`
- Check Claude Code logs for error messages

### Permission denied errors
- Verify you're using the `service_role` key, not `anon` key
- Check RLS policies in Supabase dashboard
- Ensure your IP is allowed in Supabase settings

### Connection refused
- Verify project ref is correct
- Check Supabase project is active (not paused)
- Ensure network connectivity to supabase.co

## Server Management

### Enable/disable servers
Edit `mcp_servers.json` and set `"enabled": true/false`

### Add new servers
Follow the pattern in `mcp_servers.json` for additional Supabase projects or other MCP servers.

## Documentation

- SISO Internal Skills: `coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-01-BlackBox-Research/BLACKBOX-REPO/2-engine/02-agents/capabilities/skills-cap/integration-connectivity/mcp-integrations/siso-internal/SKILL.md`
- Supabase MCP: `coursework-workspace/01-MLAD3-Portfolio/F-Undertakings/LfO-Undertakings/LfO-01-BlackBox-Research/BLACKBOX-REPO/2-engine/02-agents/capabilities/skills-cap/integration-connectivity/mcp-integrations/supabase/SKILL.md`

## Security Notes

- Never commit `.env` files with real credentials
- Use `service_role` key only for development
- Rotate keys if compromised
- Keep MCP server configurations in `.claude/` directory (git-ignored by default)
