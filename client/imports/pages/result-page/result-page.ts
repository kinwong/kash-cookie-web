import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'result-page',
    styleUrls: ['./result-page.html'],
    template: `
        <div>
            <h1>Result</h1>
        </div>
    `
})
export class ResultPageComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void { }
}