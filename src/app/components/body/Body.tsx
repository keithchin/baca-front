import { ReactNode } from "react"

export default function Body({children} : { children:ReactNode}) {

    return (
        <div className="bc__body">
            {children}
        </div>
    )
}