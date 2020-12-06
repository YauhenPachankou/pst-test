import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { INewsResponseModel } from 'src/app/news/models/news-response.model';

@Injectable({
  providedIn: 'root'
})
export class FetchNewsService {

  constructor(private http: HttpClient) {}

  fetchNews(): Observable<INewsResponseModel> {
    return this.http.get<INewsResponseModel>(environment.newsApiUrl, {
      params: new HttpParams({
        fromObject: {
          sources: 'bbc-news',
          apiKey: environment.newsApiKey
        }
      })
    });
  }

}
