/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface RegistrationsGetPrint$Params {
  fileId: string;
  printRequestId: string;
}

export function registrationsGetPrint(
  http: HttpClient,
  rootUrl: string,
  params: RegistrationsGetPrint$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, registrationsGetPrint.PATH, 'get');
  if (params) {
    rb.path('fileId', params.fileId, {});
    rb.path('printRequestId', params.printRequestId, {});
  }

  return http.request(rb.build({ responseType: 'text', accept: '*/*', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

registrationsGetPrint.PATH = '/api/Registrations/files/{fileId}/supports/print/{printRequestId}';
