export interface cardType {
  id: { videoId: string };
  snippet: {
    publishedAt: string;
    title: string;
    channelTitle: string;
    thumbnails: { medium: { url: string } };
  };
}
