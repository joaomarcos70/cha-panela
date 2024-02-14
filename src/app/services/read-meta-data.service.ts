import { Injectable } from '@angular/core';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable({
  providedIn: 'root',
})
export class ReadMetaDataService {
  constructor() {}

  async getMetaData(url: string) {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/${url}`
    );
    const html = response.data;
    const $ = cheerio.load(html);
    console.log('html', $);
    const title = $('head title').text();
    const description = $('head meta[name="description"]').attr('content');
    const image = $('head meta[property="og:image"]').attr('content');
    const siteName = $('head meta[property="og:site_name"]').attr('content');
    const favicon = $('head link[rel="icon"]').attr('href');
    return {
      title,
      description,
      image,
      siteName,
      favicon,
    };
  }
}
