import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private router: Router, private snack: MatSnackBar) {}

  authError() {
    this.snack.open('You must be logged in!', 'OK', {
      duration: 5000
    });

    return this.snack._openedSnackBarRef
      .onAction()
      .pipe(
        tap(_ =>
          this.router.navigate(['/login'])
        )
      )
      .subscribe();
  }
}