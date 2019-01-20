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
  opened: boolean;


  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
    this.opened = false;
  }

  getProjects(): void {

    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.dataSource = new MatTableDataSource(projects);
    });
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

  openSideNav() {
    this.selectedProject = new Project();
    this.opened = true;
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    console.log(project);
    this.opened = true;
  }

  SaveOrUpdateProject(selectedProject: Project) {
    this.projectService.getProjectById(selectedProject).subscribe(
      (project: Project) => {
        console.log('successfully gotten' + project.id);
        if (project === null) {
          this.projectService.createProject(selectedProject).subscribe(() => {
            this.getProjects();
          });
        } else {
          this.projectService.saveProject(selectedProject).subscribe(() => {
            this.getProjects();
          });
        }
      });
  }
}

