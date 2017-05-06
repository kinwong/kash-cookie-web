import {MeteorObservable } from 'meteor-rxjs';
import { Observable, Observer } from 'rxjs';
import { HTTP } from 'meteor/http';

export class MeteorHTTP {
  public static call(
    method: string, url: string, options?: HTTP.HTTPRequest):
    Observable<HTTP.HTTPResponse> {
      return Observable.create(observer => {
        const response = HTTP.call(method, url, options, (error, result) => {
          if (error) {
            observer.error(error);
          } else {
            observer.next(result);
            observer.complete();
          }
        });
      // Any cleanup logic might go here
        // tslint:disable-next-line:no-console
        return () => console.log('disposed');
    });
  }
  public static get(url: string, callOptions?: HTTP.HTTPRequest): Observable<HTTP.HTTPResponse> {
    return MeteorHTTP.call('GET', url, callOptions);
  }
}
