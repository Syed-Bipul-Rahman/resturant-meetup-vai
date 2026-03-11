
"use client";
import { useCallback, useEffect, useState } from "react";
import useApi from "../use-api";
import { IContentService } from "./interface";



export function useTermsService() {
    const [terms, setTerms] = useState<IContentService[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTerms = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await useApi.get<{ data: IContentService[] }>(
                "/terms"
            );
            setTerms(data?.data || []);
        } catch (error) {
            // console.error("Error fetching terms and conditions:", error);
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    }, []);

    useEffect(() => {
        fetchTerms();
    }, [fetchTerms]);

    return { terms, loading, refetch: fetchTerms };
}

export function usePrivacyPolicyService() {
    const [policies, setPolicies] = useState<IContentService[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchPolicies = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await useApi.get<{ data: IContentService[] }>(
                "/privacy"
            );
            setPolicies(data?.data || []);
        } catch (error) {
            // console.error("Error fetching privacy policies:", error);
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    }, []);

    useEffect(() => {
        fetchPolicies();
    }, [fetchPolicies]);

    return { policies, loading, refetch: fetchPolicies };
}

export function useAboutUsService() {
    const [abouts, setAbouts] = useState<IContentService[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAbouts = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await useApi.get<{ data: IContentService[] }>(
                "/about"
            );
            setAbouts(data?.data || []);
        } catch (error) {
            // console.error("Error fetching about us:", error);
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    }, []);

    useEffect(() => {
        fetchAbouts();
    }, [fetchAbouts]);

    return { abouts, loading, refetch: fetchAbouts };
}
