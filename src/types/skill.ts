export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  skills: {
    name: string;
    focus: string;
  }[];
}
