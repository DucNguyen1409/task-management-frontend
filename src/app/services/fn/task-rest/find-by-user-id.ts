/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TaskDto } from '../../models/task-dto';

export interface FindByUserId$Params {
  userId: string;
}

export function findByUserId(http: HttpClient, rootUrl: string, params: FindByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TaskDto>>> {
  const rb = new RequestBuilder(rootUrl, findByUserId.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TaskDto>>;
    })
  );
}

findByUserId.PATH = '/api/v1/tasks/user/{userId}';
