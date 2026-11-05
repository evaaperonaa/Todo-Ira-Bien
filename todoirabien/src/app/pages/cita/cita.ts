
import { Component, computed, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cita.html',
  styleUrl: './cita.css'
})
export class Cita {
  private readonly today = new Date();

  mode = signal<'presencial' | 'online'>('presencial');
  specialty = signal('');
  name = signal('');
  email = signal('');
  phone = signal('');
  privacyAccepted = signal(false);

  displayedMonth = signal(
    new Date(this.today.getFullYear(), this.today.getMonth(), 1)
  );

  selectedDate = signal<Date | null>(null);
  selectedTime = signal<string | null>(null);

  // Horarios ficticios. No representan disponibilidad real.
  readonly sampleTimes = [
    '09:00', '10:00', '11:30',
    '16:00', '17:00', '18:30'
  ];

  constructor(private translate: TranslateService) {}

  private get locale(): string {
    return this.translate.currentLang() === 'va' ? 'ca-ES' : 'es-ES';
  }

  monthLabel = computed(() => {
    const date = this.displayedMonth();
    return new Intl.DateTimeFormat(this.locale, {
      month: 'long',
      year: 'numeric'
    }).format(date);
  });

  weekDays = computed(() => {
    const formatter = new Intl.DateTimeFormat(this.locale, {
      weekday: 'short'
    });

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(2026, 10, 2 + index);
      return formatter.format(date).replace('.', '');
    });
  });

  calendarDays = computed<(number | null)[]>(() => {
    const month = this.displayedMonth();
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    const firstDay = new Date(year, monthIndex, 1);
    const daysInMonth = new Date(
      year, monthIndex + 1, 0
    ).getDate();

    const offset = (firstDay.getDay() + 6) % 7;

    return [
      ...Array(offset).fill(null),
      ...Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
      )
    ];
  });

  canGoPrevious = computed(() => {
    const month = this.displayedMonth();
    const current = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      1
    );

    return month.getTime() > current.getTime();
  });

  modeLabel = computed(() => {
    const key = this.mode() === 'presencial'
      ? 'BOOKING.MODE.IN_PERSON'
      : 'BOOKING.MODE.ONLINE';

    return this.translate.instant(key);
  });

  selectedDateLabel = computed(() => {
    const date = this.selectedDate();
    if (!date) return '';

    return new Intl.DateTimeFormat(this.locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  });

  selectMode(value: 'presencial' | 'online'): void {
    this.mode.set(value);
  }

  selectSpecialty(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.specialty.set(target.value);
  }

  previousMonth(): void {
    if (!this.canGoPrevious()) return;
    this.changeMonth(-1);
  }

  nextMonth(): void {
    this.changeMonth(1);
  }

  private changeMonth(amount: number): void {
    const current = this.displayedMonth();

    this.displayedMonth.set(
      new Date(
        current.getFullYear(),
        current.getMonth() + amount,
        1
      )
    );

    this.selectedDate.set(null);
    this.selectedTime.set(null);
  }

  isAvailable(day: number): boolean {
    const month = this.displayedMonth();
    const date = new Date(
      month.getFullYear(),
      month.getMonth(),
      day
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekday = date.getDay();

    // Solo demostración: días futuros de lunes a viernes.
    return date >= today && weekday !== 0 && weekday !== 6;
  }

  isSelected(day: number): boolean {
    const selected = this.selectedDate();
    const month = this.displayedMonth();

    return !!selected &&
      selected.getFullYear() === month.getFullYear() &&
      selected.getMonth() === month.getMonth() &&
      selected.getDate() === day;
  }

  selectDay(day: number): void {
    if (!this.isAvailable(day)) return;

    const month = this.displayedMonth();

    this.selectedDate.set(
      new Date(month.getFullYear(), month.getMonth(), day)
    );

    this.selectedTime.set(null);
  }

  updateName(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
  }

  updateEmail(event: Event): void {
    this.email.set((event.target as HTMLInputElement).value);
  }

  updatePhone(event: Event): void {
    this.phone.set((event.target as HTMLInputElement).value);
  }

  updatePrivacy(event: Event): void {
    this.privacyAccepted.set(
      (event.target as HTMLInputElement).checked
    );
  }
}
