export interface SuccessStory {
  farmer: string;
  location: string;
  crop: string;
  content: string;
  impact: string;
  metric: string;
}

export interface SuccessStoryCardProps {
  story: SuccessStory;
  index: number;
}

export interface SuccessStoriesSectionProps {
  title?: string;
  subtitle?: string;
  stories?: SuccessStory[];
  showAll?: boolean;
}