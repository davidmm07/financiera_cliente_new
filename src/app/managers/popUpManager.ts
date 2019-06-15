import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';


@Injectable({
    providedIn: 'root',
})
export class popUpManager {
    constructor(
        private toast: NbToastrService
    ){}
    /**
     * showToast
     */
    public showToast(status, message: string, tittle = '') {
        this.toast.show(message, tittle, { status });
    }
}