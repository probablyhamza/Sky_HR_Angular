import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string): SafeHtml {
    if(!searchTerm) {
      return value;
    }
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const highlightedValue = value.replace(regex, `<span style="background-color: yellow;">$1</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }

}
