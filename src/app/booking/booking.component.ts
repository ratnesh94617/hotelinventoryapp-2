import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Booking } from './constant';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookingService } from './booking.service';
import { merge, mergeMap } from 'rxjs';
import { CustomValidators } from './validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    console.log(roomId);
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId, disabled: true },
          { validators: [Validators.required] }
        ),
        guestEmail: this.fb.control('', {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
        }),
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [0],
        bookingDate: [''],
        mobileNumber: [
          '',
          {
            updatedOn: 'blur',
            validators: [
              Validators.required,
              Validators.pattern('^[0-9]{10}$'),
            ],
          },
        ],
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            CustomValidators.ValidateName,
            CustomValidators.SpecialCharacterValidation('#'),
          ],
        ],
        address: this.fb.group({
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          city: ['', { validators: [Validators.required] }],
          state: ['', { validators: [Validators.required] }],
          country: [''],
          zipCode: [''],
        }),
        guests: this.fb.array([
          this.fb.group({
            guestName: new FormControl('', {
              validators: [Validators.required],
            }),
            age: [''],
          }),
        ]),
        tnc: new FormControl(false, [Validators.requiredTrue]),
      },
      { updateOn: 'blur', validators: [CustomValidators.ValidateCheckInOut] }
    );
    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
      // this.bookingService.bookingRoom(data).subscribe((response) => {
      //   console.log('Response', response);
      // });
      this.bookingForm.valueChanges
        .pipe(mergeMap((data) => this.bookingService.bookingRoom(data)))
        .subscribe((data) => {});
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: 0,
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
      // roomId: '401',
      guestEmail: '',
      checkinDate: new Date(),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: 0,
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  addGuest() {
    // const guests = this.bookingForm.get('guests') as FormArray;
    this.guests.push(
      this.fb.group({
        guestName: ['', { validators: [Validators.required] }],
        age: [''],
      })
    );
  }

  addPassport() {
    // const guests = this.bookingForm.get('guests') as FormArray;
    // this.guests.push(this.fb.group({ passportNumber: new FormControl(''), country: [''] }));

    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.contains('passport'))
      this.bookingForm.removeControl('passport');
  }

  deleteGuest(index: number) {
    this.guests.removeAt(index);
  }
}
