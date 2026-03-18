'use client';

import { useTermsService } from "@/src/hooks/use-common";




export default function TermsAndServiceContent() {
    const { terms, loading } = useTermsService();
    return (
        <div className="lg:w-[55%] mx-auto py-6 lg:py-12 bg-white px-4">
            <div>
                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className='about-content' dangerouslySetInnerHTML={{ __html: terms[0]?.description ?? "" }} />
                )}
            </div>
        </div>
    )
}


