import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from, filter, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() { }

  readonly configuration = new Configuration({
  apiKey: environment.openAIToken
});

readonly openai = new OpenAIApi(this.configuration);

getDataFromOpenAI(text: string) : string{
  from(this.openai.createCompletion({
    model: "text-davinci-003",
    prompt: ("liste idées cadeaux avec nom, prix, description pour" + text +" en format json"),
    max_tokens: 500
  })).pipe(
    filter(resp => !!resp && !!resp.data),
    map(resp => resp.data),
    filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
    map(data => data.choices[0].text)
  ).subscribe(data => {
    return data;
  });
  return " ";
}

// saveResponse(text: string, filename: string){
//   const a = document.createElement('a');
//   a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
//   a.setAttribute('download', filename);
//   a.click()
// }

}
