import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItem: number, currentPage: number = 1, pageSize: number = 10) {
    const totalPages = Math.ceil(totalItem / pageSize);

    // ensure that this do not fail out of bounds
    if (currentPage < 1) { currentPage = 1; }
// tslint:disable-next-line: one-line
    else if (currentPage > totalPages) { currentPage = totalPages; }

    let startPage: number;
    let endPage: number;
    if (totalPages <= 10 ) { startPage = 1; endPage = totalPages; }
// tslint:disable-next-line: one-line
    else {
      // if more than 10 pages
      if (currentPage <= 6) { startPage = 1; endPage = 10; }
// tslint:disable-next-line: one-line
      else if ( currentPage + 4 >= totalPages ) { startPage = totalPages - 9;
                                                  endPage = totalPages ; }
// tslint:disable-next-line: one-line
     else { startPage = currentPage - 5 ; endPage = currentPage + 4; }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min((startIndex + pageSize - 1), (totalItem - 1));

    // create an array of pages
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map( i => startPage + i );

    return {
      totalItems: totalItem,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
