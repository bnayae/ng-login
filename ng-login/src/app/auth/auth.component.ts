import { Component, OnInit } from '@angular/core';

import { AuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log('logged-in = ' + user);
      this.user = user;
    });
  }

  public signInWithGoogle(): void {
    console.log('log-in');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public signInWithLinkedIn(): void {
    console.log('Google log-in');
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
