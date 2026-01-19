// Complete team data - 18 members total
// Freddie and Logan are confirmed from screenshots
// Remaining 16 are placeholders until actual photos/names provided

export interface TeamMember {
  id: number
  name: string
  role: string
  roleType: 'dark' | 'blue'
  image: string
  bio?: string
}

export const teamMembers: TeamMember[] = [
  // Featured leads (from screenshots)
  {
    id: 1,
    name: "Freddie",
    role: "Venture Lead",
    roleType: "dark",
    image: "/images/team/freddie.jpg"
  },
  {
    id: 2,
    name: "Logan",
    role: "Academic Lead",
    roleType: "blue",
    image: "/images/team/logan.jpg"
  },

  // Placeholder team members (3-18)
  {
    id: 3,
    name: "Team Member 3",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-3.jpg"
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-4.jpg"
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-5.jpg"
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-6.jpg"
  },
  {
    id: 7,
    name: "Team Member 7",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-7.jpg"
  },
  {
    id: 8,
    name: "Team Member 8",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-8.jpg"
  },
  {
    id: 9,
    name: "Team Member 9",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-9.jpg"
  },
  {
    id: 10,
    name: "Team Member 10",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-10.jpg"
  },
  {
    id: 11,
    name: "Team Member 11",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-11.jpg"
  },
  {
    id: 12,
    name: "Team Member 12",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-12.jpg"
  },
  {
    id: 13,
    name: "Team Member 13",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-13.jpg"
  },
  {
    id: 14,
    name: "Team Member 14",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-14.jpg"
  },
  {
    id: 15,
    name: "Team Member 15",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-15.jpg"
  },
  {
    id: 16,
    name: "Team Member 16",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-16.jpg"
  },
  {
    id: 17,
    name: "Team Member 17",
    role: "Team Member",
    roleType: "dark",
    image: "/images/team/placeholder-17.jpg"
  },
  {
    id: 18,
    name: "Team Member 18",
    role: "Team Member",
    roleType: "blue",
    image: "/images/team/placeholder-18.jpg"
  }
]

// Grid layout for team section
export const teamGridConfig = {
  desktop: {
    columns: 4, // 4 columns on desktop
    gap: 32 // 32px gap
  },
  tablet: {
    columns: 3, // 3 columns on tablet
    gap: 24
  },
  mobile: {
    columns: 2, // 2 columns on mobile
    gap: 16
  }
}

// Component usage example:
/*
import { teamMembers } from './team-members-full'

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
  {teamMembers.map(member => (
    <TeamMemberCard key={member.id} {...member} />
  ))}
</div>
*/
