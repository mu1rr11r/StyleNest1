import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { routes } from '../../app.routes';

export const authGuard: CanActivateFn = (route, state) => {

  const _Router=inject(Router)
  if(localStorage.getItem('userToken')!==null)
    {
    return true;
  }
  else{
    _Router.navigate(['/login'])
    return false;
  }
};
