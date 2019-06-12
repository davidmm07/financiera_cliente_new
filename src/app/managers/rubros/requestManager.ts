import axios, { AxiosInstance } from 'axios';
import { HttpErrorInterceptor } from '../../interceptors/httpErrorInterceptor'
export class RequestManager {
    private uri: string;
    private axiosInstance: AxiosInstance;
    constructor(uri: string) {
        const token = window.localStorage.getItem('id_token');
        console.log('token', token, 'uri', uri);
        // Set default timeout for all http request.
        this.axiosInstance = axios.create({
            timeout: 12000
          });
          // Set request error interceptor for all http request.
        this.axiosInstance.interceptors.request.use(
            error => HttpErrorInterceptor.ErrorHandler(error)
        )
        // Set token for api authorization.
        if (token !== undefined && token !== null) {
            axios.defaults.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        // Set uri for the current request.
        this.uri = uri;
    }

    /**
     * get
     */
    public async get(queryParams?: any, pathParams?: string) {
        let fUri = this.uri;
        if(pathParams !== undefined){
            fUri = fUri + pathParams;
        }
        return this.axiosInstance.get(fUri, {
            params: queryParams
        });
    };

    /**
     * post
     */
    public async post(data: any) {
        return this.axiosInstance.post(this.uri, data);
    }

    /**
     * put
     */
    public async put(id: number, data: any) {
        return this.axiosInstance.put(this.uri + '/' + id, data);
    }

    /**
     * delete
     */
    public async delete(id: number) {
        return this.axiosInstance.delete(this.uri + '/' + id);
    }
}