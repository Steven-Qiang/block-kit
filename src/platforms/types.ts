export enum PlatformType {
  DOUYIN = 'douyin',
  BILIBILI = 'bilibili',
}

export interface User {
  nickname: string;
  uid: string;
  sec_uid?: string;
  avatar?: string;
}

export interface SearchResult {
  users: any[];
  hasMore: boolean;
}

export interface Theme {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  muted: string;
  headerBg: string;
  headerText: string;
}

export interface Platform {
  name: PlatformType;
  displayName: string;
  theme: Theme;
  searchUsers: (keyword: string, page: number, onProgress?: (message: string) => void) => Promise<SearchResult>;
  blockUser: (user: User) => Promise<boolean>;
  isCurrentPlatform: () => boolean;
}
