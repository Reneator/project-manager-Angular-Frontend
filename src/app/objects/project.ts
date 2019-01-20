export class Project {
  id: number;
  name: string;
  description: string;
  contractor: string;
  client: string;


  toString(): string {
    return   'name: ' + name;
  }
}
