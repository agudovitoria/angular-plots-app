import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {OverlayContainer} from '@angular/cdk/overlay';

const DEFAULT_THEME = 'other-theme';

@Injectable()
export class ThemeService {
  private selectedTheme: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selected = this.selectedTheme.asObservable();
  previousSelected: string = '';
  isDark: boolean = false;

  constructor(private overlayContainer: OverlayContainer) {
    this.setTheme(DEFAULT_THEME);
  }

  toggleDark() {
    if (this.isDark) {
      this.setCustomTheme(this.previousSelected);
      this.isDark = false;
      return;
    }
    this.setCustomTheme('dark-theme');
    this.isDark = true;
  }

  setTheme(selectedTheme: string) {
    this.setCustomTheme(selectedTheme);
    this.previousSelected = selectedTheme;
    this.isDark = false;
  }

  private setCustomTheme(selectedTheme: string) {
    this.selectedTheme.next(selectedTheme);
    this.setOverlay(selectedTheme);
  }

  private setOverlay(theme: string) {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    if (theme) {
      overlayContainerClasses.add(theme);
    }
  }
}
