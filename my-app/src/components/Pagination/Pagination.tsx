import React from 'react';
import styles from './Pagination.module.css';
import { PaginationProps } from '../../types';

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   onPageChange
                                               }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={styles.pagination}>
            <button
                className={styles.arrow}
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
            >
                ←
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className={styles.arrow}
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
            >
                →
            </button>
        </div>
    );
};

export default Pagination;