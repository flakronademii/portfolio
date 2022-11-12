import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  ContentfulClientApi,
  createClient,
} from 'contentful';
import { from } from 'rxjs';
import * as marked from 'marked';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  private clientApi: ContentfulClientApi;

  constructor() {

  }



  markdownToHtml(md: string) {
    return marked(md);
  }

}
