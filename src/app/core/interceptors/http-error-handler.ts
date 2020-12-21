import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';
import {DialogService} from '../../shared/services/app/dialog.service';
import {DialogConfig} from '../../shared/interfaces/dialog-config';

export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandler {
  constructor(private dialogService: DialogService) { }

  createHandleError = (serviceName = '') => <T>
  (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      if (error && (error.status === 401 || error.status === 0)) {
        window.location.href = environment.loginUrl;
      }


      const errorStatus = [400, 403, 404, 422, 500].includes(error.status) ? error.status : 'default';

      const config: DialogConfig = {
        title: `errors.api.${errorStatus}.title`,
        body: `errors.api.${errorStatus}.message`,
        acceptBtnText: `errors.dialog.acceptBtn`

      };
      this.dialogService.open('error', config);

      return of( result );
    };

  }
}
