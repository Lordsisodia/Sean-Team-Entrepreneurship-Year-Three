// Detailed venture profiles for About Ventures carousel
// 8 ventures total (1 real from screenshot + 7 placeholders)

export interface VentureProfile {
  id: number
  name: string
  avatar: string
  title: string
  venture: string
  ventureLink?: string
  description: string
}

export const ventureProfiles: VentureProfile[] = [
  // Real profile from screenshot
  {
    id: 1,
    name: "Harry Buckland",
    avatar: "/images/ventures/profiles/harry-buckland.jpg",
    title: "Director",
    venture: "Delta Sports Management",
    ventureLink: "delta-sports-management",
    description: "Delta Sports Management was established by a team of student-athlete entrepreneurs with a deep understanding of the evolving sports landscape in the UK. As athletes ourselves, we recognise the unique challenges faced by sports professionals today. With expertise in personal branding, sponsorship acquisition, and athlete management, we are dedicated to creating innovative solutions that empower athletes and teams to achieve their full potential."
  },

  // Placeholder profiles for remaining 7 ventures
  {
    id: 2,
    name: "Venture Lead 2",
    avatar: "/images/ventures/profiles/placeholder-2.jpg",
    title: "Founder",
    venture: "Frat Fridays",
    description: "Placeholder description for Frat Fridays venture. This will be replaced with actual content about the venture, its mission, and the team behind it."
  },
  {
    id: 3,
    name: "Venture Lead 3",
    avatar: "/images/ventures/profiles/placeholder-3.jpg",
    title: "CEO",
    venture: "SISO SOLUTIONS",
    description: "Placeholder description for SISO SOLUTIONS venture. This will be replaced with actual content about the venture, its mission, and the team behind it."
  },
  {
    id: 4,
    name: "Venture Lead 4",
    avatar: "/images/ventures/profiles/placeholder-4.jpg",
    title: "Creative Director",
    venture: "DORCH GARMS",
    description: "Placeholder description for DORCH GARMS venture. This will be replaced with actual content about the venture, its mission, and the team behind it."
  },
  {
    id: 5,
    name: "Venture Lead 5",
    avatar: "/images/ventures/profiles/placeholder-5.jpg",
    title: "Managing Director",
    venture: "Venture 5",
    description: "Placeholder description for venture 5. This will be replaced with actual content about the venture, its mission, and the team behind it."
  },
  {
    id: 6,
    name: "Venture Lead 6",
    avatar: "/images/ventures/profiles/placeholder-6.jpg",
    title: "Head of Operations",
    venture: "FAIRFEED",
    description: "Placeholder description for FAIRFEED venture. This will be replaced with actual content about the venture, its mission, and the team behind it."
  },
  {
    id: 7,
    name: "Venture Lead 7",
    avatar: "/images/ventures/profiles/placeholder-7.jpg",
    title: "Director",
    venture: "Apollo Sports",
    description: "Placeholder description for Apollo Sports venture. This will be replaced with actual content about the venture, its mission, and the team behind it."
  },
  {
    id: 8,
    name: "Venture Lead 8",
    avatar: "/images/ventures/profiles/placeholder-8.jpg",
    title: "Founder",
    venture: "Venture 8",
    description: "Placeholder description for venture 8. This will be replaced with actual content about the venture, its mission, and the team behind it."
  }
]

// Carousel configuration
export const venturesCarouselConfig = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: false,
  navigation: true,
  pagination: {
    type: 'fraction' as const, // Shows "1 / 8"
    clickable: true
  },
  // Optional: dots below the pagination
  dots: true
}

// Component usage example:
/*
import { ventureProfiles, venturesCarouselConfig } from './ventures-detailed'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

<Swiper
  modules={[Navigation, Pagination]}
  {...venturesCarouselConfig}
>
  {ventureProfiles.map(profile => (
    <SwiperSlide key={profile.id}>
      <VentureProfileCard {...profile} />
    </SwiperSlide>
  ))}
</Swiper>
*/
