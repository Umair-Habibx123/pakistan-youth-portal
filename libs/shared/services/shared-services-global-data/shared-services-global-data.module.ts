import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { SharedServicesAuthModule } from '../auth/shared-services-auth/shared-services-auth.module';
import { SharedServicesDataModule } from '../data/shared-services-data/shared-services-data.module';
import { UserInterface } from 'libs/shared/interface/user-interface';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { SharedHelpersFieldValidationsModule } from 'libs/shared/helpers/field-validations/shared-helpers-field-validation/shared-helpers-field-validation.module';

declare var $: any;

@NgModule({
  imports: [CommonModule],
})
export class SharedServicesGlobalDataModule {
  currentUser = {} as UserInterface;

  private subject = new Subject<any>();

  private pageRight = new BehaviorSubject<any>([]);

  private _headerTitleSource = new Subject<string>();
  header_title$ = this._headerTitleSource.asObservable();

  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading$$.asObservable();

  private _freeTransationID = new BehaviorSubject<string>('message');
  isLoad$ = this._freeTransationID.asObservable();

  private _challanData = new BehaviorSubject<any>([]);

  private _partyID = new BehaviorSubject<string>('message');
  isLoadParty$ = this._partyID.asObservable();

  private selectedFiles = new BehaviorSubject<any>([]);   // for template in payroll
  selectedFiles$ = this.selectedFiles.asObservable();

  constructor(
    private router: Router,
    private authService: SharedServicesAuthModule,
    private dataService: SharedServicesDataModule,
    private valid: SharedHelpersFieldValidationsModule
  ) {}

  setHeaderTitle(title: string) {
    this._headerTitleSource.next(title);
  }

  setLoadingIndicator(value: boolean) {
    this.isLoading$$.next(value);
  }
  setTransation(value: string) {
    this._freeTransationID.next(value);
  }

  setSelectedTemplateData(data:any){
    this.selectedFiles.next(data);
  }

  getLocalUserData() {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  setPageRightVal(item: any) {
    this.pageRight.next(item);
  }

  getPageRightVal(): Observable<any> {
    return this.pageRight.asObservable();
  }

  getUserId(): number {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      return this.currentUser.userLoginId;
    } else {
      return 0;
    }
  }

