import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService,
        private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
            map(employee => {
                const employeeExists = !!employee;

                if (employeeExists) {
                    return true;
                } else {
                    this._router.navigate(['notfound']);
                    return false;
                }
            }),
            catchError((err) => {
                console.log(err);
                return Observable.of(false);
            })
        );
    }
}
