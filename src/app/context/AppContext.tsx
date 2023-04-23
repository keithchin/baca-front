'use client';

import { FC, createContext, useContext, useState, ReactNode, useEffect } from "react";
import { IPost } from "../interfaces/post";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import getPosts from "./getPost";


const initialContext = { 
  posts: [],
  activeForum: "",
  setActiveForum: () => {},
}
interface AppContextType    { 
    posts: IPost[],
    activeForum: String,    
    setActiveForum: (option: string) => void;
}

interface AppStateProviderType {
    children: ReactNode;
}

const AppStateContext = createContext<AppContextType>(initialContext);

async function getForums() {
  const res = await fetch('http://127.0.0.1:5000/api/subforums');
  if (!res.ok) {
    throw new Error('Failed to fetch forums');
  }

  return res.json();
}
export const useAppState = () => useContext(AppStateContext);

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

