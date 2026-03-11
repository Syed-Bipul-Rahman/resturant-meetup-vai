'use client';

import { useTermsService } from "@/src/hooks/use-common";




export default function TermsAndServiceContent() {
    const { terms, loading } = useTermsService();
    return (
        <div className="container mx-auto mt-12 px-4">
            <div className="py-10">
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


