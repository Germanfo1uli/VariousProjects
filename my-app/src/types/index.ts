export interface Game {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string[];
    author: string;
    comments: number;
    likes: number;
    views: number;
    type: 'game' | 'asset';
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}