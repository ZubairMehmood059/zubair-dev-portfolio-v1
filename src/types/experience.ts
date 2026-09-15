export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'Education' | 'Engineering Focus';
  description: string;
  details: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  associatedProjects: string[];
}
