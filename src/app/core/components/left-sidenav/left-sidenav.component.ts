import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SidenavService} from '../../../shared/services/app/sidenav.service';

@Component({
  selector: 'left-sidenav',
  template: `
    <section id="left-sidenav">
      <mat-toolbar>
        <mat-toolbar-row>
          <span id="left-sidenav-title">{{'leftSidenav.title' | translate}}</span>
          <span fxFlex="auto"></span>
          <button
            id="left-sidenav-close"
            mat-icon-button
            (click)="close()">
            <mat-icon>chevron_left</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>

      <mat-divider></mat-divider>

      <mat-nav-list id="left-sidenav-list">

        <mat-list-item
          (click)="goTo('/')">
          <i mat-list-icon class="sets-icons-company"></i>
          <span mat-line>{{'leftSidenav.home' | translate}}</span>
        </mat-list-item>

        <mat-divider></mat-divider>

        <mat-list-item
          (click)="goTo('/graph-1')">
          <i mat-list-icon class="sets-icons-urgency-level-primary-1"></i>
          <span mat-line>{{'leftSidenav.graph-1' | translate}}</span>
        </mat-list-item>

        <mat-list-item
          (click)="goTo('/graph-2')">
          <i mat-list-icon class="sets-icons-urgency-level-primary-2"></i>
          <span mat-line>{{'leftSidenav.graph-2' | translate}}</span>
        </mat-list-item>

        <mat-list-item
          (click)="goTo('/graph-3')">
          <i mat-list-icon class="sets-icons-urgency-level-primary-3"></i>
          <span mat-line>{{'leftSidenav.graph-3' | translate}}</span>
        </mat-list-item>

        <mat-list-item
          (click)="goTo('/graph-4')">
          <i mat-list-icon class="sets-icons-urgency-level-primary-4"></i>
          <span mat-line>{{'leftSidenav.graph-4' | translate}}</span>
        </mat-list-item>

        <mat-list-item
          (click)="goTo('/graph-5')">
          <i mat-list-icon class="sets-icons-urgency-level-primary-5"></i>
          <span mat-line>{{'leftSidenav.graph-5' | translate}}</span>
        </mat-list-item>

        <mat-divider></mat-divider>

        <mat-list-item (click)="goTo('/logout')">
          <i mat-list-icon class="sets-icons-exit"></i>
          <span mat-line>{{'leftSidenav.exit' | translate}}</span>
        </mat-list-item>
      </mat-nav-list>
    </section>
  `,
  styleUrls: [
    './left-sidenav.component.scss'
  ]
})
export class LeftSidenavComponent implements OnInit, OnDestroy {
  constructor(
    private sidenavService: SidenavService,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  close(): void {
    this.sidenavService.toggle();
  }

  goTo(url: string, type: string = 'external') {
    if (type === 'external') {
      window.location.href = url;
    } else {
      this.router.navigate([url]);
      this.close();
    }
  }
}
