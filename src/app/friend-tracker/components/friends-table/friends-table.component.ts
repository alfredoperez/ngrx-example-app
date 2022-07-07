import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { fadeInUp400ms } from '../../../shared/animations/fade-in-up.animations';
import { Friend } from '../../../shared/models/friends.model';

@Component({
  selector: 'app-friends-table',
  templateUrl: './friends-table.component.html',
  styleUrls: ['./friends-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms]
})
export class FriendsTableComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * The list of friends to display
   */
  @Input() public friends!: Observable<Array<Friend>>;

  /**
   * The data source of friends used in the table
   */
  public friendsDataSource!: MatTableDataSource<Friend>;

  /**
   * List of visible columns on the table
   */
  public visibleColumns!: Array<string>;

  /**
   * Reference to the MatPaginator component
   */
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  /**
   * Reference to the MatSort component
   */
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  private innerWidth: any;

  private friendsSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.friendsDataSource = new MatTableDataSource<Friend>();

    this.innerWidth = window.innerWidth;
    this.setVisibleColumns();
    this.friendsSubscription = this.friends.subscribe((friends) => {
      this.friendsDataSource.data = friends;
    });
  }

  ngOnDestroy(): void {
    this.friendsSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.friendsDataSource.paginator = this.paginator;
    this.friendsDataSource.sort = this.sort;
    this.friendsDataSource.sortingDataAccessor = (
      item: any,
      property: string
    ) => {
      switch (property) {
        case 'created':
          return new Date(item.created);
        default:
          return item[property];
      }
    };
  }

  private setVisibleColumns(): void {
    if (this.innerWidth < 600) {
      this.visibleColumns = ['name', 'age', 'kids'];
    } else if (this.innerWidth < 820) {
      this.visibleColumns = ['name', 'age', 'friends'];
    } else {
      this.visibleColumns = ['name', 'age', 'kids', 'friends', 'created'];
    }
  }

  @HostListener('window:resize', ['$event'])
  private onResize(): void {
    this.innerWidth = window.innerWidth;
    this.setVisibleColumns();
  }
}
