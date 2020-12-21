import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from '../../../../core/interceptors/http-error-handler';
import {RETRY_NUMBER} from '../retry-config';

@Injectable()
export class TableApiService {

  handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TableApiService');
  }

  getData(path: string, page: number = 0, size: number = 20, sort: string, searchCriteria: string): Observable<any> {
    let params = new HttpParams()
      .append('page', page.toString())
      .append('size', size.toString());

    if (typeof sort !== 'undefined' && sort !== '') {
      params = params.append('sort', sort);
    }

    if (typeof searchCriteria !== 'undefined' && searchCriteria !== '') {
      params = params.append('searchCriteria', searchCriteria);
    }

    return this.http.get(path, { params })
      .pipe(
        retry(RETRY_NUMBER),
        catchError(this.handleError(`getData - ${path}`, {}))
      );
  }
}
