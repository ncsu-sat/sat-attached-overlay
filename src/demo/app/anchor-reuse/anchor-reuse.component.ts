import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';

@Component({
  selector: 'demo-anchor-reuse',
  styleUrls: ['anchor-reuse.component.scss'],
  template: `
    <mat-card>
      <mat-card-title>Anchor Reuse</mat-card-title>
      <mat-card-content>
        Active Popover:
        <mat-radio-group [(ngModel)]="activePopover">
          <mat-radio-button value="a">A</mat-radio-button>
          <mat-radio-button value="b">B</mat-radio-button>
        </mat-radio-group>

        <br />

        <mat-slide-toggle [(ngModel)]="showAnchor">Show Anchor</mat-slide-toggle>

        <br />

        <button mat-button *ngIf="showAnchor" [satPopoverAnchor]="getActivePopover()" (click)="togglePopover()">
          Anchor
        </button>

        <sat-popover #a xAlign="after" hasBackdrop><div class="wrapper">A</div></sat-popover>
        <sat-popover #b xAlign="after" hasBackdrop><div class="wrapper">B</div></sat-popover>
      </mat-card-content>
    </mat-card>
  `
})
export class AnchorReuseComponent implements AfterContentInit {
  @ViewChild('a') aPopover: SatPopover;
  @ViewChild('b') bPopover: SatPopover;

  activePopover = '';
  showAnchor = false;

  ngAfterContentInit() {
    this.activePopover = 'a';
  }

  getActivePopover(): SatPopover {
    if (this.activePopover === 'a') return this.aPopover;
    if (this.activePopover === 'b') return this.bPopover;
    return null;
  }

  togglePopover(): void {
    const p = this.getActivePopover();
    if (p) p.toggle();
  }
}
