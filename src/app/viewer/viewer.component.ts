import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductService } from '../services/product.service';
import { MatPaginator } from '@angular/material/paginator';

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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private productService: ProductService){

  }
  async ngOnInit() {
    await this.productService.loadData();
    this.element = this.productService.productData;
    this.dataSource = new MatTableDataSource(this.productService.productData as unknown[]);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

