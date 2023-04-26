import { ISubforum } from "../interfaces/subforum";


async function getSubforums() {
    const res = await fetch('http://localhost:5000/api/subforums', {
      cache: 'force-cache'
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    if (res.status !== 200) {
      throw new Error(`There was an error with status code ${res.status}`)
    }
  
    return res.json();
  }

export default async function LeftSidebar() {
    const subforums: ISubforum[] = await getSubforums();

    return (
        <div className="bc__left-sidebar">
            <div className="bc__left-sidebar__item">
                Home
            </div>
            {subforums.map(item => 
                (<div className="bc__left-sidebar__item">
                    {item.title}
                </div>)
            )}
        </div>
    )
}