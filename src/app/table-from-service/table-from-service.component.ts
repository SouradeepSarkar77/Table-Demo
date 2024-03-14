import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserColumns, User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-table-from-service',
  templateUrl: './table-from-service.component.html',
  styleUrls: ['./table-from-service.component.scss']
})
export class TableFromServiceComponent implements OnInit {
  displayedColumns: string[] = UserColumns.map((col) => col.key);
  columnsSchema: any = UserColumns;
  dataSource = new MatTableDataSource<User>();
  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

}
