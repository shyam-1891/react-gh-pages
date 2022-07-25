import React from 'react';

export default function Bookitem({bookitem}) {
  return(
    <div className='book-item'>
      <div className='book-item--inner'>
        <img src={ bookitem.bookimg } alt="{ bookitem.booktitle != null ? bookitem.booktitle : 'Book title' }"/>
        <div className='pub-date'>{ bookitem.bookdate != null ? bookitem.bookdate : '22-08-2008' }</div>
        <div className='title'>{ bookitem.booktitle != null ? bookitem.booktitle : 'Book title' }</div>
      </div><br /><br />
    </div>
  );
}
