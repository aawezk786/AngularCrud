import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string> {
    constructor(private _employeeService: EmployeeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
        return this._employeeService.getEmployees()
            .pipe(
                catchError((err: string) => Observable.of(err))
            );
    }
}
