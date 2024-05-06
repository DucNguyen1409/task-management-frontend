/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAll1 } from '../fn/task-rest/find-all-1';
import { FindAll1$Params } from '../fn/task-rest/find-all-1';
import { findByUserId } from '../fn/task-rest/find-by-user-id';
import { FindByUserId$Params } from '../fn/task-rest/find-by-user-id';
import { save } from '../fn/task-rest/save';
import { Save$Params } from '../fn/task-rest/save';
import { TaskDto } from '../models/task-dto';

@Injectable({ providedIn: 'root' })
export class TaskRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/api/v1/tasks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TaskDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<TaskDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TaskDto>>): Array<TaskDto> => r.body)
    );
  }

  /** Path part for operation `save()` */
  static readonly SavePath = '/api/v1/tasks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: Save$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return save(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: Save$Params, context?: HttpContext): Observable<string> {
    return this.save$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `findByUserId()` */
  static readonly FindByUserIdPath = '/api/v1/tasks/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUserId$Response(params: FindByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TaskDto>>> {
    return findByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUserId(params: FindByUserId$Params, context?: HttpContext): Observable<Array<TaskDto>> {
    return this.findByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TaskDto>>): Array<TaskDto> => r.body)
    );
  }

}
