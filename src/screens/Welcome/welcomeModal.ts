export interface WelcomeProps {
  data: {
    MAX_PAGE_COUNT: boolean;
    contentMessages: ContentMessages[];
    indexPage: number;
    progress: number;
    handleNextPage(): void;
  }
}

export interface ContentMessages {
  title: string;
  message: string;
}
