import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../objects/project';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;
  displayedColumns: string[] = ['id', 'name', 'contractor', 'client'];
  dataSource: MatTableDataSource<Project>;


  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {

    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.dataSource = new MatTableDataSource(projects);
    });
  }

  onSelect(select: Project): void {
    this.selectedProject = select;
  }

  createProject(selectedProject: Project) {
    this.projectService.createProject(selectedProject).subscribe((project: Project) => {
      this.selectedProject = project;
      this.getProjects();
    });
  }

  saveProject(selectedProject: Project) {
    this.projectService.saveProject(selectedProject).subscribe((project: Project) => {
      this.selectedProject = project;
      this.getProjects();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

