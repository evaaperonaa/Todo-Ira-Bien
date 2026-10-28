
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject,
  signal,
  afterNextRender,
  Injector
} from '@angular/core';

import { RouterLink } from '@angular/router';

import {
  TranslatePipe,
  TranslateService
} from '@ngx-translate/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit, OnDestroy {

  private translate = inject(TranslateService);
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private injector = inject(Injector);

  animationKey = signal(0);

  private observer?: IntersectionObserver;

  constructor() {
    this.translate.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.animationKey.update(value => value + 1);

        afterNextRender(() => {
          this.observeSpecialties();
        }, { injector: this.injector });
      });
  }

  ngAfterViewInit(): void {
    this.observeSpecialties();
  }

  private observeSpecialties(): void {
    this.observer?.disconnect();

    const section =
      this.elementRef.nativeElement.querySelector<HTMLElement>(
        '.specialties'
      );

    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            this.observer?.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
