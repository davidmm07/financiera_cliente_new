export class HttpErrorInterceptor {
    public static ErrorHandler(error: any){
        console.log('error', error);
        return Promise.reject({ ...error })
    }
}