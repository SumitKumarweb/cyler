import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appwriteprojectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return (
        await this,
        this.databases.createDocument(
          conf.appwritedatabaseId,
          conf.appwritecollectionId,
          slug,
          {
            title,
            content,
            featuredImage,
            status,
            userId,
          }
        )
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();