  getTeacherID(): number {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      return this.currentUser.teacherID;
    } else {
      return 0;
    }
  }
  getPageRights(routeTitle: string, userID: any) {
    this.dataService
      .getHttp(
        'user-api/Role/getPageRight?userID=' +
          parseInt(userID) +
          '&routeTitle=' +
          routeTitle,
        ''
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          this.setPageRightVal(response);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getUserName(): string {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      return this.currentUser.fullName;
    } else {
      return '';
    }
  }

  getRoleId(): number {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      return this.currentUser.roleId;
    } else {
      return 0;
    }
  }

  getRoleName(): string {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      return this.currentUser.roleTitle;
    } else {
      return '';
    }
  }
  setMenuItems(item: any) {
    this.subject.next(item);
  }

  getMenuItems(): Observable<any> {
    return this.subject.asObservable();
  }

  setChallanDataItems(item: any, month: any, year: any) {
    this._challanData.next({ item, month, year });
  }

  setEmployeeDetails(value: any) {
    localStorage.setItem('employeeDetails', JSON.stringify(value));
    // this._partyID.next(value);
  }

  getEmployeeDetails() {
    return JSON.parse(localStorage.getItem('employeeDetails') || '[]');
  }

  getChallanDataItems(): Observable<any> {
    return this._challanData.asObservable();
  }

  checkRouterUrl(listItems: any, routerUrl: any) {
    var pRoute = routerUrl.split('/')[1];
    var cRoute = routerUrl.split('/')[2];

    var row = listItems.filter(
      (m: { parentRoute: any; routeTitle: any }) =>
        m.parentRoute == pRoute && m.routeTitle == cRoute
    );

    if (row.length == 0) {
      this.router.navigate(['/home']);
    } else {
      // console.log(row)
      this.setPermission(row);
    }
  }

  setPermission(item: any) {
    this.subject.next(item);
  }

  getPermission(): Observable<any> {
    return this.subject.asObservable();
  }

  reappDateCheck(dateValue: any, lastDate: any, finYear: any) {
    const years = finYear.split('-');
    const startDate = new Date(`7/1/${years[0]}`);
    const endDate = new Date(`6/30/${years[1]}`);
    if (dateValue >= startDate && dateValue <= endDate) {
      if (dateValue <= lastDate) {
        this.valid.apiInfoResponse(
          'Date must be greater than previously entered date'
        );
        return false;
      } else return true;
    } else {
      this.valid.apiInfoResponse('Date must be within financial year');
      return false;
    }
  }

  sortData(property: any, myData: any, isAsc: boolean) {
    console.log(property);
    if (isAsc) {
      myData.sort((a: any, b: any) => 0 - (a[property] > b[property] ? -1 : 1));
    } else {
      // Descending
      myData.sort((a: any, b: any) => 0 - (a[property] > b[property] ? 1 : -1));
    }
    return myData;
  }

  //print Asset Register Report
  printData(printSection: string, sizeName: string) {
    var contents = $(printSection).html();

    var frame1 = $('<iframe />');
    frame1[0].name = 'frame1';
    // frame1.css({ position: 'absolute', top: '-1000000px' });
    $('body').append(frame1);
    var frameDoc = frame1[0].contentWindow
      ? frame1[0].contentWindow
      : frame1[0].contentDocument.document
      ? frame1[0].contentDocument.document
      : frame1[0].contentDocument;
    frameDoc.document.open();

    //Create a new HTML document.
    // frameDoc.document.write(
    //   "<html><head><title>DIV Contents</title>" +
    //     "<style>" +
    //     printCss +
    //     "</style>"
    // );

    //Append the external CSS file. <link rel="stylesheet" href="../../../styles.scss" /> <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
    frameDoc.document.write(
      '<style type="text/css" media="print">@page { size: ' +
        sizeName +
        '; }</style>'
    );
    frameDoc.document.write(
      // '<link rel="stylesheet" href="../../../../../../apps/society/src/styles.scss" type="text/scss"  media="print"/>'
      // '<link rel="stylesheet" href="../../../../../ui/src/lib/styles/print/styles.css" type="text/css"  media="print"/>'
      '<link rel="stylesheet" href="assets/styles.css" type="text/css"  media="print"/>'
      // '<link rel="stylesheet" href="assets/styles.css" type="text/css"  media="print"/>'
      // '<link rel="stylesheet" href="../css/bootstrap.css" type="text/css"  media="print"/>'
    );
    frameDoc.document.write('</head><body>');

    //Append the DIV contents.
    frameDoc.document.write(contents);
    frameDoc.document.write('</body></html>');

    frameDoc.document.close();

    setTimeout(function () {
      window.frames[0].focus();
      window.frames[0].print();

      frame1.remove();
    }, 500);
  }

  /****************************** */
  /*********** Text Masks ******* */
  /****************************** */
  cnicMask(): any {
    return [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
    ];
  }

  mobileMask(): any {
    return [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }

  phoneMask(): any {
    return [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  }

  phoneMaskS(): any {
    return [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }

  ntnMask(): any {
    return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
  }

  bpsMask(): any {
    return [/\d/, /\d/];
  }

  IBANMask(): any {
    return [
      /[A-Z]/,
      /[A-Z]/,
      /\d/,
      /\d/,
      /[A-Z]/,
      /[A-Z]/,
      /[A-Z]/,
      /[A-Z]/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }

  // export in excel call from any child page
  exportExcel(elementName: any, fileName: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      document.getElementById(elementName)
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName + '.xlsx');
  }
}
