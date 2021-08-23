import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uv-no-shell',
  templateUrl: './no-shell.component.html',
  styleUrls: ['./no-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoShellComponent {
}
