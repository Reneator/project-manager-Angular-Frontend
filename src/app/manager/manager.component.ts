import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../services/project.service';
import {Project} from '../objects/project';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  projects: Project[];
  selectedProject = new Project();

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {

    this.projectService.getProjects().subscribe((projects: Project[]) => this.projects = projects);
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

}
