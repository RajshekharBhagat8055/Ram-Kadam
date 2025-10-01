import { cn } from "@/lib/utils"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
})

interface MainHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
    className?: string
}

export default function MainHeading({ children, className, ...props }: MainHeadingProps) {
    return (
        <h1 
            className={cn(
                playfair.className,
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

