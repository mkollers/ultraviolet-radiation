import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, timeout } from 'rxjs/operators';

export class BaseService {
    constructor(
        protected _httpClient: HttpClient // eslint-disable-line no-unused-vars
    ) { }

    protected get<T>(url: string): Observable<T> {
        return this._httpClient.get<T>(url).pipe(
            timeout(5000),
            retry(2)
        );
    }
}