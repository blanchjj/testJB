import { NgModule, Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'fx-datepicker',
    providers: [DatePipe],
    templateUrl: './datepicker.component.html',  
    styles: [`
    .dp-popup {
        position: absolute;
        padding:10px;
        background-color: #fff;
        border: 1px solid #ccc;      
        z-index:2;
    }
    .input-group.date { width:200px;}
  `]  
})
export class DatepickerComponent implements AfterViewInit {
    public dt: Date = new Date();
    @Input() value: string;
    @Input() id: string;
    @Output() dateModelChange: EventEmitter<Date> = new EventEmitter();
    private showDatepicker: boolean = false;
    private minDate: Date = new Date();

    constructor(private datePipe: DatePipe) { }

    private transformDate(date:Date):string {
        var d = new DatePipe('pt-PT').transform(date, 'yyyy/MM/dd');
        return d;
    }

    ok(): void {
        console.log("datepicker button OK pressed")
        this.apply();
        this.close();
    }

    today(): void {
        this.dt = new Date();
        this.apply();
        this.close();
    }

    clear(): void {
        this.dt = this.value = void 0;
        this.close();
    }

    private apply(): void {       
        this.value = this.transformDate(this.dt);
        this.dateModelChange.emit(this.dt);       
    }

    open() {
        this.showDatepicker = true;
    }

    close() {
        this.showDatepicker = false;
    }
    
    onSelectionDone(event) {
        this.dt = event;
        this.apply();
        this.close();
    }

    onClickedOutside(event) {
        console.log("onClickedOutside", event);
        if (this.showDatepicker) this.close();
    }
    
    ngAfterViewInit() {
        this.dt = new Date(this.value);
    }
}