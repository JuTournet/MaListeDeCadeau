import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from, filter, map } from 'rxjs';
import { environment } from '../environments/environment';
import { ServiceCadeauxService } from './service/service-cadeaux.service';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  constructor(private service:ServiceCadeauxService) { }

  readonly configuration = new Configuration({
  apiKey: environment.openAIToken
});

readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string){
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: ("liste idées cadeaux avec nom, prix, description pour " + text +" en format JSON"),
      max_tokens: 500
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    ).subscribe(data => {
      this.service.createListe(data);
    });
  }
}
