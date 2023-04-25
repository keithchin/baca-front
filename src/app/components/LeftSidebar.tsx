import { ISubforum } from "../interfaces/subforum";

interface SidebarProps {
    promise: Promise<ISubforum[]>;
}

export default async function LeftSidebar({promise} : SidebarProps) {
    const subforums : ISubforum[] = await promise;

    return (
        <div className="bc__left-sidebar">

        </div>
    )
}