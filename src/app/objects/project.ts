export class Project {

  constructor() {
  }
  id: number;
  name: string;
  description: string;
  contractor: string;
  client: string;


  public static clone(project: Project): Project {
    const clonedProject = new Project();
    clonedProject.id = project.id;
    clonedProject.name = project.name;
    clonedProject.description = project.description;
    clonedProject.contractor = project.contractor;
    clonedProject.client = project.client;
    return clonedProject;
  }

  toString(): string {
    return 'name: ' + name;
  }


}
