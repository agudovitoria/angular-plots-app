import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges, HostListener, Input, ViewChild, ElementRef} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Sort} from '@angular/material/sort';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TableApiService} from '../../../shared/services/api/table/table-api.service';
import {TableConfig} from '../../../shared/interfaces/table-config';

@Component({
  selector: 'app-table',
  template: `
      <div #tableContainer (scroll)="onScroll($event)" class="table-container">
        <table mat-table [dataSource]="dataSource" matSort (matSortChange)="sortData($event)">

          <ng-container *ngFor="let col of config.displayedColumns" matColumnDef="{{col}}">
            <th mat-header-cell
                mat-sort-header
                [ngClass]="col"
                *matHeaderCellDef
                [disabled]="!config.columns[col].sortable">
              {{config.columns[col].header | translate}}
            </th>
            <td mat-cell
                [ngClass]="col"
                *matCellDef="let row">
              {{(config.columns[col].valueFn) ? config.columns[col].valueFn(row[col]): row[col]}}
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="config.displayedColumns; sticky: true"></tr>

          <tr mat-row *matRowDef="let row; columns: config.displayedColumns;"></tr>
        </table>

        <div *ngIf="loading && allData.length === 0" class="progress-spinner-container">
          <mat-progress-spinner
            color="primary"
            mode="indeterminate">
          </mat-progress-spinner>
        </div>

      </div>
      <mat-progress-bar
        [style.visibility]="loading && allData.length !== 0 ? 'visible' : 'hidden'"
        class="example-margin"
        color="primary"
        mode="indeterminate">
      </mat-progress-bar>
  `,
  styleUrls: [
    './table.component.scss'
  ]
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {

  private dataSubject = new BehaviorSubject<any>([]);
  private destroy$ = new Subject();

  private client: string;
  private sort: string = '';
  private pageSize: number = 20;
  private totalPages: number;
  private page: number = 0;

  loading: boolean = false;
  allData = [];

  dataSource: MyDataSource;

  @Input()
  config: TableConfig;

  @Input()
  searchCriteria: string;

  @ViewChild('tableContainer')
  tableContainer: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      if (!this.loading) {
        this.page++;
        if (this.page <= this.totalPages) {
          this.getData();
        }
      }
    }
  }

  constructor(private apiService: TableApiService) {
  }

  private resetAndMakeSearch() {
    this.resetData();
    this.scrollToTableTop();
    this.getData();
  }

  private scrollToTableTop() {
    if (this.tableContainer && this.tableContainer.nativeElement) {
      this.tableContainer.nativeElement.scrollTo( 0, 0 );
    }
  }

  private resetData() {
    this.page = 0;
    this.allData = [];
    this.dataSubject.next([]);
  }

  private getData(): void {
    this.loading = true;
    const path = `/api/clients/${this.client}${this.config.afterClientPath}`;

    this.apiService.getData(path, this.page, this.pageSize, this.sort, this.searchCriteria)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: value => {
          this.loading = false;
          this.allData = [...this.allData, ...value.content];
          this.totalPages = Math.floor(value.totalElements / this.pageSize);
          this.dataSubject.next(this.allData);
        }
      });
  }

  ngOnInit(): void {
    this.dataSource = new MyDataSource(this.dataSubject);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchCriteria && typeof changes.searchCriteria.currentValue !== 'undefined') {
      this.searchCriteria = changes.searchCriteria.currentValue;
      this.resetAndMakeSearch();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.dataSource.disconnect();
  }

  sortData(sort: Sort): void {
    if (sort.direction) {
      const active = this.config.columns[sort.active].sortKey || sort.active;
      this.sort = `${active},${sort.direction}`;
    } else {
      this.sort = '';
    }
    this.resetAndMakeSearch();
  }
}

export class MyDataSource extends DataSource<any> {

  constructor(private subject: BehaviorSubject<any>) {
    super();
  }

  connect(): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect(): void {
    this.subject.unsubscribe();
  }
}
