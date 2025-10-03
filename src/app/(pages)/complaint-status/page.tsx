import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import StatusTracker from "@/components/StatusTracker"
import ClientOnly from "@/components/ClientOnly"

const ComplaintStatusPage = () => {
    return (
        <MaxWidthWrapper className="min-h-screen py-10">
            <ClientOnly>
                <StatusTracker />
            </ClientOnly>
        </MaxWidthWrapper>
    )
}

export default ComplaintStatusPage;