import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import StatusTracker from "@/components/StatusTracker"
import ClientOnly from "@/context/ClientOnly"

const ComplaintStatusPage = () => {
    return (
        <MaxWidthWrapper className="min-h-screen py-36">
            <ClientOnly>
                <StatusTracker />
            </ClientOnly>
        </MaxWidthWrapper>
    )
}

export default ComplaintStatusPage;