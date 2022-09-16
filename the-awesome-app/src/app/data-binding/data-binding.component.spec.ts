import {DataBindingComponent} from './data-binding.component';
import {TestBed} from '@angular/core/testing';

fdescribe("DataBindingComponent", () => {

    it("Test1", () => {

        //Load the component
        const fixture = TestBed.createComponent(DataBindingComponent);
        const instance = fixture.componentInstance; // Class
        const dElement = fixture.debugElement; // View
        expect(instance).toBeTruthy();
        expect(dElement).toBeTruthy();
    });

    it("Test2", () => {

        //Load the component
        const fixture = TestBed.createComponent(DataBindingComponent);
        fixture.detectChanges();
        const instance = fixture.componentInstance; // Class
        const dElement = fixture.debugElement;
        expect(instance.count).toBe(10);
        instance.inc({});
        expect(instance.count).toBe(11);
        fixture.detectChanges();
        let content = dElement.nativeElement.querySelector("#ctr").textContent;
        expect(content).toContain("11");

        instance.inc({});
        fixture.detectChanges();
        content = dElement.nativeElement.querySelector("#ctr").textContent;
        expect(content).toContain("12");


    });

})