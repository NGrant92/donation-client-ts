import { inject } from 'aurelia-framework';
import { DonationService } from '../services/donation-service';
import { Router } from 'aurelia-router';

@inject(DonationService, Router)
export class Candidate {
  donationService: DonationService;
  router: Router;

  firstName = '';
  lastName = '';
  office = '';

  constructor(ds, rt) {
    this.donationService = ds;
    this.router = rt;
  }

  addCandidate(e) {
    this.donationService.addCandidate(
      this.firstName,
      this.lastName,
      this.office,
    );

    this.router.navigate('home');
  }
}
