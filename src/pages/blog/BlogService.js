import Rest, { URL } from "../../utils";

export default class BlogService {
  constructor() {
    this.rest = new Rest();
  }

  extractBlog({ content, id, slug, title, virtuals }) {
    const { subtitle } = content; //TODO: need to update with ES208
    const { previewImage } = virtuals; //TODO: need to update with ES208
    const { imageId } = previewImage;
    const coverImage = imageId
      ? URL.mediumResource + "/" + imageId
      : URL.mediumDefaultImage;

    return {
      title,
      subtitle,
      coverImage,
      url: `${URL.medium}/${slug}-${id}`
    };
  }

  getPosts({ payload }) {
    const { references } = payload;
    return references.Post;
  }

  async getBlogs() {
    let posts = [];
    try {
      const response = await this.rest.get(`${URL.api}/medium/posts`);

      if (response.success) {
        posts = this.getPosts(response);
        return Object.keys(this.getPosts(response)).map(post =>
          this.extractBlog(posts[post])
        );
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
