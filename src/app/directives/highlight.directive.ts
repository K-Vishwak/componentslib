import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: 'div[type=text]'
})
export class AppHighlight implements OnChanges{
    @Input() appHighlight = '';
    @Input() defaultColor = '';

    constructor(private elementRef: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.elementRef.nativeElement.style.color = this.appHighlight || this.defaultColor;
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.highlight('yellow');
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.highlight('red');
    // }

    highlight(color) {
        this.elementRef.nativeElement.style.color = color || this.defaultColor;
    }

}