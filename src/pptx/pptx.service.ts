import { Injectable } from '@angular/core';
import PptxGenJS from 'pptxgenjs';

@Injectable({
  providedIn: 'root',
})
export class PptxService {
  constructor() {}

  generatePpt() {
    let pptx = new PptxGenJS();

    let slide = pptx.addSlide();
    slide.addText('Merhaba Dünya', { x: 1, y: 1, fontSize: 18 });
    pptx.writeFile({ fileName: 'example.pptx' });
  }
}
