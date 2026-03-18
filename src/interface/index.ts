import { StaticImageData } from "next/image";

export interface INavLink {
    title: string;
    href?: string;
}

export interface ITitleProps {
    title: string;
    description?: string;
    className?: string;
    descriptionClass?: string;
    visible?: boolean;
}

export interface IService {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface IServiceCardProps {
    title: string;
    description: string;
    image: string;
}


export interface IStoreCardProps {
    title: string;
    src: string | StaticImageData;
    textStyle?: string;
    iconStyle?: string;
    titleStyle?: string;
}