import React from 'react';
import { BookmarksResponse } from '@/types';
import Bookmark from '@/app/components/Bookmark';
import Pagination from '@/app/components/Pagination';

type Props = {
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <Pagination bookmarks={bookmarks} />
            { bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />) }            
        </div>
    );
};

export default Bookmarks;