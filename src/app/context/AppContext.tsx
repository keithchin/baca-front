'use client';

import { FC, createContext, useContext, useState, ReactNode, useEffect } from "react";
import { IPost } from "../interfaces/post";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";


const initialContext = { posts: [] }
interface AppContextType    { 
    posts: IPost[],
    activeForum: String,    
    setActiveForum: (option: string) => void;
}

interface AppStateProviderType {
    children: ReactNode;
}

const AppStateContext = createContext<AppContextType>({
    posts: [],
    activeForum: "",
    setActiveForum: () => {},
});

async function getForums() {
  const res = await fetch('http://127.0.0.1:5000/api/subforums');
  if (!res.ok) {
    throw new Error('Failed to fetch forums');
  }

  return res.json();
}

async function getPosts() {
  const res = await fetch('http://127.0.0.1:5000/api/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export const AppStateProvider: FC<AppStateProviderType> = ({ children }) => {
  const [activeForum, setActiveForum] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getActiveForums = getForums()
      .then((data) => setActiveForum(data))
      .then((res:any) => {setActiveForum
        if (res.status !== 200) {
          throw new Error(`There was an error with status code ${res.status}`)
        }
      })

    const getAllPosts: Promise<void> = getPosts()
      .then((posts) => setPosts(posts))
      .then((res:any) => {setActiveForum
        if (res.status !== 200) {
          throw new Error(`There was an error with status code ${res.status}`)
        }
    })

    return() => {
      getActiveForums
      getAllPosts
    }
  }, []);
  return (
    <AppStateContext.Provider value={{ posts, activeForum, setActiveForum }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
