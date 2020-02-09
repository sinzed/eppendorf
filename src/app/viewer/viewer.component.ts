import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: string;
}


/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'location', 'type', 'device_health', 'last_used', 'price', 'color'];
  dataSource;
  element;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(){

  }
  async ngOnInit() {
  
  }


}

