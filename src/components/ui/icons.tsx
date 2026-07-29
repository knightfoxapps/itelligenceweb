/**
 * Centralized icon map for itelligenceCX.
 * Change any icon here and it updates across the entire site.
 * All icons from Lucide: https://lucide.dev/icons
 */

import {
  Users,
  Handshake,
  Target,
  TrendingUp,
  GraduationCap,
  BarChart3,
  Brain,
  Bot,
  Sparkles,
  MessageCircle,
  SlidersHorizontal,
  MapPin,
  Globe,
  Clock,
  Star,
  Zap,
  Shield,
  Headphones,
  PhoneCall,
  Mail,
  MessageSquare,
  Share2,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/* ─── How We Engage (About + Solution pages) ─── */
export const howWeEngageIcons: Record<string, LucideIcon> = {
  "Leadership Proximity": Handshake,
  "Outcome-Led Quality Assurance": Target,
  "Intelligence that Compounds": TrendingUp,
  "Skilled Nearshore Workforce": GraduationCap,
};

/* ─── Product & Sub-Product Pages ─── */
export const productIcons: Record<string, LucideIcon> = {
  "QA & Trend Analysis": BarChart3,
  "AI Training System": Brain,
  "AI Workforce": Bot,
  "itelligence.AI": Sparkles,
};

/* ─── Industry Platform Section ─── */
export const platformIcons: Record<string, LucideIcon> = {
  "Quality & Insight Engine": Sparkles,
  "AI Coaching": MessageCircle,
  "High-Powered Workforce Optimizer": SlidersHorizontal,
};

/* ─── Location Page Info Cards ─── */
export const locationInfoIcons: Record<string, LucideIcon> = {
  Location: MapPin,
  Language: Globe,
  Timezone: Clock,
  "Best For": Star,
};

/* ─── Solution Mapping (Home page) ─── */
export const solutionIcons: Record<string, LucideIcon> = {
  Engage: Headphones,
  Grow: TrendingUp,
  Retain: Shield,
};

/* ─── Channel Icons ─── */
export const channelIcons: Record<string, LucideIcon> = {
  Voice: PhoneCall,
  Chat: MessageSquare,
  Email: Mail,
  Social: Share2,
};

/* ─── UI Icons ─── */
export const uiIcons = {
  ArrowRight,
  ChevronRight,
  Zap,
};

/* ─── Generic icon lookup ─── */
const allIcons: Record<string, LucideIcon> = {
  ...howWeEngageIcons,
  ...productIcons,
  ...platformIcons,
  ...locationInfoIcons,
  ...solutionIcons,
  ...channelIcons,
};

/**
 * Get an icon by name. Falls back to Sparkles if not found.
 */
export function getIcon(name: string): LucideIcon {
  return allIcons[name] ?? Sparkles;
}

/**
 * Render an icon by name with consistent sizing.
 */
export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = getIcon(name);
  return <IconComponent className={className} />;
}
