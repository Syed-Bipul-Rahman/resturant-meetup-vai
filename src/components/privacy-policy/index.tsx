"use client";

import { usePrivacyPolicyService } from "@/src/hooks/use-common";

export default function PrivacyPolicyContent() {
    const { policies, loading } = usePrivacyPolicyService();
    return (
        <div className="lg:w-[55%] mx-auto py-6 lg:py-12 bg-white px-4">
            <div>
                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className='about-content' dangerouslySetInnerHTML={{ __html: policies[0]?.description ?? "" }} />
                )}
            </div>
        </div>
    )
}