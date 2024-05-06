/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthenticationRequestDto } from '../../models/authentication-request-dto';
import { AuthenticationResponseDto } from '../../models/authentication-response-dto';

export interface Register$Params {
      body: AuthenticationRequestDto
}

export function register(http: HttpClient, rootUrl: string, params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponseDto>> {
  const rb = new RequestBuilder(rootUrl, register.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthenticationResponseDto>;
    })
  );
}

register.PATH = '/api/v1/auth/register';
