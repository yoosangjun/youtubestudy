class Youtube {
  constructor(key) {
    this.key = key;
    this.getrequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&q=&key=${this.key}`,
      this.getrequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }
  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${query}&key=${this.key}`,
      this.getrequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
