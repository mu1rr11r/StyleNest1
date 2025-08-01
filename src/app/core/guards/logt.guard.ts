import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logtGuard: CanActivateFn = (route, state) => {
const _Router=inject(Router)
if(typeof localStorage !=='undefined'){
    if(localStorage.getItem('userToken')!==null)
    {
          _Router.navigate(['/logout'])

    return false;
  }
  else{
    return true;
  }
}
else{
  return false
}
};
