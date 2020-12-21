import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TitleService {
  private selectedTitle: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selected = this.selectedTitle.asObservable();

  constructor(private appTitleService: Title, private translate: TranslateService) {}

  setTitle(selectedTitle: string) {
    if (selectedTitle) {
      this.translate.get(selectedTitle).subscribe(translatedTitle => {
        this.selectedTitle.next(translatedTitle);
        this.appTitleService.setTitle(translatedTitle);
      });
    } else {
      this.selectedTitle.next('');
      this.appTitleService.setTitle('');
    }
  }
}
