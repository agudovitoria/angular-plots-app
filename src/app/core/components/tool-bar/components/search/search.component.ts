import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {SearchOptions} from '../../../../../shared/interfaces/toolbar-config';

@Component({
  selector: 'search',
  template: `
    <mat-form-field id="toolbar-search-input" appearance="outline">
      <input matInput
             [ngModel]="searchText"
             placeholder="{{options.placeholder | translate}}"
             (ngModelChange)="searchTextChanged.next($event)"
             type="text">
      <mat-icon matPrefix>search</mat-icon>
    </mat-form-field>
  `,
  styleUrls: [
    'search.component.scss'
  ]
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output()
  search: EventEmitter<string> = new EventEmitter();
  @Input()
  options: SearchOptions;

  searchText: string;
  searchTextChanged: Subject<string> = new Subject<string>();
  private searchTextChangeSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.searchTextChangeSubscription = this.searchTextChanged.pipe(
      debounceTime(this.options.debounce),
      distinctUntilChanged()
    ).subscribe(newText => this.textChanged(newText));
  }

  ngOnDestroy(): void {
    this.searchTextChangeSubscription.unsubscribe();
  }

  textChanged(searchText: string) {
    this.searchText = searchText;
    this.search.emit(searchText);
  }

}
