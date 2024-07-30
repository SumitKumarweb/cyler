import { Client, Account, ID } from "appwrite";
import conf from "./Appwrite/conf/conf";
import React, { useEffect } from "react";

const AppSample = () => {
  useEffect(() => {
    const client = new Client()
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appwriteprojectId);

    const account = new Account(client);

    const createUser = async () => {
      try {
        const response = await account.create(ID.unique(), "babusdfsdfiadij@gmail.com", "Sumit8791@");
        console.log("User created successfully:", response); // Success
      } catch (error) {
        console.error("Error creating user:", error); // Failure
      }
    };

    createUser();
  }, []);

  
};

export default AppSample;
