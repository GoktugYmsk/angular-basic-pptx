import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PptxGenJS from 'pptxgenjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';

  generatePpt() {
    let pptx = new PptxGenJS();

    let slide = pptx.addSlide();
    slide.addText('Merhaba Dünya', { x: 1, y: 1, fontSize: 18 });
    pptx.writeFile({ fileName: 'example.pptx' });
  }
}
