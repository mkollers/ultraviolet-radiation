import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UvResponse } from '../responses/uv-response';
import { BaseService } from './base.service';

@Injectable()
export class UvService extends BaseService {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient);
  }

  getUvData(lat: number, lng: number) {
    const url = `https://uv.markuskollers.de/.netlify/functions/openuv-gateway?lat=${lat}&lng=${lng}`;
    return super.get<UvResponse>(url);
  }
}
