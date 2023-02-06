import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from, filter, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { ServiceCadeauxService } from './service-cadeaux.service';
import { ErrorNumber, isValidated } from '../model/listeCadeaux.model';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  constructor(private service: ServiceCadeauxService) {}

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken,
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string) {
    from(
      this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt:
          'liste 6 idées cadeaux avec nom, prix(€), description pour ' +
          text +
          ' en format JSON (nom, prix, description) en français',
        max_tokens: 1000,
        temperature: 0.5,
      })
    )
      .pipe(
        filter((resp) => !!resp && !!resp.data),
        map((resp) => resp.data),
        filter(
          (data: any) =>
            data.choices && data.choices.length > 0 && data.choices[0].text
        ),
        map((data) => data.choices[0].text)
      )
      .subscribe(
        async (data) => {
          console.log(data);
          let arrayData: any[] = JSON.parse(data);
          for (let i = 0; i < arrayData.length; i++) {
            const response = await this.openai.createImage({
              prompt: arrayData[i].description,
              n: 1,
              size: '512x512',
            });
            const image_url = response.data.data[0].url as string;

            this.service.addToListe(arrayData[i], image_url, i);
          }
          isValidated[0] = false;
        },
        (err) => {

          ErrorNumber[0] = err;
        },
        () => {
          console.log('complete !');
        }
      );
  }
}
