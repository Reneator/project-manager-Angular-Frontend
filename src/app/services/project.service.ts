import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from '../objects/project';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private endpoint = 'http://localhost:8080/project/';

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.endpoint + 'getAll');
  }

  createProject(selectedProject: Project): Observable<Project> {
    return this.http.post<Project>(this.endpoint, selectedProject);
  }

  saveProject(selectedProject: Project): Observable<Project> {
    return this.http.put<Project>(this.endpoint, selectedProject);
  }
}
