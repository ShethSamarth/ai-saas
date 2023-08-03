import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react"

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
]

export const MAX_FREE_COUNTS = 5

export const testimonials = [
  {
    name: "Samarth",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Random",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Jhon Doe",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Olive Yew",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
]
