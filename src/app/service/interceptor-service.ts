import { Injectable } from "@angular/core";
import { TokenService } from "./token-service";
import { Observable } from "rxjs";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class InterceptorService {

    constructor(private tokenService: TokenService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        let intReq = req;
        const token = this.tokenService.getToken();
        if (token!= null){
            intReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            })
        }
        return next.handle(intReq);
    }
}
export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    userClass: InterceptorService,
    multi: true
}]
