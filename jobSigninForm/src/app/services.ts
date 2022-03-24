import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Jobs } from "./models/jobs";

@Injectable()
export class JobService {

    constructor(private http: HttpClient) {}
    
    postDatas(myjob: Jobs) {
        const body = JSON.stringify(myjob)
        this.http.post<any>('http://localhost:4000', body).subscribe(data => {
            console.log("result:");
            console.log(data);
        })
    }
}
