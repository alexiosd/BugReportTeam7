import { BugComment } from '../report-bug-comments/bug-comment.model';

export class Bug {
  constructor() {}

  public id: string;
  public title: string;
  public description: string;
  public priority: number;
  public reporter: string;
  public status: string;
  public updatedAt: string;
  public createdAt: string;
  public comments: BugComment[];
}
