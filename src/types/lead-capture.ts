import { IconType } from 'react-icons';

export interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  name: string;
  organization: string;
  mobile: string;
  email: string;
}

export interface UserType {
  id: 'farmer' | 'agribusiness' | 'investor' | 'partner';
  label: string;
  icon: IconType;
  description: string;
}