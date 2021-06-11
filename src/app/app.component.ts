import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ScenarioService } from './Services/scenario.service';
import { Scenario } from './Interfaces/scenario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ScenarioUI';
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Scenario>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private _scenarioService: ScenarioService) {    
   }

   ngOnInit(): void { 
    this.getScenarios();
    this.displayedColumns = this.GetTableColumnHeadings();
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  getScenarios() {    
    this._scenarioService.getScenarios().subscribe((data: Scenario[]) => {
      this.dataSource.data = data;      
    })     
  }  

  GetTableColumnHeadings() : string []
  {
    return ['scenarioID',
    'name',
    'forename',
    'userID',
    'sampleDate',
    'creationDate',
    'numMonths',
    'marketID',
    'networkLayerID'
    ];
  }
}
