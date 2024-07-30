import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

const client = new Client()
  .setEndpoint(conf.appWriteUrl) // Your API Endpoint
  .setProject(conf.appwriteprojectId); // Your project ID

const account = new Account(client);

const promiseResolve = async (res) => {
  try {
    const promise = await account.create(
      ID,
      "babuiadij@gmail.com",
      "Sumit8791@"
    );

    return promise;
  } catch (error) {
    console.log(error);
  }
};

export default promiseResolve;
