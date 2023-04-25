import { ReactNode } from "react"

export default function Grid({children} : { children:ReactNode}) {

    return (
        <div className="bc__grid">
            {children}
        </div>
    )
}