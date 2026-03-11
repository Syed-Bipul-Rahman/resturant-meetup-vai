"use client";

import { usePrivacyPolicyService } from "@/src/hooks/use-common";

export default function PrivacyPolicyContent() {
    const { policies, loading } = usePrivacyPolicyService();
    return (
        <div className="container mx-auto mt-12 px-4">
            <div className="py-10">
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