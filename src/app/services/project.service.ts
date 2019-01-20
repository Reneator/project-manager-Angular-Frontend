import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../objects/project';
import {HttpClient, HttpParams} from '@angular/common/http';

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

  getProjectById(project: Project) {
    const params = new HttpParams();
    params.append('id', project.id.toString());
    return this.http.get<Project>(this.endpoint, {params: params});
  }
}
