/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthenticationRequestDto } from '../../models/authentication-request-dto';
import { AuthenticationResponseDto } from '../../models/authentication-response-dto';

export interface Authenticate$Params {
      body: AuthenticationRequestDto
}

export function authenticate(http: HttpClient, rootUrl: string, params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponseDto>> {
  const rb = new RequestBuilder(rootUrl, authenticate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthenticationResponseDto>;
    })
  );
}

authenticate.PATH = '/api/v1/auth/login';
