import { ISubforum } from "../interfaces/subforum";

interface SidebarProps {
    promise: Promise<ISubforum[]>;
}

export default async function RightSidebar({promise} : SidebarProps) {
    const subforums : ISubforum[] = await promise;

    return (
        <div className="bc__right-sidebar">

        </div>
    )
}