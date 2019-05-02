import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { Subject, of } from 'rxjs';
import { switchMap, takeUntil, delay } from 'rxjs/operators';

@Component({
  selector: 'demo-tooltip',
  styleUrls: ['./tooltip.component.scss'],
  template: `
    <mat-card>
      <mat-card-title>Tooltip</mat-card-title>
      <mat-card-content>
        <!-- Basic tooltip -->
        <div
          class="anchor"
          [satPopoverAnchorFor]="instant"
          (mouseenter)="instant.open()"
          (mouseleave)="instant.close()"
        >
          Hover Me (instant)
        </div>
        <sat-popover #instant horizontalAlign="after">
          <div class="tooltip-wrapper mat-body-1">
            Multi-line <br />
            <span class="seagreen">Tooltip</span>
          </div>
        </sat-popover>

        <!-- Tooltip with delay -->
        <div
          class="anchor"
          [satPopoverAnchorFor]="poDelayed"
          (mouseenter)="mouseenter.next()"
          (mouseleave)="mouseleave.next()"
        >
          Hover Me (1000ms delay)
        </div>
        <sat-popover #poDelayed horizontalAlign="after">
          <div class="tooltip-wrapper mat-body-1">
            A tooltip that's slow to open
          </div>
        </sat-popover>

        <!-- Tooltip using hover directive -->
        <div class="anchor" [satPopoverAnchorFor]="hoverDirective">
          Hover
          <span class="hover-text" [satPopoverHover]="500">this text</span>
          for 500ms
        </div>
        <sat-popover #hoverDirective horizontalAlign="after">
          <div class="tooltip-wrapper mat-body-1"> This tooltip uses the <code>SatPopoverHoverDirective</code> </div>
        </sat-popover>
      </mat-card-content>
    </mat-card>
  `
})
export class TooltipDemo implements AfterViewInit {
  @ViewChild('poDelayed') delayed: SatPopover;

  mouseenter = new Subject<void>();
  mouseleave = new Subject<void>();

  ngAfterViewInit() {
    this.mouseenter
      .pipe(
        switchMap(() =>
          of(null).pipe(
            delay(1000),
            takeUntil(this.mouseleave)
          )
        )
      )
      .subscribe(() => this.delayed.open());

    this.mouseleave.subscribe(() => this.delayed.close());
  }
}
