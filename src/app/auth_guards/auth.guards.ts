import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StoregeService} from "../services/storage.service";
//import { Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate{
  
  constructor( private router: Router,
	private storageService: StorgeService) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
	console.log(this.storageService.isAuthenticated());
  	if ( localStorage.getItem( 'currentUser' ) ) {
  		// Logged in so return true
  		return true;
  	}

  	// Not logged in so redirect to login page with the return url
  	this.router.navigate( ['/auth'], { queryParams: { returnUrl: state.url } } );
  	return false;
  }

}