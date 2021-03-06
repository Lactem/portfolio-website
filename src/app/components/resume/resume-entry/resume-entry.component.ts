import {
  Component,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ResumeRole } from '../resume-entry.interface';

@Component({
  selector: 'app-resume-entry',
  templateUrl: './resume-entry.component.html',
  styleUrls: ['./resume-entry.component.less']
})
export class ResumeEntryComponent {
  @Input()
  public roles: ResumeRole[];
  @ViewChild('container', {static: false})
  private container: ElementRef;

  public getHeight(): number {
    return this.container.nativeElement.offsetHeight;
  }
}
